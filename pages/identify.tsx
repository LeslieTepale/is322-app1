// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { CameraIcon } from '@heroicons/react/24/outline';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Identify: React.FC = () => {
  return (
    <div className="font-poppins">
      <div><Navbar /></div>
      <section className="heros min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center p-8 md:p-20 h-screen">
          <div className="max-w-full md:max-w-1/2 md:pr-8 pl-20 flex flex-col items-center"> 
            <h1 className="text-greenTheme text-4xl font-bold mb-4">Identify a Plant</h1>
            <div className="flex flex-col md:flex-row items-center"> {/* Adjusted to flex-col on smaller screens and flex-row on medium-sized screens and above */}
              <button className="bg-greenTheme text-white p-8 m-4 rounded-lg">
                <CameraIcon className="h-20 w-20" />
                Camera
              </button>
              <button className="bg-greenTheme text-white p-8 m-4 rounded-lg">
                <ArrowUpTrayIcon className="h-20 w-20" />
                Upload
              </button>
              <button className="bg-greenTheme text-white p-8 m-4 rounded-lg">
                <MagnifyingGlassIcon className="h-20 w-20" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Identify;
