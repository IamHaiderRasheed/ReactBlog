// src/components/LeftColumn.jsx

import React from 'react';
import PostCard from '../components/PostCard';

const LeftColumn = ({ posts, currentPage, paginate }) => {
  return (
    <div className="flex-grow w-full md:w-3/4 pr-4">
      <div className="space-y-14">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(posts.length / 5) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftColumn;
