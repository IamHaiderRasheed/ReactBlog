// src/components/Pagination.jsx

import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div className="mt-4 flex justify-center items-center space-x-2">
      {currentPage > 1 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          className="px-4 py-2 bg-[#FF4C60] text-white rounded border border-black"
        >
          Previous
        </button>
      )}
      <span className="px-4 py-2 text-white bg-gray-600 rounded">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <button
          onClick={() => paginate(currentPage + 1)}
          className="px-4 py-2 bg-[#FF4C60] text-white rounded border border-black"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
