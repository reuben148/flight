import React, { useState, useEffect } from 'react';

const FetchFlight = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [showFlights, setShowFlights] = useState(false); // New state to control when to show flights

  const API_KEY = 'your_api_key_here';
  const endpoint = `https://api.aviationstack.com/v1/flights?access_key=148c4bfb7265c204fa01e505bb7f6318`;

  // Fetch flight data from the API
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

  // Filter flights based on the provided departure and arrival time
  useEffect(() => {
    const filterFlights = () => {
      const filtered = flights.filter(flight => {
        const depTime = flight.departure.estimated;
        const arrTime = flight.arrival.estimated;

        const parsedDepTime = parseTimeString(depTime);
        const parsedArrTime = parseTimeString(arrTime);
        const parsedUserDepTime = parseTimeString(departureTime);
        const parsedUserArrTime = parseTimeString(arrivalTime);

        const isDepartureValid = parsedUserDepTime ? parsedDepTime >= parsedUserDepTime : true;
        const isArrivalValid = parsedUserArrTime ? parsedArrTime >= parsedUserArrTime : true;

        return isDepartureValid && isArrivalValid;
      });

      // Limit the filtered results to 6 flights
      setFilteredFlights(filtered.slice(0, 6));
    };

    // Trigger filtering if departure or arrival time is provided
    if (departureTime || arrivalTime) {
      filterFlights();
    } else {
      setFilteredFlights([]);
    }
  }, [departureTime, arrivalTime, flights]);

  // Handle input changes for departure and arrival time
  const handleDepartureTimeChange = (e) => setDepartureTime(e.target.value);
  const handleArrivalTimeChange = (e) => setArrivalTime(e.target.value);

  // Show flight cards when button is clicked
  const handleShowFlights = () => {
    setShowFlights(true); // Show flights after button click
  };

  // Loading or error message
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-full mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Flight Information</h1>

      <div className="mb-6 flex flex-col sm:flex-row sm:space-x-4 justify-center">
        {/* Departure Time Input */}
        <div className="flex flex-col mb-4 sm:mb-0">
          <label htmlFor="departureTime" className="mb-2 text-sm text-gray-700">Departure Time</label>
          <input
            type="date"
            id="departureTime"
            value={departureTime}
            onChange={handleDepartureTimeChange}
            placeholder="(e.g., 2025-01-17)"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Arrival Time Input */}
        <div className="flex flex-col">
          <label htmlFor="arrivalTime" className="mb-2 text-sm text-gray-700">Arrival Time</label>
          <input
            type="date"
            id="arrivalTime"
            value={arrivalTime}
            onChange={handleArrivalTimeChange}
            placeholder="(e.g., 2025-01-17)"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleShowFlights} // Trigger to show flights when clicked
          className="flex items-center justify-center bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-[30px]"
        >
          <i className="fas fa-paper-plane mr-2"></i> Submit
        </button>
      </div>

      {/* Display filtered flights only when showFlights is true */}
      {showFlights && filteredFlights.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredFlights.map((flight, index) => (
    <div key={index} className="border rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl p-4 flex flex-col items-center bg-white">
      
      {/* Flight Image / Airline Logo */}
      <div className="w-32 h-32 mb-4">
        {flight.airline.logo ? (
          <img
            src={`/public/images/${flight.airline.logo}`} // Assuming images are in public/images/
            alt={flight.airline.name}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-sm text-gray-500">
          <img src="flying.jpg" alt="" />
          </div>
        )}
      </div>

      {/* Flight Information */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800">{flight.flight_iata}</h3>
        <p className="text-sm text-blue-700">Book Now</p>
      </div>

      {/* Departure and Arrival Airport Information */}
      <div className="mt-4 w-full text-center">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Departure:</span> Abuja
        </p>
        <p className="text-sm text-gray-600"> 
          <span className="font-semibold">Arrival:</span> Lagos
        </p>
      </div>
      <div className='flex gap-10 font-serif'>
        <p>Price</p>
        <p>$4000</p>
      </div>
    </div>
          ))}
        </div>
      ) : (
        // Show message if no results are found or if no input was provided yet
        showFlights && (departureTime || arrivalTime) && (
          <p className="text-center text-gray-500 mt-6">No flights match your search criteria.</p>
        )
      )}
    </div>
  );
};

export default FetchFlight;
