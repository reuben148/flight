import React from 'react'

function footer() {
  return (
  <div>
    <footer class="bg-slate-600 text-white py-12 px-6 mt-[30px]">
  <div class="container mx-auto">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
      
    
      <div>
        <img src="plane.jpeg" alt="Flight Booking" class="w-32 mb-4"></img>
        <p class="text-lg font-semibold">Book Your Flight with Ease!</p>
      </div>

     
      <div>
        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gray-400">Home</a></li>
          <li><a href="#" class="hover:text-gray-400">About Us</a></li>
          <li><a href="#" class="hover:text-gray-400">Services</a></li>
          <li><a href="#" class="hover:text-gray-400">Contact</a></li>
          <li><a href="#" class="hover:text-gray-400">FAQs</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4">Customer Support</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-gray-400">Help Center</a></li>
          <li><a href="#" class="hover:text-gray-400">Track My Flight</a></li>
          <li><a href="#" class="hover:text-gray-400">Booking Policy</a></li>
          <li><a href="#" class="hover:text-gray-400">Terms of Service</a></li>
        </ul>
      </div>

   
      <div>
        <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

    </div>

    <div class="text-center text-sm">
      <p>&copy; 2025 FlightBooking Inc. All Rights Reserved.</p>
      <p><a href="#" class="hover:text-gray-400">Privacy Policy</a> | <a href="#" class="hover:text-gray-400">Terms of Use</a></p>
    </div>
  </div>
</footer>


    </div>
  )
}

export default footer