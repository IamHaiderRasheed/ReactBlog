// src/components/RightSidebar.jsx

import React from 'react';
import AboutMeCard from '../components/AboutMeCard';
import RecentPostsCard from '../components/RecentPostsCard';
import FollowMeCard from '../components/FollowMeCard';
import TagsCard from '../components/TagsCard';


const RightColumn = () => {
  return (
    <div className="hidden md:block sticky top-0 space-y-14">
      <AboutMeCard/>
      <RecentPostsCard/>
      <FollowMeCard/>
      <TagsCard/>
    </div>
  );
};

export default RightColumn;
