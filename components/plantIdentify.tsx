// components/PlantIdentificationResult.js

import React from 'react';

const plantIdentify = ({ result }) => {
  if (!result) {
    return (
        <div>
            <h2> Sorry, that didn't work.</h2>
            <p> Please Try Again</p>
        </div>
    )
  }

  // Display the identification result and plant care information
  return (
    <div>
      <h2>Plant Identification Result</h2>
      <p>Common Name: {result.common_name}</p>
      <p>Scientific Name: {result.scientific_name}</p>
      <p>Care Information: {result.care_info}</p>
    </div>
  );
};

export default plantIdentify;
