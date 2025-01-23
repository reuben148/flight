import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer'
import Icons from '../component/icons'
import FetchFlight from '../component/fetchflight'
import News from '../component/news'

function Hotel() {
  return (
    <div>
     <div className='bg-blue-500 text-white font-serif text-center animate-marquee'>
  For emergency, kindly contact 09071009969, an immediate response is assured....
</div>

 
     <div className="text-center text-3xl mt-6">
  <p className="font-serif text-gray-800">Going Somewhere?</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">

  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
    <i class="fa-solid fa-plane-circle-check text-3xl text-blue-600"></i>
    <p className="font-serif font-medium text-lg text-gray-700">Flight</p>
  </div>

  
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
    <i class="fa-solid fa-hotel text-3xl text-green-600"></i>
    <p className="font-serif font-medium text-lg text-gray-700">Hotel</p>
  </div>


  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
    <i class="fa-solid fa-house text-3xl text-yellow-600"></i>
    <p className="font-serif font-medium text-lg text-gray-700">Shortlets</p>
  </div>

 
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
    <i class="fa-solid fa-suitcase text-3xl text-purple-600"></i>
    <p className="font-serif font-medium text-lg text-gray-700">Manage Bookings</p>
  </div>

  
  <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
    <i class="fa-solid fa-certificate text-3xl text-yellow-400"></i>
    <p className="font-serif font-medium text-lg text-gray-700">We offer the best deals in the industry!</p>
  </div>
</div>


    <br></br>
    <hr></hr>
    <hr></hr>
    <FetchFlight />
   
   <div className='flex justify-between '>
    <div>
      <p className='font-serif text-3xl mt-[20px] ml-[10px]'>Trending Flight Deals</p>
      <p className='font-serif text-slate-400'>Get the best flight deals, airline specials and promotions.</p>
    </div>
    <div className='mt-[20px] border bg-green-500 text-white rounded-[5px] text-center'>
    <i class="fa-brands fa-whatsapp"></i>
      <p className='font-serif'>Need help?</p>
      <p className='font-serif'>click to get in touch.</p>
    </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

  <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
    <img className="w-full h-64 object-cover" src="flight.jpg" alt="Airfrance" />
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <p className="font-serif text-blue-500 text-xl">Airfrance</p>
        <button className="font-serif border bg-yellow-500 text-white rounded-md px-4 py-2">Book Flight</button>
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="font-serif text-gray-700">Price: $1000</p>
        <p className="font-serif text-green-600">Top Flight Deal</p>
      </div>
    </div>
  </div>

  
  <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
    <img className="w-full h-64 object-cover" src="flight1.jpg" alt="AirPeace" />
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <p className="font-serif text-blue-500 text-xl">AirPeace</p>
        <button className="font-serif border bg-yellow-500 text-white rounded-md px-4 py-2">Book Flight</button>
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="font-serif text-gray-700">Price: $2000</p>
        <p className="font-serif text-green-600">Top Flight Deal</p>
      </div>
    </div>
  </div>


  <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
    <img className="w-full h-64 object-cover" src="flying.jpg" alt="Fly Emirate" />
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <p className="font-serif text-blue-500 text-xl">Fly Emirate</p>
        <button className="font-serif border bg-yellow-500 text-white rounded-md px-4 py-2">Book Flight</button>
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="font-serif text-gray-700">Price: $3000</p>
        <p className="font-serif text-green-600">Top Flight Deal</p>
      </div>
    </div>
  </div>
</div>
<Icons />
<News />
<Footer />
    </div>
  )
}

export default Hotel