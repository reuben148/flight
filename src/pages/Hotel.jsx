import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer'
import Icons from '../component/icons'
import FetchFlight from '../component/fetchflight'

function Hotel() {
  return (
    <div>
      <div className='bg-blue-500 text-white font-serif text-center animate-move-left-right'>
        For emergency, kindly contact 09071009969, an immediate response is assured....
     </div>

    <div className='text-center text-3xl mt-[10px] '>
      <p className='font-serif'>Going Somewhere?</p>
    </div>
    <div className='flex gap-8 grid grid-cols-1 lg:grid-cols-5 gap-5 mt-[10px]'>
    <div className='flex gap-1 hover:bg-blue-200'>
    <i class="fa-solid fa-plane-circle-check mt-[3px]"></i>
    <p className='font-serif'>Flight</p>
    </div>
    <div className='flex gap-1 hover:bg-blue-200'>
    <i class="fa-solid fa-hotel mt-[3px]"></i>
    <p className='font-serif'>Hotel</p>
    </div>
    <div className='flex gap-1 hover:bg-blue-200'>
    <i class="fa-solid fa-house mt-[4px]"></i>
    <p className='font-serif'>Shortlets</p>
    </div>
    <div className='flex gap-1 hover:bg-blue-200'>
    <i class="fa-solid fa-suitcase mt-[4px]"></i>
    <p className='font-serif'>Manage Bookings</p>
    </div>
    <div className='flex gap-1 hover:bg-blue-200'>
    <i class="fa-solid fa-certificate mt-[4px] text-yellow-400"></i>
    <p className='font-serif'>We offer the best deals in the industry!</p>
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

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
      <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='w-[300px] h-[300px]' src="flight.jpg" alt="paypal" />
     <div className='flex gap-10 mt-[5px]'>
     <p className='font-serif text-blue-500 text-xl'>Airfrance</p>
     <p className='font-serif border bg-yellow-500 text-white rounded-[5px]'>Book flight</p>
     </div>
     <div className='flex gap-5 mt-[5px]' >
     <p className='font-serif'>price-$1000</p>
     <p className='font-serif'>Top Flight Deal</p>
     </div>
     </div>
    
      <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='h-[300px] w-[250px]' src="flight1.jpg" alt="bank transfer" />
     <div className='flex gap-10 mt-[5px]'>
     <p className='font-serif text-blue-500 text-xl'>AirPeace</p>
     <p className='font-serif border bg-yellow-500 text-white rounded-[5px]'>Book flight</p>
     </div>
     <div className='flex gap-5 mt-[5px]' >
     <p className='font-serif'>price-$2000</p>
     <p className='font-serif'>Top Flight Deal</p>
     </div>
     </div>

          <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='h-[300px] w-[300px] ml-[-1px]' src="flying.jpg" alt="bitcoin" />
     <div className='flex gap-10 mt-[5px]'>
     <p className='font-serif text-blue-500 text-xl'>Fly Emirate</p>
     <p className='font-serif border bg-yellow-500 text-white rounded-[5px]'>Book flight</p>
     </div>
     <div className='flex gap-5 mt-[5px]' >
     <p className='font-serif'>price-$3000</p>
     <p className='font-serif'>Top Flight Deal</p>
     </div>
     </div>
     </div>


<Icons />
<Footer />
    </div>
  )
}

export default Hotel