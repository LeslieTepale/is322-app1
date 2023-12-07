// components/PlantSearch.js

import axios from 'axios';

const searchPlant = async (plantName) => {
  try {
    // Make a request to the Plant.id API with the provided plant name
    // You need to replace 'your-api-key-here' with your actual Plant.id API key
    const apiKey = 'your-api-key-here';
    const response = await axios.get(
      `https://api.plant.id/v2/search?q=${plantName}&key=${apiKey}`
    );

    // Extract relevant information from the API response
    const { data } = response;
    const plant = {
      title: data.suggestions[0].plant.name,
      image: data.suggestions[0].plant.image_url,
      careInfo: 'Your plant care information goes here.', // You need to replace this with actual care information
    };

    return plant;
  } catch (error) {
    throw new Error('Plant not found. Please try again.');
  }
};

export default searchPlant;
