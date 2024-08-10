// src/components/RecentPostsCard.jsx

import React from 'react';

const RecentPostsCard = () => {
  return (
    <div className="relative border p-4 shadow w-auto" style={{ backgroundColor: '#FFFACD', borderRadius: '1rem' }}> {/* Background color matches About Me card and rounded corners */}
      {/* Badge */}
      <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full border border-gray-300">
        Recent Posts
      </div>
      {/* Recent Posts Section */}
      <ul className="space-y-4 mt-4"> 
        {/* Post Item */}
        <li className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Post Thumbnail"
            className="w-12 h-12 rounded"
          />
          <div className="ml-4">
            <h5 className="font-bold text-sm">Post Title 1</h5>
            <p className="text-xs text-gray-500">August 8, 2024</p>
          </div>
        </li>
        {/* Repeat the above block for more posts */}
        <li className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Post Thumbnail"
            className="w-12 h-12 rounded"
          />
          <div className="ml-4">
            <h5 className="font-bold text-sm">Post Title 2</h5>
            <p className="text-xs text-gray-500">August 9, 2024</p>
          </div>
        </li>
        <li className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Post Thumbnail"
            className="w-12 h-12 rounded"
          />
          <div className="ml-4">
            <h5 className="font-bold text-sm">Post Title 3</h5>
            <p className="text-xs text-gray-500">August 10, 2024</p>
          </div>
        </li>
        <li className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Post Thumbnail"
            className="w-12 h-12 rounded"
          />
          <div className="ml-4">
            <h5 className="font-bold text-sm">Post Title 4</h5>
            <p className="text-xs text-gray-500">August 11, 2024</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecentPostsCard;
