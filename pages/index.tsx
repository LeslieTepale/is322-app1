// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div className="font-poppins">
      <div><Navbar /></div>
      <div><Hero /></div>
    </div>

  );
};

export default Home;