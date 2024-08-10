// src/components/Layout.jsx

import React, { useState } from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const Layout = ({ posts = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8" style={{ maxWidth: '1100px' }}>
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <LeftColumn posts={currentPosts} currentPage={currentPage} paginate={paginate} />

        {/* Right Sidebar */}
        <div className="hidden 980:block md:w-1/4 md:ml-4">
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default Layout;
