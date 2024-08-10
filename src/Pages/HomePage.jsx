// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';
import postsData from '../data/postsData';

const HomePage = () => {
  const [posts, setPosts] = useState(postsData);

  // Uncomment this if you want to fetch posts from an API
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get('https://api.example.com/posts');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  return <Layout posts={posts} />;
};

export default HomePage;
