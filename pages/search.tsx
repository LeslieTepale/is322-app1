// Search.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Plant from '../components/utils/plant';
import identifyPlants from '../components/utils/api'; // Update the function for plant identification

const Search = () => {
  const [searchResults, setSearchResults] = useState<Plant[]>([]);

  const handleSearch = async (images: FileList) => {
    try {
      const data = await identifyPlants(images);
      console.log('API data:', data);
      setSearchResults(data.results || []);
    } catch (error) {
      console.error('Error identifying plants: ', error);
    }
  };

  return (
    <div className="font-poppins">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto p-8">
          <h1 className="text-greenTheme text-4xl font-bold mb-4 text-center">
            Identify Plants from Images
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="container mx-auto p-8">
          <h1 className="text-greenTheme text-4xl font-bold mb-4 text-center">
            Identification Results
          </h1>
          {searchResults.map((plant) => (
            <Card
              name_authority={plant.name_authority}
              common_names={plant.common_names}
              image={plant.image}
              description={plant.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
