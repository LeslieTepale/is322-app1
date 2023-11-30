// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Search: React.FC = () => {
  return (
    <div className="font-poppins">
      <div><Navbar /></div>
      <section className="heros min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center p-20">
        <div className="container flex-left md:pr-8 max-w-1/2 pl=20">
          <h1 className="text=greenTheme text-4xl font-bold mb-4">Search for a Plant</h1>
        </div>
      </div>
    </section>
    </div>

  );
};

export default Search;