"use client"
import Preloadingtext from '@/Components/Preloadingtext';
import React, { useEffect, useState } from 'react';
import Navbar from './Sections/navbar/Navbar';
import Hero from './Sections/hero';

const Page = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div className=' bg-black text-zinc-300'>
      {loading ? (
        <Preloadingtext/>
        
      ) : (
        
        <div className=''>
          <Navbar/>
          <Hero/>
        </div>
      )}
    </div>
  );
}

export default Page;
