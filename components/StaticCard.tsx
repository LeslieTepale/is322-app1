import React from 'react';

const StaticCard = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:flex max-w-screen-md mx-auto">
      <div className="flex-shrink-0 md:w-1/2">
        <img src={imageSrc} alt="Card Image" className="object-cover w-full md:h-48 lg:h-56 xl:h-64" />
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 w-full">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default StaticCard;
