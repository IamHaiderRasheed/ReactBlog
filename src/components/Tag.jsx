// src/components/Tag.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Tag = ({ category, color }) => {
  const link = `/category/${category.toLowerCase()}`; // Generate link based on category

  return (
    <Link to={link} className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-100">
      <svg className="w-3 h-3" viewBox="0 0 24 24">
        <polygon points="12,2 2,7 2,17 12,22 22,17 22,7" style={{ fill: color }} />
      </svg>
      <span className="text-gray-700 text-sm">{category}</span>
    </Link>
  );
};

export default Tag;
