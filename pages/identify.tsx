// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import StaticCard from '../components/StaticCard';
import { CameraIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const Identify: React.FC = () => {
  return (
    <div className="font-poppins">
      <div><Navbar /></div>
      <div>
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-8 md:p-20">
          <div className="max-w-full md:max-w-2xl mx-auto flex flex-col items-center">
            <h1 className="text-greenTheme text-4xl font-bold mb-4 text-center mt-8 md:mt-0">
              Identify a Plant
            </h1>
            <div className="flex flex-col md:flex-row items-center">
              <button className="bg-greenTheme text-white py-4 px-14 m-4 rounded-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-110 active:scale-95">
                <CameraIcon className="h-10 w-10 mb-2" />
                <span>Camera</span>
              </button>
              <button className="bg-greenTheme text-white py-4 px-14 m-4 rounded-lg flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-110 active:scale-95">
                <ArrowUpTrayIcon className="h-10 w-10 mb-2" />
                <span>Upload</span>
              </button>
            </div>
          </div>
          <div className="container mx-auto p-8">
          <h1 className="text-greenTheme text-4xl font-bold mb-4 text-center">
            Possible Plants
          </h1>
          <StaticCard
            title="Sample Title"
            imageSrc="https://via.placeholder.com/150" // Replace with your image URL
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Identify;