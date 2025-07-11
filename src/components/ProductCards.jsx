import React, { useState } from 'react';

const ProductCards = ({ product }) => {
  if (!product) return null;

  const colorKeys = product.colors ? Object.keys(product.colors) : [];
  const defaultColor = colorKeys[0] || null;
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const imageUrl = product.colors
    ? product.colors[selectedColor]
    : product.images?.[0];


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
    <div className="rounded-lg overflow-hidden shadow-sm">
  
  <div className="relative w-full h-80">
    <img
      src={imageUrl}
      alt={product.name}
      className="w-full h-full"
    />
    
    {product.discount && (
      <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 font-[winky_sans] rounded">
        {product.discount}
      </div>
    )}
  </div>

  {/* Product details */}
  <div className="p-1 space-y-1">
    <h2 className="text-sm font-semibold font-[roboto]">{product.name}</h2>
    <div className='flex space-x-4'>
    <p className="text-base font-bold text-black font-[lato]">{product.price}</p>
    {product.oldPrice && (
      <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
    )}
    </div>
    {product.message && (
      <p className="text-xs text-red-300 font-[roboto] font-semibold">{product.message}</p>
    )}
    
    {/* Color selection */}
    {product.colors && (
      <div className="flex gap-2 mt-2">
        {Object.entries(product.colors).map(([color, imgUrl]) => (
          <button
            key={color}
            className={`w-5 h-5 rounded-full border-2 ${
              selectedColor === color ? 'border-black' : 'border-gray-300'
            }`}
            style={{ backgroundColor: colorMap[color]}}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>
    )}
  </div>
</div>
  );
};

export default ProductCards;