import React from 'react'
import VGQR from '../assets/VGQR.jpg'
import { FaArrowRight } from "react-icons/fa";
import FCPS from '../assets/FCPS.jpg'
import GALA from '../assets/GALA.jpg'
import APPLEV from '../assets/APPLEV.jpg'
import SELLAIRPOS from '../assets/SELLAIRPOS.jpg'
import GALAXYW from '../assets/GALAXYW.jpg'
import SAMSUNGW from '../assets/SAMSUNGW.jpg'
import SELLCONTROLL from '../assets/SELLCONTROLL.jpg'
import SELLPS from '../assets/SELLPS.jpg'
import XBOX from '../assets/XBOX.jpg'
import SELCNT from '../assets/SELCNT.jpg'
import FIFTENPRO from '../assets/FIFTENPRO.jpg'
import SJBL from '../assets/SJBL.jpg'
import MCH from '../assets/MCH.jpg'
import VINOCA from '../assets/VINOCA.jpg'
import VINOSE from '../assets/VINOSE.jpg'
import VINSW from '../assets/VINSW.jpg'
import VINOST from '../assets/VINOST.jpg'
import GLASS from '../assets/GLASS.jpg'
import PODS from '../assets/PODS.jpg'


const Products = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      image: FIFTENPRO,
      // price: "$1,299",
      description: "Experience the power of the A17 chip with a 48MP camera and dynamic island design."
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      image: GALA,
      // price: "$1,199",
      description: "A true flagship with a 200MP camera, S Pen, and Snapdragon 8 Gen 2 processor."
    },
    {
      id: 3,
      name: "Apple Vision Pro",
      image: APPLEV, 
      // price: "$3,499",
      description: "A revolutionary spatial computing device with ultra-high-resolution displays."
    },
    {
      id: 4,
      name: "AirPods Pro (2nd Gen)",
      image: SELLAIRPOS,
      // price: "$249",
      description: "Active Noise Cancellation, Adaptive Transparency, and personalized spatial audio."
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      image: GALAXYW, 
      // price: "$399",
      description: "Advanced health tracking, fitness features, and a brilliant Always-On Retina display."
    },
    {
      id: 6,
      name: "Samsung Galaxy Watch 6",
      image: SAMSUNGW,
      // price: "$349",
      description: "Premium smartwatch with a sleek design, health tracking, and Wear OS."
    },
    {
      id: 7,
      name: "PlayStation 5 Console",
      image: SELLPS, 
      // price: "$499",
      description: "The ultimate gaming experience with ray tracing, fast SSD, and immersive 3D audio."
    },
    {
      id: 8,
      name: "Xbox Series X",
      image: XBOX, 
      // price: "$499",
      description: "Powerful gaming console with 4K gaming, fast loading times, and Game Pass support."
    },
    {
      id: 9,
      name: "Fancy PlayStation Controllers",
      image: SELCNT,
      // price: "$69",
      description: "Limited edition PS5 and PS4 controllers with custom designs, enhanced grip, adaptive triggers, and RGB lighting for an immersive gaming experience."
    },
    {
      id: 10,
      name: "Bluetooth Speaker JBL Charge 5",
      image: SJBL, 
      // price: "$179",
      description: "Portable speaker with powerful sound, waterproof design, and long battery life."
    },
    {
      id: 11,
      name: "CD Plates - Best Albums Collection",
      image: FCPS,
      // price: "$15 each",
      description: "A collection of top music albums on CD for music lovers."
    },
    {
      id: 12,
      name: "Fast Charging Adapters & Cables",
      image: MCH,
      // price: "$15 each",
      description: "High-speed chargers for iPhones, Samsung, and other devices, supporting fast charging and durability."
    },
    {
      id: 13,
      name: "Phone Pouches & Cases ",
      image: VINOCA,
      // price: "$15 each",
      description: "Stylish and durable pouches designed for maximum protection, available in leather, silicone, and shockproof materials for all major phone brands."
    },
    {
      id: 14,
      name: "PS5 DualSense Controller",
      image: SELLCONTROLL,
      // price: "$15 each",
      description: "Haptic feedback, adaptive triggers, and a built-in microphone for next-gen gaming."
    },
    {
      id: 15,
      name: "Onyx Studio 7 Bluetooth Speaker",
      image: VINOST,
      // price: "$15 each",
      description: "A premium wireless speaker with dual tweeters, deep bass, and an 8-hour battery life for an immersive audio experience."
    },
    {
      id: 16,
      name: "Tempered Glass Screen Protectors ",
      image: GLASS,
      // price: "$15 each",
      description: "Scratch-resistant, anti-fingerprint, and shatterproof protectors designed for various phone models, ensuring long-lasting screen clarity."
    }
  ];

  return (
    <>
     <div className="w-full min-h-screen bg-gray-100 font-poppins pt-20">
     <div
  className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
  style={{ backgroundImage: `url(${PODS})` }}
>
  <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-2xl">
    <h1 className="text-5xl font-bold mb-4 font-poppins">Latest iPhones, Samsung & Gadgets</h1>
    <p className="text-xl font-poppins">
      Discover cutting-edge technology and premium devices at the best prices.
    </p>
    {/* <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 text-lg">
      Shop Now <FaArrowRight />
    </button> */}
  </div>
</div>
      
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-[#6a041d] mb-8 text-center font-poppins">Our Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold font-poppins">{product.name}</h3>
              <p className="text-[#444444] text-md mt-2 font-poppins">{product.description}</p>
              {/* <div className="flex justify-between items-center mt-6">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Buy Now</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <img src={VINSW} alt="Swap Devices" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-[#444444] ">Swap Your Old Device for a New One</h2>
            <p className="text-lg text-[#333333] mt-4">Upgrade your gadgets easily by swapping your old device for a new one. Get the best trade-in deals today!</p>
            {/* <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">Start Swapping</button> */}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-200 py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:mr-8 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-[#444444]">Buy with Confidence</h2>
            <p className="text-lg text-[#333333] mt-4">We offer a wide range of high-quality gadgets at unbeatable prices. Shop securely and enjoy fast delivery.</p>
            {/* <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Shop Now</button> */}
          </div>
          <img src={VINOSE} alt="Buying Guide" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </div>
      
      <div className="bg-[#6a041d] text-white text-center py-16 px-6">
        <h2 className="text-4xl font-bold font-poppins">Stay Updated on New Releases</h2>
        <p className="text-xl mt-4 font-poppins">Subscribe to our newsletter and get the latest gadgets before anyone else.</p>
        <div className="mt-6 flex justify-center">
          <input type="email" placeholder="Enter your email" className="px-6 py-3 w-96 text-[#444444] rounded-l-lg focus:outline-none text-lg font-poppins" />
          <button className="px-6 py-3 bg-black rounded-r-lg hover:bg-gray-900 text-lg">Subscribe</button>
        </div>
      </div>
    </div>

    
     <div className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto mt-40">
      <h2 className="text-2xl font-semibold text-center text-[#6a041d] mb-6 font-poppins">
        Want to Sell Your Mobile Device?
      </h2>
      <p className="text-center text-gray-600 mb-8 font-poppins">
      We pay in cash! It’s so simple to sell or swarp old/used devices. We're here to help! Reach out to us using any of the contact methods below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4 font-poppins">Contact Us</h3>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Phone Number:</strong>{' '}
            <a href="tel:+234 7031513455" className="text-[#444444] hover:text-[#333333]">
              +234 7031513455
            </a>
          </p>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@example.com" className="text-[#333333] hover:text-[#6a041d]">
              support@example.com
            </a>
          </p>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Business Address:Shop 39,First Floor, Zebra Plaza, New GSM and Computer Village, Etegwe, Yenagoa, Bayelsa State, Nigeria.</strong>
          </p>
          <p className="text-gray-600 mb-4 font-poppins">
            <strong>Opening Hours:</strong> Mon - Sat: 8:00 AM - 6:00 PM
          </p>
        </div>

    
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4 font-poppins">Chat with Us on WhatsApp</h3>
          <p className="text-gray-600 font-poppins">
            Scan the QR code to quickly connect with our team on WhatsApp for any questions or inquiries.
          </p>
          <div className="flex justify-center mt-4">
            <img src={VGQR} alt="WhatsApp QR Code" className="w-64 h-64 object-contain" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products