import React, { useState } from 'react';
import { ShoppingCart, User as UserIcon } from 'lucide-react';
import { useCart } from './CartContext.jsx';

const NavBar = ({ isCartOpen, setIsCartOpen }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems?.length || 0;

  const handleCartToggle = () => {
    setIsCartOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-indigo-500 sticky top-0 z-50 shadow-md">
      {/* Announcement Bar */}
      <div className="bg-indigo-500 p-2">
        <h3 className="text-white font-bold font-mono text-center text-sm md:text-base">
          <marquee behavior="scroll" direction="right">
            New In: Shop Spring Summer 2025
          </marquee>
        </h3>
      </div>

      {/* Top Nav */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-white text-lg font-bold font-mono">REVAMP</div>

        <div className="flex items-center space-x-4 relative">
          {/* Cart Icon */}
          <div className="relative cursor-pointer" onClick={handleCartToggle}>
            <ShoppingCart size={28} className="text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center font-bold rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* User Icon */}
          <UserIcon size={28} className="cursor-pointer text-white" />

          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl md:hidden focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col bg-white px-4 py-2 space-y-2 md:hidden">
          <span className="text-xl font-bold">Menu</span>
          {[
            'New In',
            'Matching Sets',
            'Tops',
            'Bottoms',
            'Jeans',
            'Jumpsuits',
            'Jackets',
            'Activewears',
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="uppercase block text-sm font-roboto"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;