// components/Hero.tsx
import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section
      className="heros min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url("/heroImage3.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay with semi-transparent white background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center p-8 md:p-20 relative z-10">
        <div className="max-w-full md:max-w-2xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold mb-4 text-left">
            Welcome to PlantPal!
          </h1>
          <p className="text-lg mb-4 text-left text-white">
            Discover the Magic of Your Garden: PlantPal - Your Personal Botanical Companion.
            From plant identification to nurturing care, embark on a green journey with confidence. Snap, Grow, Thrive!
          </p>
          {/* Use Link component for navigation */}
          <Link href="/search">
            <button className="bg-white text-black py-2 px-4 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
        <div className="max-w-full md:max-w-2xl mx-auto mb-4 md:mb-0">
          {/* You can remove the <img> tag */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
