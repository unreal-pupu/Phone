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
        <nav className='flex justify-between items-center p-4 bg-[#000000]'>
          <div className='flex items-center space-x-6'>
             <img src={VG} alt="Tablet Repair"className="w-16 h-16 rounded-full object-contain" />
            <ul className="hidden md:flex space-x-6">
              <li><NavLink className=" text-[#fffcdc] hover:text-[#f3c300] font-poppins" to="">Sell/Swap your Device</NavLink></li>
              <li><NavLink className=" text-[#fffcdc] hover:text-[#f3c300] font-poppins" to="products">Services and repairs </NavLink></li>
              <li><NavLink className=" text-[#fffcdc] hover:text-[#f3c300] font-poppins" to="contact">Contact Us</NavLink></li>
              <li><NavLink className=" text-[#fffcdc] hover:text-[#f3c300] font-poppins" to="privacy">Privacy Policy</NavLink></li>
              <li><NavLink className=" text-[#fffcdc] hover:text-[#f3c300] font-poppins" to="FAQ">FAQ</NavLink></li>
            </ul>
          </div>

          <div className="md:hidden">
            <button className="text-[#fffcdc]" onClick={toggleMenu}>
              <CiMenuFries className="h-6 w-6 text-[#fffcdc]" />
            </button>
          </div>
        </nav>

        <div
          className={`fixed inset-0 bg-[#14281d] transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-[#fffcdc]">
              <FiX className="h-8 w-8 text-[#fffcdc]"/>
            </button>

            <ul className="w-full text-center space-y-8">
              <li>
                <NavLink 
                  className="text-[#fffcdc] text-2xl font-semibold hover:text-[#780116] transition-colors duration-200 block py-3 font-roboto" 
                  to=""
                  onClick={toggleMenu}
                >
                  Services and repairs
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#fffcdc] text-2xl font-semibold hover:text-[#780116] transition-colors duration-200 block py-3 font-roboto" 
                  to="products"
                  onClick={toggleMenu}
                >
                  Sell / Swap your Device
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#fffcdc] text-2xl font-semibold hover:text-[#780116] transition-colors duration-200 block py-3 font-roboto" 
                  to="about"
                  onClick={toggleMenu}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#fffcdc] text-2xl font-semibold hover:text-[#780116] transition-colors duration-200 block py-3 font-roboto" 
                  to="privacy"
                  onClick={toggleMenu}
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink 
                  className="text-[#fffcdc] text-2xl font-semibold hover:text-[#780116] transition-colors duration-200 block py-3 font-roboto" 
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