import { useState, useEffect } from "react";
import VGQR from '../assets/VGQR.jpg'
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
import WFIX from '../assets/WFIX.jpg';
import PS from '../assets/PS.jpg';
import WBAND from '../assets/WBAND.jpg';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import SMARTPH from '../assets/SMARTPH.jpg'
import VINEAR from '../assets/VINEAR.jpg'
import JBL from '../assets/JBL.jpg'



const Products = () => {
   const images = [ FIFTENPRO, WFIX, WBAND, APPLEV, GALAXYW, SAMSUNGW,XBOX, GALA, VINEAR, PODS, PS, SMARTPH, VINSW, JBL];
    
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      image: FIFTENPRO,
      description: "Experience the power of the A17 chip with a 48MP camera and dynamic island design."
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      image: GALA,
      description: "A true flagship with a 200MP camera, S Pen, and Snapdragon 8 Gen 2 processor."
    },
    {
      id: 3,
      name: "Apple Vision Pro",
      image: APPLEV, 
      description: "A revolutionary spatial computing device with ultra-high-resolution displays."
    },
    {
      id: 4,
      name: "AirPods Pro (2nd Gen)",
      image: SELLAIRPOS,
      description: "Active Noise Cancellation, Adaptive Transparency, and personalized spatial audio."
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      image: GALAXYW, 
      description: "Advanced health tracking, fitness features, and a brilliant Always-On Retina display."
    },
    {
      id: 6,
      name: "Samsung Galaxy Watch 6",
      image: SAMSUNGW,
      description: "Premium smartwatch with a sleek design, health tracking, and Wear OS."
    },
    {
      id: 7,
      name: "PlayStation 5 Console",
      image: SELLPS, 
      description: "The ultimate gaming experience with ray tracing, fast SSD, and immersive 3D audio."
    },
    {
      id: 8,
      name: "Xbox Series X",
      image: XBOX, 
      description: "Powerful gaming console with 4K gaming, fast loading times, and Game Pass support."
    },
    {
      id: 9,
      name: "Fancy PlayStation Controllers",
      image: SELCNT,
      description: "Limited edition PS5 and PS4 controllers with custom designs, enhanced grip, adaptive triggers, and RGB lighting for an immersive gaming experience."
    },
    {
      id: 10,
      name: "Bluetooth Speaker JBL Charge 5",
      image: SJBL, 
      description: "Portable speaker with powerful sound, waterproof design, and long battery life."
    },
    {
      id: 11,
      name: "CD Plates - Best Albums Collection",
      image: FCPS,
      description: "A collection of top music albums on CD for music lovers."
    },
    {
      id: 12,
      name: "Fast Charging Adapters & Cables",
      image: MCH,
      description: "High-speed chargers for iPhones, Samsung, and other devices, supporting fast charging and durability."
    },
    {
      id: 13,
      name: "Phone Pouches & Cases ",
      image: VINOCA,
      description: "Stylish and durable pouches designed for maximum protection, available in leather, silicone, and shockproof materials for all major phone brands."
    },
    {
      id: 14,
      name: "PS5 DualSense Controller",
      image: SELLCONTROLL,
      description: "Haptic feedback, adaptive triggers, and a built-in microphone for next-gen gaming."
    },
    {
      id: 15,
      name: "Onyx Studio 7 Bluetooth Speaker",
      image: VINOST,
      description: "A premium wireless speaker with dual tweeters, deep bass, and an 8-hour battery life for an immersive audio experience."
    },
    {
      id: 16,
      name: "Tempered Glass Screen Protectors ",
      image: GLASS,
      description: "Scratch-resistant, anti-fingerprint, and shatterproof protectors designed for various phone models, ensuring long-lasting screen clarity."
    }
  ];

  return (
    <>
   <div className="pt-20">
   <div className="relative w-full h-screen flex items-center justify-center bg-cover bg-center">
    <img src={images[currentIndex]} alt="carousel" className="w-full h-full object-cover transition-opacity duration-500"/>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 ">
    <div className="bg-black bg-opacity-50 p-10 rounded-lg max-w-2xl">
    <h1 className="text-5xl font-bold mb-4 font-poppins text-[#fffcdc]">Latest iPhones, Samsung & Gadgets</h1>
    <p className="text-xl font-poppins text-[#fffcdc] "> Discover cutting-edge technology and premium devices at the best prices. </p>
  </div>
    </div>

    <button
      onClick={prevImage}
      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-300"
    >
      <MdChevronLeft size={24} className="sm:size-30" />
    </button>
    <button
      onClick={nextImage}
      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-300"
    >
      <MdChevronRight size={24} className="sm:size-30" />
    </button>
  </div>
   </div>

     <div className="w-full min-h-screen bg-gray-100 font-poppins pt-20">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-[#14281d] mb-8 text-center font-poppins">Our Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 shadow-lg rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold font-poppins text-[#14281d]">{product.name}</h3>
              <p className="text-[#444444] text-md mt-2 font-poppins">{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <img src={VINSW} alt="Swap Devices" className="w-full md:w-1/2 rounded-lg shadow-lg" />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-[#14281d] ">Swap Your Old Device for a New One</h2>
            <p className="text-lg text-[#333333] mt-4">Upgrade your gadgets easily by swapping your old device for a new one. Get the best trade-in deals today!</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-200 py-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:mr-8 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-[#14281d]">Buy with Confidence</h2>
            <p className="text-lg text-[#333333] mt-4">We offer a wide range of high-quality gadgets at unbeatable prices. Shop securely and enjoy fast delivery.</p>
          </div>
          <img src={VINOSE} alt="Buying Guide" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        </div>
      </div>
      
      <div className="bg-[#000000] text-white text-center py-16 px-6">
        <h2 className="text-4xl font-bold font-poppins text-[#fffcdc]">Stay Updated on New Releases</h2>
        <p className="text-xl mt-4 font-poppins text-[#fffcdc]">Subscribe to our newsletter and get the latest gadgets before anyone else.</p>
        <div className="mt-6 flex justify-center">
          <input type="email" placeholder="Enter your email" className="px-6 py-3 w-96 text-[#444444] rounded-l-lg focus:outline-none text-lg font-poppins" />
          <button className="px-6 py-3 bg-[#14281d] rounded-r-lg hover:bg-gray-900 text-lg">Subscribe</button>
        </div>
      </div>
    </div>

    
     <div className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto mt-40">
      <h2 className="text-2xl font-semibold text-center text-[#14281d] mb-6 font-poppins">
        Want to Sell Your Mobile Device?
      </h2>
      <p className="text-center text-gray-600 mb-8 font-poppins">
      We pay in cash! It’s so simple to sell or swarp old/used devices. We're here to help! Reach out to us using any of the contact methods below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-[#14281d] mb-4 font-poppins">Contact Us</h3>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Phone Number:</strong>{' '}
            <a href="tel:+234 7031513455" className="text-[#444444] hover:text-[#333333]">
              +234 7031513455
            </a>
          </p>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@example.com" className="text-[#333333] hover:text-[#6a041d]">
              support@vinosgadget.com
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
          <h3 className="text-lg font-medium text-[#14281d] mb-4 font-poppins">Chat with Us on WhatsApp</h3>
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