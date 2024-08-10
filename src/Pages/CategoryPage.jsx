// src/pages/CategoryPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/categories';
import Layout from './Layout';
import Tag from '../components/Tag';

const CategoryPage = () => {
  const { slug } = useParams();

  // Find the category based on the slug
  const category = categories.find(cat => cat.name.toLowerCase() === slug.toLowerCase());

  console.log(category.postCardColor)
  if (!category) {
    return <div>404 Page not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto"> {/* Ensure the card doesn't exceed 990px */}
        {/* Category Card */}
        <div
          className={`p-6 mb-8 flex flex-col md:flex-row rounded-lg shadow-md border ${category.postCardColor}`} >
          <div className="md:w-1/2 flex flex-col justify-center items-center pr-4 space-y-4">
            <h1 className="text-2xl font-normal mb-2">Category:</h1>
            <Tag category={category.name} color={category.tagColor} />
            <p className="text-gray-600 mt-2">Total Articles: {category.posts.length}</p>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center pl-1 md:pl-1 mt-4 md:mt-0">
            <p className="text-gray-700">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Layout */}
      <Layout posts={category.posts} />
    </div>
  );
};

export default CategoryPage;
