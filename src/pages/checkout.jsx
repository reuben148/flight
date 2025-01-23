import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer'


function checkout() {
  return (
    <div>
      <div>
  
  <div className='text-center text-3xl font-serif text-blue-900'>
    <p>Payment Mode</p>
  </div>
  
  
  <div className='flex justify-between font-serif text-xl mt-6 flex-col lg:flex-row'>
    <div className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-md transition-all duration-300'>
      <p>Paypal</p>
      <i class="fa-brands fa-paypal text-blue-500 text-2xl"></i>
    </div>
    <div className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-md transition-all duration-300'>
      <p>Bank Transfer</p>
      <i class="fa-solid fa-building-columns text-slate-700 text-2xl"></i>
    </div>
    <div className='flex items-center gap-2 hover:bg-blue-100 p-3 rounded-md transition-all duration-300'>
      <p>Bitcoin</p>
      <i class="fa-brands fa-bitcoin text-orange-500 text-2xl"></i>
    </div>
  </div>


  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
   
    <div className="h-[430px] w-[300px] bg-white rounded-[15px] shadow-lg p-6 mx-auto mt-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      <img className='w-[250px] h-[250px] mx-auto' src="paypal.jpg" alt="paypal" />
      <p className='font-serif text-blue-500 text-center mt-4'>You can pay via PayPal</p>
      <p className='font-serif text-center'>reubenluka555@gmail.com</p>
    </div>
    
    <div className="h-[430px] w-[300px] bg-white rounded-[15px] shadow-lg p-6 mx-auto mt-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      <img className='h-[300px] w-[250px] mx-auto' src="chase.jpg" alt="bank transfer" />
      <p className='font-serif text-blue-500 text-center mt-4'>Pay via Bank Transfer</p>
      <p className='font-serif text-center text-red-500'>2334901628</p>
      <p className='font-serif text-center'>Palmpay</p>
    </div>

    
    <div className="h-[430px] w-[300px] bg-white rounded-[15px] shadow-lg p-6 mx-auto mt-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      <img className='h-[250px] w-[250px] mx-auto' src="bitcoin.jpg" alt="bitcoin" />
      <p className='font-serif text-center mt-4'>Pay via Bitcoin</p>
      <p className='font-serif text-center text-red-500'>Bybit</p>
      <p className='font-serif text-center'>Bitcoin address:</p>
      <p className='font-serif text-center'>
        1A1zP1eP5QGefi2DM<br />
        PTfTL5SLmv7DivfNa
      </p>
    </div>
  </div>
</div>

    
    <Footer/>
    </div>
  )
}

export default checkout