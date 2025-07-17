import React, { useState } from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [selectedColor, setSelectedColor] = useState(
    product.colors ? Object.keys(product.colors)[0] : ''
  );
  const [quantity, setQuantity] = useState(1);

  // Show the image for selected color
  const selectedImage = product.colors?.[selectedColor];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select both size and color.');
      return;
    }

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    };

    console.log('Added to cart:', cartItem);
    onClose();
  };

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative'>
        <button
          className='absolute top-2 right-3 text-gray-600 text-xl'
          onClick={onClose}
        >
          ×
        </button>

        <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>

        {/* Main Image */}
        {selectedImage ? (
          <img
            src={selectedImage}
            alt={`${product.name} ${selectedColor}`}
            className='w-full h-60 object-contain mb-4'
          />
        ) : (
          <div className='w-full h-32 bg-gray-300 flex items-center justify-center rounded mb-4'>
            <p className='text-sm text-gray-600'>No image available</p>
          </div>
        )}

        {/* Color Selection */}
        {product.colors && (
          <div className='mb-4'>
            <p className='font-medium'>Select Color:</p>
            <div className='flex gap-2 mt-2'>
              {Object.entries(product.colors).map(([colorName, colorImg]) => (
                <button
                  key={colorName}
                  onClick={() => handleColorClick(colorName)}
                  className={`border-2 rounded p-1 ${
                    selectedColor === colorName ? 'border-black' : 'border-gray-300'
                  }`}
                >
                  <img
                    src={colorImg}
                    alt={colorName}
                    className='w-10 h-10 object-cover rounded'
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size selection */}
        <div className='mb-4'>
          <p className='font-medium'>Select Size:</p>
          <div className='flex gap-2 mt-2'>
            {(product.sizes || ['S', 'M', 'L', 'XL']).map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`border px-3 py-1 rounded ${
                  selectedSize === size ? 'bg-black text-white' : ''
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className='mb-4'>
          <p className='font-medium'>Quantity:</p>
          <input
            type='number'
            min='1'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className='border px-3 py-1 rounded w-20 mt-2'
          />
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className='bg-black text-white px-4 py-2 rounded'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;