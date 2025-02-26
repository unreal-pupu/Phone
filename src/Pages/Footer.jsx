import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>

        <footer class="bg-gray-800 text-white py-8 mt-24">
  <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
    
    <div class="flex items-center space-x-4 mb-8 md:mb-0">
      <h1 class="text-2xl font-bold uppercase text-red-500 font-poppins">phlox</h1>
      <p class="text-sm text-gray-400 font-poppins">We fix,sell,Buy&Swarp mobile phones </p>
    </div>

    
    <div class="flex flex-col items-center md:items-end">
      <p class="text-sm text-gray-400 mb-2">Follow Us</p>
      <div class="flex space-x-6">
        <a href="https://facebook.com/YourCompany" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors duration-300">
        <FaFacebook /> 
        </a>

        <a href="https://x.com/YourCompany" target="_blank" class="text-gray-400 hover:text-black transition-colors duration-300">
        <FaXTwitter />
        </a>
     
        <a href="https://instagram.com/YourCompany" target="_blank" class="text-gray-400 hover:text-pink-500 transition-colors duration-300">
        <FaInstagram />
        </a>
        <a href="https://linkedin.com/company/YourCompany" target="_blank" class="text-gray-400 hover:text-blue-700 transition-colors duration-300">
        <CiLinkedin />
        </a>
      </div>
    </div>
  </div>

  
  <div class="container mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h3 class="font-semibold text-lg mb-2">About Us</h3>
      <p class="text-sm text-gray-400 font-poppins">we specialize in providing top-notch mobile phone repair services, offering a wide range of phones for sale, and facilitating easy swaps for your old devices. Whether you're in need of a quick fix, a brand-new phone, or just looking to upgrade, we're here to help with fast, reliable, and affordable solutions tailored to your needs</p>
    </div>

    <div>
      <h3 class="font-semibold text-lg mb-2 font-poppins">Links</h3>
      <ul class="space-y-2 text-sm text-gray-400 font-poppins">
        <li className='hover:text-white capitalize'>about us</li>
        <li className='hover:text-white capitalize'>FAQ</li>
        <li className='hover:text-white capitalize'>privacy policy</li>
      </ul>
    </div>

    
    <div>
      <h3 class="font-semibold text-lg mb-2 font-poppins">Services</h3>
      <ul class="space-y-2 text-sm text-gray-400 font-poppins">
      <li className='hover:text-white capitalize'>phone repair</li>
      <li className='hover:text-white capitalize'>sell your  device</li>
      <li className='hover:text-white capitalize'>swarp your device</li>
      <li className='hover:text-white capitalize'>swarp your device</li>
       
      </ul>
    </div>

    <div>
      <h3 class="font-semibold text-lg mb-2 font-poppins">Get in Touch</h3>
      <p class="text-sm text-gray-400 font-poppins">Email: <a href="mailto:contact@yourcompany.com" class="hover:text-white">contact@yourcompany.com</a></p>
      <p class="text-sm text-gray-400 font-poppins">Mobile: <a href="tel:+1234567890" class="hover:text-white">+1 (234) 567-890</a></p>
      <p class="text-sm text-gray-400 font-poppins">Opening Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
      <p class="text-sm text-gray-400 font-poppins">Address: 123 Business St, City, Country</p>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer