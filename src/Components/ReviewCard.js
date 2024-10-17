import React from 'react';

const ReviewCard = ({ photo, name, review }) => {
  return (
    <div className="border border-white rounded-lg p-4 w-64 bg-gradient-to-br from-neutral-800 to-black backdrop-blur-10 min-w-64 max-w-64">
      <div className="flex items-center mb-4">
        <img src={photo} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-sm line-clamp-3 text-gray-400">{review}</p>
    </div>
  );
};

export default ReviewCard;