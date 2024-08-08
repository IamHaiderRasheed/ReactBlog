import React, { useState } from 'react';
import { HiSearch, HiMenu, HiX } from 'react-icons/hi'; // Import necessary icons

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center my-4 pt-6">
        <nav className="bg-white rounded-full shadow-md border border-black" style={{ width: '978px', height: '55px' }}>
          <div className="flex justify-between items-center h-full px-8">
            {/* Left: Hamburger Menu (Visible on mobile) */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsSidebarOpen(true)} 
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <HiMenu className="h-6 w-6" />
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex items-center justify-center flex-grow lg:flex-grow-0">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-gray-800">Brand</a>
              </div>
            </div>

            {/* Right: Menu Items & Search Icon */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Header Styles</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Post Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">#Tag</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <HiSearch className="h-6 w-6" />
              </button>
            </div>

            {/* Right: Search Icon (Visible on mobile) */}
            <div className="lg:hidden flex items-center">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <HiSearch className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar Menu */}
      {isSidebarOpen && (
        <div className="fixed inset-0 flex z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsSidebarOpen(false)}></div>
          <div className="relative bg-white w-64 h-full shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="text-xl font-bold">Menu</div>
              <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Header Styles</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Post Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">#Tag</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
