// src/components/PostCard.jsx

import React from 'react';
import { postsColors } from '../constants/colors';
import { truncateText } from '../utils/truncateText';
import Tag from './Tag';

const PostCard = ({ post }) => {
  const { category, date, title, description, imageUrl } = post;
  const postColor = postsColors[category] || 'bg-gray-100'; // Default color if category not found

  // Limit the description to 200 characters
  const truncatedDescription = truncateText(description, 200);

  return (
    <div className={`p-4 border rounded-xl  shadow-lg ${postColor}`}>
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Image */}
        <div className="lg:w-1/3 lg:pr-4">
          <img
            src={imageUrl || "https://via.placeholder.com/300x200"}
            alt="Post Thumbnail"
            className="w-full h-auto rounded"
          />
        </div>

        {/* Post Content */}
        <div className="lg:w-2/3 lg:pl-4 mt-4 lg:mt-0">
          <div className="flex items-center mb-2 space-x-4">

            <Tag key={category} category={category} color={postColor} />

            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{truncatedDescription}</p>
          <a href="#" className="inline-block text-black border border-gray-400 bg-white rounded-full py-2 px-4 hover:bg-gray-100">
            Continue Reading &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
