import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer'
import Button from '../component/button'


function visa() {
  return (
    <div>
     <div class="flex flex-col md:flex-row justify-between items-center py-12 px-6 ">
     
     <div className='text-center border sm:h-[550px] md:h-[450px] md:h-[500px] rounded-[5px]'>
      <p className='font-serif text-2xl '>Travel Visa Assitance program</p>
      <p className='font-serif text-3xl text-center text-blue-500'>Travelbeta</p>
      
      <div className='mt-[20px] gap-5'>
        <p className='font-serif text-slate-400'>Travelbeta visa team is made up of specialized and seasoned experts <br/> in visa processing.</p>
        <p className='font-serif mt-[10px] text-slate-400'>Our process includes profiling, helping you complete your visa application forms, <br /> vetting documents, getting appointment dates, conducting pre-interview <br/> sessions where applicable, with the aim of increasing your chances of visa success.</p>
        <p className='font-serif mt-[10px] text-slate-400'>We do not encourage immigration defaults and kindly note that issuance <br/> of visas  is at the discretion of the embassy</p>  
        <p className='font-serif mt-[10px] text-slate-400'>Contact our visa consultants for all your Travel visa related questions.</p>
        <div className='flex font-serif gap-20 mt-[10px] ml-[10px]'>
          <h2>E-mail</h2>
          <p className='text-slate-400 font-serif'>visa@travelbeta.com</p>
        </div>  
        <div className='flex font-serif gap-20 mt-[10px] ml-[10px]'>
          <h2>Phone Number</h2>
          <p className='text-slate-400 font-serif'>09071009969</p>
        </div> 
      </div>
     </div>

     <div className='w-[400px] h-[400px] hidden lg:block xl:block hover:scale-110 transition-transform duration-300 mr-[70px] mt-[-100px]'>
      <img className='rounded-[10px]' src="plane.jpeg" alt="" />
     </div>
 
    <div className='block lg:hidden'> 
     <div className=''>
      <div className='border-1 bg-blue-800 mt-[20px]  text-white w-[380px] h-[150px] text-center rounded-[5px] '>
       <h1 className='font-serif mt-[30px] text-start'>Get Visa Assistance Now</h1>
       <div className='flex  ml-[320px] bottom- '>
       <i class="fa-solid fa-bookmark fa-2x"></i>
       </div>
       <p className='font-serif mt-[10px] text-start'>We’re bringing you a new level of comfort.</p>
       </div>
     </div>
     
     <div className='flex mt-[20px]'>
       <p className='font-serif text-3xl'>Traveller's Information</p>
     </div>

     <div className='font-serif mt-[10px] text-center text-slate-400'>
      <p>Why Travelbeta?
Passengers details must be entered as it appears on the passport or ID.</p>
     </div>

     <div className='flex mt-[30px] mr-[200px]'>
      <div class="space-y-4">
      <p className='font-serif '>FIRST NAME</p>
  <input type="text" id="username" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your firstname"></input>
</div>
     </div>

     <div className='flex mt-[30px] mr-[200px]'>
      <div class="space-y-4">
      <p className='font-serif '>LAST NAME</p>
  <input type="text" id="username" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your lastname"></input>
</div>
     </div>

     <div className='flex mt-[30px] mr-[200px]'>
      <div class="space-y-4">
      <p className='font-serif '>E-MAIL</p>
  <input type="text" id="username" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your E-mail"></input>
</div>
     </div>

     <div className='flex mt-[30px] mr-[200px]'>
      <div class="space-y-4">
      <p className='font-serif '>PHONE</p>
  <input type="text" id="username" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your Phone number"></input>
</div>

     </div>
     <div className='flex mt-[30px] mr-[200px]'>
      <div class="space-y-4">
      <p className='font-serif '>MESSAGE</p>
  <input type="text" id="username" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter a text"></input>
</div>
</div>
<div className=''>
<input type='checkbox' className='mr-[320px] mt-[10px] scale-150'></input>
<p className='font-serif'>By proceeding, I acknowledge that <br/> I have read  and agreed to <br/> Travelbeta’s Flight booking</p>
</div>
<Button />
</div>

</div>
<Footer />
    </div>
  )
}

export default visa