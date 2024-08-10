// src/components/AboutMeCard.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const AboutMeCard = () => {
  return (
    <div className="relative border p-4 shadow w-auto" style={{ backgroundColor: '#FFFACD', borderRadius: '1rem' }}> {/* Increased border-radius */}
      {/* Badge */}
      <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full border border-gray-300">
        About Me
      </div>
      {/* Profile Section */}
      <div className="flex items-center mb-4 mt-3">
        <img
          src="https://via.placeholder.com/60"
          alt="Author"
          className="w-16 h-16 rounded-full"
        />
        <div className="ml-4 flex flex-col justify-center">
          <h4 className="font-bold text-lg">John Doe</h4>
          <p className="text-sm text-gray-600">Web Developer</p>
          <div className="flex space-x-2 mt-2">
            {/* Social Media Icons */}
            <a href="#" className="text-blue-600 text-sm">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400 text-sm">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-500 text-sm">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      {/* About Section */}
      <p className="text-sm">I'm a passionate web developer with a love for creating dynamic and user-friendly websites.</p>
    </div>
  );
};

export default AboutMeCard;
