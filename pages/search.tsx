// Search.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import identifyPlants from '../components/utils/api'; // Adjust the path accordingly

const Search: React.FC = () => {
  const [results, setResults] = useState<Plant[]>([]);

  const handleSearch = async (image: string) => {
    try {
      const result = await identifyPlants(image);
  
      if (result && result.result && result.result.classification && result.result.classification.suggestions) {
        const suggestions = result.result.classification.suggestions;
  
        // Extract relevant data from suggestions and set it to the state
        const formattedResults = suggestions.map(suggestion => ({
          name_authority: suggestion.name,
          common_names: suggestion.details.common_names ? suggestion.details.common_names.join(', ') : 'N/A',
          image: suggestion.details.image ? suggestion.details.image.value : 'N/A',
          description: suggestion.details.description ? suggestion.details.description.value : 'N/A',
        }));
        console.log('Formatted Results:', formattedResults);
        setResults(formattedResults);
      }
    } catch (error) {
      console.error('Error identifying plants:', error);
    }
  };
  
  return (
    <div className="font-poppins">
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto p-8">
        </div>

        <div className="container mx-auto p-8">
          <h1 className="text-greenTheme text-4xl font-bold mb-4 text-center">
            Upload an Image to Identify a Plant
          </h1>
          <SearchBar onSearch={handleSearch} />
          <div className="mt-4 mb-10 pt-8">
            <h1 className="text-greenTheme text-4xl font-bold mt-4 mb-4 text-center">
              Possible Plants:
            </h1>
            {results.map((plant, index) => (
              <Card key={index} {...plant} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
