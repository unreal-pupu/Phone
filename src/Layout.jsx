import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Footer from './Pages/Footer';
import { CiMenuFries } from "react-icons/ci";
import VG from './assets/VG .jpg'
import { FiX } from "react-icons/fi";


const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <div>
        <nav className='flex justify-between items-center p-4 bg-gray-100'>
          <div className='flex items-center space-x-6'>
             <img src={VG} alt="Tablet Repair"className="w-16 h-16 rounded-full object-contain" />
            <ul className="hidden md:flex space-x-6">
              <li><NavLink className=" text-[#6a041d] hover:text-[#f3c300] font-poppins" to="">Repairs and Services</NavLink></li>
              <li><NavLink className=" text-[#6a041d] hover:text-[#f3c300] font-poppins" to="products">Sell / Swap your Device</NavLink></li>
              <li><NavLink className=" text-[#6a041d] hover:text-[#f3c300] font-poppins" to="about">Contact Us</NavLink></li>
              <li><NavLink className=" text-[#6a041d] hover:text-[#f3c300] font-poppins" to="privacy">Privacy Policy</NavLink></li>
              <li><NavLink className=" text-[#6a041d] hover:text-[#f3c300] font-poppins" to="fac">FAQ</NavLink></li>
            </ul>
          </div>

          <div className="md:hidden">
            <button className="text-[#6a041d]" onClick={toggleMenu}>
              <CiMenuFries className="h-6 w-6 text-[#6a041d]" />
            </button>
          </div>
        </nav>

        <div
          className={`fixed inset-0 bg-gray-800 transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white">
              <FiX className="h-8 w-8 text-white"/>
            </button>

            <ul className="w-full text-center space-y-8">
              <li>
                <NavLink 
                  className="text-white text-2xl font-semibold hover:text-red-500 transition-colors duration-200 block py-3 font-roboto" 
                  to=""
                  onClick={toggleMenu}
                >
                  Repairs and Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-white text-2xl font-semibold hover:text-red-500 transition-colors duration-200 block py-3 font-roboto" 
                  to="products"
                  onClick={toggleMenu}
                >
                  Sell / Swap your Device
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-white text-2xl font-semibold hover:text-red-500 transition-colors duration-200 block py-3 font-roboto" 
                  to="about"
                  onClick={toggleMenu}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-white text-2xl font-semibold hover:text-red-500 transition-colors duration-200 block py-3 font-roboto" 
                  to="privacy"
                  onClick={toggleMenu}
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-white text-2xl font-semibold hover:text-red-500 transition-colors duration-200 block py-3 font-roboto" 
                  to="fac"
                  onClick={toggleMenu}
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <main>
          <Outlet />
        </main>
        
        <footer>
          <Footer />
        </footer>

        <ScrollToTop />
      </div>
    </>
  );
};

export default Layout;