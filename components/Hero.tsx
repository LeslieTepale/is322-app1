// components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="heros min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center p-20">
        <div className="container flex-left md:pr-8 max-w-1/2 pl=20">
          <h1 className="text=greenTheme text-4xl font-bold mb-4">Welcome to PlantPal!</h1>
          <p className="text-lg mb-4">Discover the Magic of Your Garden: PlantPal - Your Personal Botanical Companion. 
          From plant identification to nurturing care, embark on a green journey with confidence. Snap, Grow, Thrive!</p>
          <button className="bg-greenTheme text-white py-2 px-4 rounded-full">Get Started</button>
        </div>
        <div className="container flex-right max-w-1/2 md:max-w-1/2 mb-4 md:mb-0 mx-auto">
          <img
            src="/heroImage.png"
            alt="Hero Image"
            className="w-full h-auto max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
