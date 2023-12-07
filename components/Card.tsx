// Card.tsx
import React from 'react';
import Plant from './utils/plant'; // Adjust the path accordingly

const Card: React.FC<Plant> = ({ name_authority, common_names, image, description }) => {
  console.log('Card props:', {name_authority, common_names, image, description});
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:flex max-w-screen-md mx-auto">
      <div className="flex-shrink-0 md:w-1/2">
        <img src={image} alt="Card Image" className="object-cover w-full md:h-48 lg:h-56 xl:h-64" />
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 w-full">
        <h2 className="text-xl font-bold">{common_names}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
