// src/components/FollowMeCard.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FollowMeCard = () => {
  return (
    <div className="relative border p-4 shadow w-auto" style={{ backgroundColor: '#FFFACD', borderRadius: '1rem' }}> {/* Matching background color and border radius */}
      {/* Badge */}
      <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full border border-gray-300">
        Follow Me
      </div>
      {/* Follow Me Section */}
      <div className="flex flex-col space-y-4 mt-6"> {/* Reduced margin-top */}
        {/* Social Media Icons */}
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-white p-2 rounded-full">
            <FaFacebookF className="text-blue-600" />
          </div>
          <span className="text-gray-700">Facebook</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-white p-2 rounded-full">
            <FaTwitter className="text-blue-400" />
          </div>
          <span className="text-gray-700">Twitter</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-white p-2 rounded-full">
            <FaInstagram className="text-pink-500" />
          </div>
          <span className="text-gray-700">Instagram</span>
        </a>
        <a href="#" className="flex items-center space-x-2">
          <div className="flex items-center justify-center bg-white p-2 rounded-full">
            <FaLinkedin className="text-blue-700" />
          </div>
          <span className="text-gray-700">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default FollowMeCard;
