import React from 'react';

const ProductItemCard = ({ image, name, price, rating, numRatings }) => {
  return (
    <div className="flex flex-col min-w-32 max-w-44">
      <div className="flex justify-center items-center border border-white rounded-lg bg-gradient-to-br from-neutral-800 to-black backdrop-blur-10 p-8">
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col mt-4">
        <h2>{name}</h2>
        <p className='text-gray-400'>Price: ${price}</p>
        <p className='text-gray-400'>⭐⭐⭐⭐⭐ ({numRatings})</p>
      </div>
    </div>
  );
};

export default ProductItemCard;