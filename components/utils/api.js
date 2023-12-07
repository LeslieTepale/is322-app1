const API_KEY = process.env.PLANT_API_KEY;
const BASE_URL = 'https://plant.id/api/v3';
const IDENTIFICATION_ENDPOINT = '/identification';

const identifyPlants = async (image) => {
  try {
    const response = await fetch(BASE_URL + IDENTIFICATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        images: [image], // Assuming image is a base64-encoded string
      }),
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
