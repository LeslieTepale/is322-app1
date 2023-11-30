// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Home: React.FC = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;