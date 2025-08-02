import { useState, useEffect } from 'react';
import { useCart } from './CartContext';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      if (product.colors) {
        const firstColorKey = Object.keys(product.colors)[0];
        setSelectedColor(firstColorKey);
        setSelectedImage(product.colors[firstColorKey]);
      } else if (product.images && product.images.length > 0) {
        setSelectedImage(product.images[0]);
      }
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize('');
      }
    }
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedImage,
      color: selectedColor,
      size: selectedSize,
    };

    addToCart(item);
    onAddToCart(item);
    alert(`${product.name} has been added to your cart.`);
    onClose();
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <img
          src={selectedImage}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl mb-4"
        />

        <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
        <p className="text-lg font-bold text-pink-600">{product.price}</p>
        <p className="line-through text-sm text-gray-500">{product.oldPrice}</p>
        <p className="text-xs text-red-500 mb-2">{product.discount}</p>
        <p className="text-xs text-gray-700 mb-4">{product.message}</p>

        {/* Color Selector */}
        {product.colors && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-1">Choose Color:</h3>
            <div className="flex gap-2 flex-wrap">
              {Object.entries(product.colors).map(([color, url]) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    setSelectedImage(url);
                  }}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Image Selector */}
        {product.images && product.images.length > 1 && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-1">Select Image:</h3>
            <div className="flex gap-2">
              {product.images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`img-${index}`}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`w-16 h-16 object-cover rounded-xl cursor-pointer border ${
                    selectedImage === imgUrl ? 'border-black' : 'border-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size Selector */}
        {product.sizes && (
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-1">Available Sizes:</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-full text-sm border cursor-pointer ${
                    selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-400'
                  }`}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;