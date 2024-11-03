import React, { useState, useEffect } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { FiHeart, FiUser } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isWomenDropdownOpen, setIsWomenDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleWomenDropdown = () => {
    setIsWomenDropdownOpen(!isWomenDropdownOpen);
  };

  const closeWomenDropdown = () => {
    setIsWomenDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dynamic navbar styles
  const navbarStyle = {
    backgroundColor: isScrolled || isHovered ? 'white' : 'transparent',
    transition: 'all 0.3s ease-in-out',
  };

  // Dynamic text styles
  const textStyle = (isScrolled || isHovered) ? 'text-gray-800' : 'text-white';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 px-[3vw] w-full h-[100px] z-[100] transition-all duration-300`}
      style={navbarStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center w-full h-full z-[100]">
        {/* Logo */}
        <div className={`text-[26px] font-semibold opacity-95 ${textStyle} z-10 transition-colors duration-300`}>
          YOUR LOGO
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className={`text-2xl ${textStyle}`}>
            {isMobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Navbar Links */}
        <ul className={`flex flex-row gap-10 items-center z-[100] ${
          isMobileMenuOpen ? "block" : "hidden"
        } md:flex`}>
          <li className={`hover:text-[#C96868] cursor-pointer text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}>
            HOME
          </li>

          {/* Women's Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={toggleWomenDropdown}
            onMouseLeave={closeWomenDropdown}
          >
            <div className={`flex flex-row items-center hover:text-[#C96868] text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}>
              <span>BRAND</span>
              <FaAngleDown />
            </div>
            {/* Dropdown remains the same */}
            {isWomenDropdownOpen && (
              <div className="absolute left-0 mt-2 border-t-[#C96868] border-t-2 w-[45vw] p-[50px] rounded-xl bg-white shadow-xl grid grid-cols-4 md:grid-cols-4 gap-4">
                {/* Your existing dropdown content */}
                {/* ... (keep the existing dropdown content) ... */}
              </div>
            )}
          </li>

          <li className={`hover:text-[#C96868] cursor-pointer text-lg font-semibold opacity-95 transition-colors duration-300`}>
            <div className={`flex flex-row items-center hover:text-[#C96868] ${textStyle}`}>
              <span>SHOP</span>
              <FaAngleDown />
            </div>
          </li>

          <li className={`hover:text-[#C96868] cursor-pointer text-lg font-semibold opacity-95 transition-colors duration-300`}>
            <div className={`flex flex-row items-center hover:text-[#C96868] ${textStyle}`}>
              <span>COLLECTION</span>
              <FaAngleDown />
            </div>
          </li>

          <li className={`hover:text-[#C96868] cursor-pointer transition-colors duration-300`}>
            <div className={`flex flex-row items-center hover:text-[#C96868] text-lg font-semibold opacity-95 ${textStyle}`}>
              <span>CONTACT US</span>
              <FaAngleDown />
            </div>
          </li>

          <li className={`hover:text-[#C96868] cursor-pointer text-lg font-semibold opacity-95 ${textStyle} transition-colors duration-300`}>
            ABOUT US
          </li>
        </ul>

        {/* Search & Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}>
            <FiUser size={28} />
          </button>
          <button className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}>
            <FiHeart size={28} />
          </button>
          <button className={`p-2 font-semibold opacity-95 z-10 ${textStyle} transition-colors duration-300`}>
            <CgShoppingCart size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="block md:hidden space-y-4 mt-4 text-center bg-white">
          <li className="hover:text-[#C96868] cursor-pointer">Home</li>
          <li className="hover:text-[#C96868] cursor-pointer">Women's</li>
          <li className="hover:text-[#C96868] cursor-pointer">Men's</li>
          <li className="hover:text-[#C96868] cursor-pointer">Kids</li>
          <li className="hover:text-[#C96868] cursor-pointer">Accessories</li>
          <li className="hover:text-[#C96868] cursor-pointer">Offers</li>
          <li className="hover:text-[#C96868] cursor-pointer">About Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;