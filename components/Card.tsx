// Card.tsx
import React from 'react';

interface CardProps {
  name_authority: string;
  common_names: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name_authority, common_names, image, description }) => {
  return (
    <div className = "pb-8">
    <div className="bg-white rounded-lg shadow-md p-4 md:flex max-w-screen-md mx-auto">
      <div className="flex-shrink-0 md:w-1/2">
        <img src={image} alt="Plant" className="object-cover w-full md:h-48 lg:h-56 xl:h-64" />
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 w-full">
        <h2 className="text-xl font-bold">{name_authority}</h2>
        <p className="mt-2">{description}</p>
        <p className="text-gray-500 mt-2">Name Authority: {name_authority}</p>
      </div>
    </div>
    </div>
  );
};

export default Card;
