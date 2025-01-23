import React, { useState, useEffect } from 'react';

const FetchFlight = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const API_KEY = 'your_api_key_here';  
  const endpoint = `https://api.aviationstack.com/v1/flights?access_key=86b3e9ea28f4ef71517bd06103ad3d6`;


  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch flight data');
        }
        const data = await response.json();
        setFlights(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);
  const parseTimeString = (timeString) => {
    return timeString ? new Date(timeString) : null;
  };

  
  useEffect(() => {
    const filterFlights = () => {
      const filtered = flights.filter(flight => {
        const depTime = flight.departure.estimated;
        const arrTime = flight.arrival.estimated;

        const parsedDepTime = parseTimeString(depTime);
        const parsedArrTime = parseTimeString(arrTime);
        const parsedUserDepTime = parseTimeString(departureTime);
        const parsedUserArrTime = parseTimeString(arrivalTime);

        // Compare times if user input is provided
        const isDepartureValid = parsedUserDepTime ? parsedDepTime >= parsedUserDepTime : true;
        const isArrivalValid = parsedUserArrTime ? parsedArrTime >= parsedUserArrTime : true;

        return isDepartureValid && isArrivalValid;
      });

      // Limit the filtered results to 3 or 6 flights
      setFilteredFlights(filtered.slice(0, 6)); // Change this to .slice(0, 3) to show only 3 flights
    };

    // Trigger filtering if either departure or arrival time has been typed
    if (departureTime || arrivalTime) {
      filterFlights();
    } else {
      setFilteredFlights([]); 
    }
  }, [departureTime, arrivalTime, flights]); 

  
  const handleDepartureTimeChange = (e) => setDepartureTime(e.target.value);
  const handleArrivalTimeChange = (e) => setArrivalTime(e.target.value);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-full mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Flight Information</h1>

      <div className="mb-6 flex flex-col sm:flex-row sm:space-x-4 mb-6 justify-center">
        <div className="flex flex-col mb-4 sm:mb-0">
          <label htmlFor="departureTime" className="mb-2 text-sm text-gray-700">Departure Time</label>
          <input
            type="date"
            id="departureTime"
            value={departureTime}
            onChange={handleDepartureTimeChange}
            placeholder="(e.g., 2025-01-17 15:30)"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="arrivalTime" className="mb-2 text-sm text-gray-700">Arrival Time</label>
          <input
            type="date"
            id="arrivalTime"
            value={arrivalTime}
            onChange={handleArrivalTimeChange}
            placeholder="(e.g., 2025-01-17 17:30)"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Display filtered flights only if input is provided */}
      {filteredFlights.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFlights.map((flight, index) => (
            <div key={index} className="border rounded-lg shadow-md p-4 flex flex-col items-center">
              {/* Flight Image / Airline Logo */}
              <div className="w-24 h-24 mb-4">
                {flight.airline.logo ? (
                  <img src={flight.airline.logo} alt={flight.airline.name} className="w-full h-full object-contain" />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
                    No logo
                  </div>
                )}
              </div>

              {/* Flight Information */}
              <div className="text-center">
                <h3 className="text-xl font-bold">{flight.flight_iata}</h3>
                <p className="text-sm text-gray-500">{flight.flight_status}</p>
              </div>

              <div className="mt-4 w-full text-center">
                <p className="text-sm">{flight.departure.airport} - {flight.departure.city}</p>
                <p className="text-sm">{flight.arrival.airport} - {flight.arrival.city}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show message if no results are found or if no input was provided yet
        (departureTime || arrivalTime) && (
          <p className="text-center text-gray-500 mt-6">No flights match your search criteria.</p>
        )
      )}
    </div>
  );
};

export default FetchFlight;
