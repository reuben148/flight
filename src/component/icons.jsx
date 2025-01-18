import React from 'react'

function icons() {
  return (
    <div className='flex justify-between mt-[10px] grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-5'>
        <div>
        <svg className='mt-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <path d="M24 0L48 12L24 24L0 12L24 0Z" fill="#2A5A8D"/>
  <path d="M12 12L24 24L36 12L24 0L12 12Z" fill="#F3F3F3"/>
</svg>
<p className='font-serif'>Iata</p>
</div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
  <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <circle cx="12" cy="12" r="10" stroke="#3C8D23"/>
    <path d="M7 8h10m-5 4h5m-7 4h3" stroke="#3C8D23"/>
  </g>
</svg>
<p className='font-serif'>Paystack</p>
</div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
  <path d="M5 5H45V45H5V5Z" fill="#02B3E4"/>
  <path d="M25 13L35 30L25 47L15 30L25 13Z" fill="#FFD100"/>
</svg>
<p className='font-serif'>Flutterwave</p>
</div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <path d="M4 12H44V36H4V12Z" fill="#1C55C3"/>
  <path d="M6 20H42V28H6V20Z" fill="#FFFFFF"/>
  <path d="M8 22H40V26H8V22Z" fill="#1C55C3"/>
</svg>
<p className='font-serif'>Amadues</p>
</div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <circle cx="24" cy="24" r="20" fill="#EF4135"/>
  <path d="M24 10C20.13 10 17 13.13 17 17C17 20.87 20.13 24 24 24C27.87 24 31 20.87 31 17C31 13.13 27.87 10 24 10Z" fill="#FFFFFF"/>
  <path d="M24 14C25.66 14 27 15.34 27 17C27 18.66 25.66 20 24 20C22.34 20 21 18.66 21 17C21 15.34 22.34 14 24 14Z" fill="#EF4135"/>
</svg>
<p className='font-serif'>Interswitch</p>
</div>

    </div>
  )
}

export default icons