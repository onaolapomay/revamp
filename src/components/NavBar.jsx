import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-indigo-500 sticky top-0 z-50 shadow-md">
      {/* Top Marquee Notice */}
      <div className="bg-indigo-500 p-2">
        <h3 className="text-white font-bold font-mono text-center text-sm md:text-base">
          <marquee behavior="scroll" direction="right">
            New In: Shop Spring Summer 2025
          </marquee>
        </h3>
      </div>

      {/* Nav main content */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-white text-lg font-bold font-mono">REVAMP</div>

        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
              1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 
              1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 
              5.513 7.5h12.974c.576 0 1.059.435 1.119 
              1.007ZM8.625 10.5a.375.375 0 1 1-.75 
              0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 
              0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>

          {/* User Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 
              3.75 0 0 1 7.5 0ZM4.501 
              20.118a7.5 7.5 0 0 1 14.998 
              0A17.933 17.933 0 0 1 12 
              21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

          {/* Search Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 
              7.5 0 1 0 5.196 5.196a7.5 
              7.5 0 0 0 10.607 10.607Z" />
          </svg>

          {/* Mobile Menu Toggle */}
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
        {/* Mobile Menu (hidden by default) */}
        <div id='mobile-menu' className='hidden flex flex-col bg-white px-4 py-2 space-y-2'>
            <span className='text-xl font-bold'>menu</span>
            <a href="#" className='uppercase block text-sm font-roboto'>New In</a>
            <a href="#" className='uppercase block text-sm font-roboto'>Matching Sets</a>
            <a href="#" className='uppercase block text-sm font-roboto'>Tops</a>
            <a href="#" className='uppercase block text-sm font-roboto'>Bottoms</a>
            <a href="#" className='uppercase block text-sm font-roboto'>Jeans</a>
            <a href="#" className='uppercase block text-sm font-roboto'>Jumpsuits</a>
            <a href="#" className='uppercase block text-sm font-roboto'>Jackets</a>
            <a href="#" className='uppercase block text-sm font-roboto'>Activewears</a>
        </div>
    </nav>
  );
};

export default NavBar