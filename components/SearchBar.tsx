// SearchBar.tsx
import React, { useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';


interface SearchBarProps {
  onSearch: (images: FileList) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onSearch(e.target.files);
    }
  };

  return (
    <div>
      <div className="flex items-center mx-auto max-w-md p-4 bg-white rounded-full shadow-md">
        {/* Add a file input for image selection */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default SearchBar;
