import React from 'react'
import TABLT from '../assets/TABLT.jpg';
import LAPII from '../assets/LAPII.jpg';
import PSFOUR from '../assets/PSFOUR.jpg';
import SWARP from '../assets/SWARP.jpg';
import AFIX from '../assets/AFIX.jpg';
import SPFIX from '../assets/SPFIX.jpg';
import WFIX from '../assets/WFIX.jpg';
import TBFIX from '../assets/TBFIX.jpg';
import PODS from '../assets/PODS.jpg';
import PODSMAX from '../assets/PODSMAX.jpg';
import CDBUY from '../assets/CDBUY.jpg';
import SIXSTUD from '../assets/SIXSTUD.jpg';
import WWT from '../assets/WWT.jpg';
import SALE from '../assets/SALE.jpg';
import PS from '../assets/PS.jpg';
import CNT from '../assets/CNT.jpg';
import WBAND from '../assets/WBAND.jpg';
import GLASS from '../assets/GLASS.jpg';
import CASE from '../assets/CASE.jpg';
import POWERB from '../assets/POWERB.jpg';
import PHONE from '../assets/PHONE.jpg';
import WATCHES from '../assets/WATCHES.jpg';
import STUDN from '../assets/STUDN.jpeg';
import IPHONESIXTEN from '../assets/IPHONESIXTEN.jpg'


