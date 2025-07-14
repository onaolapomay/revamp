import React, { useState } from 'react';

const ProductCards = ({ product }) => {
  if (!product) return null;

  const colorKeys = product.colors ? Object.keys(product.colors) : [];
  const defaultColor = colorKeys[0] || null;
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] ||
    product.colors?.[defaultColor] ||
    (colorKeys.length > 0 ? product.colors[colorKeys[0]] : '')
  );

  const colorMap = {
    black: '#000000',
    white: '#ffffff',
    pink: '#ffc0cb',
    orange: '#ffa500',
    blue: '#0000ff',
    red: '#ff0000',
    green: '#008000',
    brown: '#8b4513',
    burgundy: '#800020',
    chocolate: '#7b3f00',
    rose: '#ff007f',
    roseGold: '#b76e79',
    sage: '#b2ac88',
    gray: '#808080',
    navy: '#000080',
  };

  return (
    <div className="w-full max-w-screen rounded-xl mx-auto overflow-hidden shadow-sm">
      {/* Main Image + Discount */}
      <div className="relative w-full h-80">
        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-full object- transition-all duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 font-[winky_sans] rounded">
            {product.discount}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-1 space-y-1">
        <h2 className="text-sm font-semibold font-[roboto]">{product.name}</h2>

        <div className="flex space-x-4">
          <p className="text-base font-bold text-black font-[lato]">{product.price}</p>
          {product.oldPrice && (
            <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
          )}
        </div>

        {product.message && (
          <p className="text-xs text-red-300 font-[roboto] font-semibold">{product.message}</p>
        )}

        {/* Color Selector */}
        {product.colors && (
          <div className="flex gap-2 mt-2">
            {colorKeys.map((color) => (
              <button
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                  setSelectedImage(product.colors[color]);
                }}
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedColor === color ? 'border-black' : 'border-gray-300'
                }`}
                style={{ backgroundColor: colorMap[color] || '#ccc' }}
              ></button>
            ))}
          </div>
        )}

        {/* Mini Image Selector */}
        {product.images && (
          <div className="flex gap-2 mt-2">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setSelectedImage(img)}
                className={`w-10 h-10 rounded border cursor-pointer object-cover ${
                  selectedImage === img ? 'border-black' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCards;