import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer'


function checkout() {
  return (
    <div>
      <div className='text-center text-3xl font-serif text-blue-900'>
        <p>Payment Mode</p>
      </div>
     
     <div className='flex font-serif justify-between text-xl mt-[20px] flex-col '>
        <div className='flex'>
        <p>Paypal</p>
        <i class="fa-brands fa-paypal text-blue-500"></i>
        </div>
        <div className='flex'>
        <p>Bank Transfer</p>
        <i class="fa-solid fa-building-columns text-slate-700"></i>
        </div>
        <div className='flex'>
        <p>Bitcoin</p>
        <i class="fa-brands fa-bitcoin text-orange-500"></i>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
      <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='w-[250px] h-[250px]' src="paypal.jpg" alt="paypal" />
     <p className='font-serif text-blue-500 '>You can pay by paypal mail instead</p>
     <p className='font-serif'>reubenluka555@gmail.com</p>
     </div>
    
      <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='h-[300px] w-[250px]' src="chase.jpg" alt="bank transfer" />

    <p className='font-serif text-blue-500 flex'>pay by bank transfer</p>
     <p className='font-serif text-red-500'>2334901628</p>
     <p className='font-serif'>Palmpay</p>
     </div>

          <div class="h-[430px] w-[300px] bg-white rounded-[15px] shadow-[0_4px_6px_rgba(64,64,64,0.6)]  p-[20px] ml-[45px] mt-[40px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-10 md:border-0 transition-transform duration-300 transform hover:scale-105">
     <img className='h-[250px] w-[250px] ml-[10px]' src="bitcoin.jpg" alt="bitcoin" />
    <p className='font-serif '>pay by bitcoin:</p>
     <p className='font-serif text-red-500'>bybit</p>
     <p className='font-serif'>bitcoin address below:</p>
     <p className='font-serif'>1A1zP1eP5QGefi2DM<br/>PTfTL5SLmv7DivfNa
     </p>
     </div>
     </div>

     </div>
    <Footer/>
    </div>
  )
}

export default checkout