const Home = () => {
  return (
    <> 
   <div className="mt-20">
   <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-[#ffffff] text-[#14281d]">
    <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#14281d]">Your One-Stop Shop for Phones & Repairs</h1>
        <p className="text-lg md:text-xl text-[#14281d]">Buy the latest mobile gadgets or get your phone repaired by professionals.</p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img  src={IPHONESIXTEN}
          alt="Mobile Phones and Gadgets"
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
   </div>
      
  <div className="container mx-auto p-8">   

  <div class="we-sell">
  <div class="container mx-auto p-8">
    <div class="text-center mb-8">
      <h5 class="text-3xl font-bold text-center font-poppins mb-8 text-[#14281d] pt-20">We Sell</h5>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={SALE} alt="iPhones" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 font-poppins">iPHONES</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={PODS} alt="AirPods" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">AirPods</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={WWT} alt="Smart Watches" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Smart Watches</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={PODSMAX} alt="AirPods Max" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">AirPods Max</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={STUDN} alt="Onyx Studio 9" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Onyx Studio 9</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={CDBUY} alt="Optional Disc" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Optional Disc</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={CNT} alt="Controller" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Controller</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={PS} alt="Console & Controller" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Console & Controller</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={GLASS} alt="Tempered Glass" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Tempered Glass</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={WBAND} alt="Smartwatch Band" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Smartwatch Band</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={POWERB} alt="Power Banks" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Power Banks</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={CASE} alt="Phone Case" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 font-poppins">Phone Case</h3>
</div>
    </div>
  </div>
</div>


  <div class="we-fix-everything">
  <h2 class="text-3xl font-bold text-center font-poppins mb-8 text-[#14281d] pt-20">We Fix Everything!</h2>
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={SWARP}  alt="iPhone Repair"
    className="w-32 h-40 object-cover mx-auto mt-4 rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 font-poppins">
    iPHONE Repair
  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img
    src={TBFIX}
    alt="iPad Repair"
    className="w-32 h-40 object-cover mx-auto mt-4 rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 font-poppins">iPAD Repair</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img
    src={TABLT}
    alt="Tablet Repair"
    className="w-32 h-40 object-cover mx-auto mt-4 rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">
    Tablet Repairs
  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img
    src={AFIX}
    alt="Smartphone Repair"
    className="w-32 h-40 object-cover mx-auto mt-4 rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">
    Smartphone Repairs
  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img
    src={WFIX}
    alt="Smartwatch Repair"
    className="w-32 h-40 object-cover mx-auto mt-4 rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">
    Smartwatch Repair
  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img
    src={PSFOUR}
    alt="Game Console Repair"
    className="w-32 h-40 object-cover mx-auto mt-4 rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">
    Game Console Repair
  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img
    src={SPFIX}
    alt="Bluetooth Speaker Repair"
    className="min-w-full h-40 object-cover rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">
    Bluetooth Speaker Repair
  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img
    src={LAPII}
    alt="Laptop Repair"
    className="min-w-full h-40 object-cover rounded-md"
  />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">
    Laptop Repairs
  </h3>
</div>
  </div>
</div>
      </div>

     
<div class="we-swap">
  <div class="container mx-auto p-8">
    <div class="text-center mb-8">
      <h5 class="text-3xl font-semibold text-[#14281d] capitalize font-poppins">We Swap</h5>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={SALE} alt="iPhone" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 font-poppins">iPHONE</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={PODS} alt="AirPods" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">AirPods</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={WWT} alt="Smart Watches" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Smart Watches</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={PODSMAX} alt="AirPods Max" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">AirPods Max</h3>
</div>
    </div>
  </div>
</div>

<div class="we-buy">
  <div class="container mx-auto p-8">
    <div class="text-center mb-8">
      <h5 class="text-3xl font-semibold text-[#14281d] capitalize font-poppins">We Buy</h5>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={PHONE} alt="iPhone" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 font-poppins">iPHONE</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={PODS} alt="AirPods" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">AirPods</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={WATCHES} alt="Smart Watches" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Smart Watches</h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src={SIXSTUD} alt="Onyx Studio Speakers" className="w-32 h-40 object-cover mx-auto mt-4 rounded-md" />
  <h3 className="text-xl font-bold text-[#333333] mt-4 capitalize font-poppins">Onyx Studio Speakers</h3>
</div>
    </div>
  </div>
</div>
   
<div class="container mx-auto px-4 pt-20">
  <h2 class="text-center text-2xl font-semibold mb-8 capitalize pb-12 font-poppins text-[#14281d]">common repairs and services</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    
    <div class="border-2 border-[#6a041d] p-6 flex flex-col justify-center items-center">
      <h5 class="text-lg font-bold font-poppins text-[#333333]">Cracked Screen</h5>
      <p class="text-center font-poppins">We know how frustrating it can be to deal with a cracked or broken screen. Our expert technicians can replace your screen quickly, ensuring your phone looks and functions like new. We offer fast, efficient repairs with high-quality parts, all at a fair price, so you don’t have to wait long or break the bank.</p>
    </div>

    
    <div class="border-2 border-[#14281d] p-6 flex flex-col justify-center items-center">
      <h5 class="text-lg font-bold font-poppins text-[#333333]">Battery Issues</h5>
      <p class="text-center font-poppins">Is your phone battery draining too quickly or not holding a charge? We can help! Our team specializes in diagnosing and replacing faulty batteries, restoring your phone’s performance. With our affordable rates and timely service, you won’t have to worry about running out of power during the day.</p>
    </div>

    
    <div class="border-2 border-[#14281d] p-6 flex flex-col justify-center items-center">
      <h5 class="text-lg font-bold font-poppins text-[#333333]">Charging Port Problems</h5>
      <p class="text-center font-poppins">If your phone isn’t charging properly or the charging port seems loose, don’t stress. We offer quick and reliable charging port repairs to get your device back to working condition. Our prices are competitive, and we ensure a fast turnaround, so you can charge your phone without hassle.</p>
    </div>

    
    <div class="border-2 border-[#14281d] p-6 flex flex-col justify-center items-center">
      <h5 class="text-lg font-bold font-poppins text-[#333333]">Software Issues</h5>
      <p class="text-center font-poppins">Software glitches, slow performance, or unresponsive apps can be incredibly annoying. Let our experts troubleshoot and fix your software issues, from factory resets to system upgrades. With our service, your phone will run smoothly once again!</p>
    </div>

    <div class="border-2 border-[#14281d] p-6 flex flex-col justify-center items-center">
      <h5 class="text-lg font-bold font-poppins text-[#333333]">Water Damage</h5>
      <p class="text-center font-poppins">Accidentally dropped your phone in water? No worries! We specialize in water damage repairs, using advanced techniques to dry out your device and restore it to full functionality. Bring it in, and we’ll help you salvage your phone and protect your data.</p>
    </div>

    
    <div class="border-2 border-[#14281d] p-6 flex flex-col justify-center items-center">
      <h5 class="text-lg font-bold font-poppins text-[#333333]">Speaker/Audio Issues</h5>
      <p class="text-center font-poppins">If you're having trouble hearing or being heard during calls, or if the sound quality is poor, our expert technicians can diagnose and fix your speaker or audio issues quickly. Get your phone sounding great again with our repair services.</p>
    </div>

  </div>
</div><div class="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto mt-20">
  <h2 class="text-2xl font-semibold text-center text-[#14281d] font-poppins">Have a Question?</h2>
  <p class="text-center text-[#333333] mb-6 font-poppins">We are here to help! You can reach us through email or phone.</p>
  <div class="flex justify-center gap-12 flex-wrap">

  
    <div class="text-center bg-white p-6 rounded-lg shadow-lg w-64 mb-8 sm:mb-0">
      <h3 class="text-lg font-medium text-[#333333] mb-4 font-poppins">Email Us</h3>
      <p class="text-gray-600 mb-4 font-poppins">For general inquiries, reach us via email.</p>
      <a href="mailto:support@example.com" class="inline-block text-blue-500 hover:text-blue-700">support@vinosgadget.com.com</a>
    </div>
  
    <div class="text-center bg-white p-6 rounded-lg shadow-lg w-64">
      <h3 class="text-lg font-medium text-[#333333] mb-4 font-poppins">Call Us</h3>
      <p class="text-gray-600 mb-4 font-poppins">Prefer to talk to us directly? Give us a call.</p>
      <a href="tel:+1234567890" class="inline-block text-[#444444] hover:text-[#333333]">+234 7031513455</a>
    </div>
  </div>
</div>


    </>
  );
}

export default Home;