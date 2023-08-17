import React from 'react';

const Card = ({ title, description, price, discountPercentage, rating, stock, brand, category, thumbnail,images,}) => {
  return (
    <div className="mx-8 my-2 bg-gray-300 shadow-lg rounded-lg overflow-hidden w-60 h-100 hover:bg-orange-200 drop-shadow-xl" >
              <img src={thumbnail} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 mb-2">{description}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold">${price}</span>
                  <span className="text-green-600 font-semibold">
                    {discountPercentage}% off
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 text-sm">
                    ★ {rating}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    ({stock} in stock)
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Brand: {brand}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Category: {category}
                </p>
              </div>
            </div>
  );
};

export default Card;