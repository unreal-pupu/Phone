import React, { useState, useEffect } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  return (
    isVisible && (
        <button
          onClick={scrollToTop} className="fixed bottom-8 right-8 inline-flex items-center justify-center bg-orange-600  rounded-lg transition-all duration-200 ease-out max-w-[60px]"
        >
          <IoArrowUpSharp  className="text-[aliceblue] text-5xl transition-all duration-200 ease-out hover:bg-[#104147] hover:translate-y-[-4px]"/>
        </button>
      )
  );
};

export default ScrollToTop