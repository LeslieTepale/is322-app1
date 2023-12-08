// utils/api.js
const API_KEY = process.env.NEXT_PUBLIC_PLANT_API_KEY;
const BASE_URL = 'https://plant.id/api/v3';
const IDENTIFICATION_ENDPOINT = '/identification';

const identifyPlants = async (images) => {
  try {
    const formData = new FormData();
    formData.append('images', images);

    console.log('Request Payload:', {
      images: images, // Assuming image is a valid base64-encoded string
    });

    const response = await fetch(BASE_URL + IDENTIFICATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Api-Key': API_KEY,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      console.log('API Response:', data);
      return data;
    } else {
      console.error('Non-JSON response:', await response.text());
      return null;
    }
  } catch (error) {
    console.error('Error identifying plants:', error);
    throw error;
  }
};

export default identifyPlants;
