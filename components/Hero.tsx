// components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="heros min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center p-8 md:p-20">
        <div className="max-w-full md:max-w-2xl mx-auto flex flex-col items-center">
          <h1 className="text-greenTheme text-4xl font-bold mb-4 text-left">
            Welcome to PlantPal!
          </h1>
          <p className="text-lg mb-4 text-left">
            Discover the Magic of Your Garden: PlantPal - Your Personal Botanical Companion.
            From plant identification to nurturing care, embark on a green journey with confidence. Snap, Grow, Thrive!
          </p>
          <button className="bg-greenTheme text-white py-2 px-4 rounded-full">
            Get Started
          </button>
        </div>
        <div className="max-w-full md:max-w-2xl mx-auto mb-4 md:mb-0">
          <img
            src="/heroImage.png"
            alt="Hero Image"
            className="w-full h-auto max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
