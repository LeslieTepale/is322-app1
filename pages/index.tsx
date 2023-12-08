// pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StaticCard from '../components/StaticCard';

const Home: React.FC = () => {
  return (
    <div className="font-poppins">
      <div><Navbar /></div>
      <div className="mb-8"><Hero /></div>
      
      <div><StaticCard
      title="plant of the month: poinsettia"
      imageSrc="/poinsettia.jpg" // Replace with your image URL
      description="The poinsettia is a commercially important flowering plant 
      species of the diverse spurge family Euphorbiaceae. Indigenous to Mexico and Central America,
       the poinsettia was first described by Europeans in 1834. It is particularly well known for 
       its red and green foliage and is widely used in Christmas floral displays."
      />
      </div>
    </div>
  );
};

export default Home;
