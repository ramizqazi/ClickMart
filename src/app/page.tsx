"use client";
import { useState } from 'react';
import HomeHeader from '@/components/Home/HomeHeader';
import HomeDeals from '@/components/Home/HomeDeals/HomeDeals';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className='w-full h-full bg-white'>
      <HomeHeader category={selectedCategory} setCategory={setSelectedCategory} />
      <HomeDeals />
    </div>
  );
};

export default Home;
