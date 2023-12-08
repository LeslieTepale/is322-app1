import React, { useState, useRef } from 'react';
import { ArrowUpTrayIcon, CameraIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch: (image: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const firstImage = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          const base64Image = reader.result.toString();
          onSearch(base64Image);
        }
      };

      reader.readAsDataURL(firstImage);
    }
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      document.body.appendChild(video);
      video.srcObject = stream;
      video.play();

      const canvas = document.createElement('canvas');
      canvas.width = video.width || 640;
      canvas.height = video.height || 480;

      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const base64Image = canvas.toDataURL('image/jpeg');
        onSearch(base64Image);

        stream.getTracks().forEach(track => track.stop());
        document.body.removeChild(video);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto max-w-md space-x-4">
      {/* Upload button */}
      <label className="flex items-center bg-greenTheme text-white rounded-full p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 active:scale-95">
        <ArrowUpTrayIcon className="h-10 w-10 mb-2" />
        <span>Upload</span>
        {/* Add a file input for image selection */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* Camera button with similar styling */}
      <button
        onClick={openCamera}
        className="flex items-center bg-greenTheme text-white rounded-full p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 active:scale-95"
      >
        <CameraIcon className="h-10 w-10 mb-2" />
        <span>Camera</span>
      </button>
    </div>
  );
};

export default SearchBar;
