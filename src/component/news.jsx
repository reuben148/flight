import React from 'react'


function news() {
  return (
    <div>
     <div className='flex justify-between bg-blue-200 border h-[200px] w-full p-4 mt-[15px]'>
  <div className='flex gap-4 flex-wrap'>
    <i class="fa-solid fa-bullhorn fa-3x text-blue-500 sm:justify-center lg:justify-start"></i>
    <div>
    <p className='font-serif text-xl'>
      Want to get the latest travel news and deals? 
    </p>
    <p className='font-serif text-slate-500'>Enter your email and we'll send them your way.</p>
    </div>
  </div>
  <div className='flex sm:flex-wrap gap-4 flex-col sm:flex-row'>
    <div class="space-y-4 sm:space-y-0 sm:w-1/2">
      <input 
        type="text" 
        id="username" 
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Your name..." 
      />
    </div>
    <div class="space-y-4 sm:space-y-0 sm:w-1/2">
      <input 
        type="text" 
        id="email" 
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Your email..." 
      />
    </div>
    <button 
      type="submit" 
      class="flex items-center justify-center bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-1/2"
    >
      <i class="fas fa-paper-plane mr-2"></i> Submit
    </button>
  </div>
</div>

    </div>
  )
}

export default news