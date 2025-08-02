import React from "react";
import { useCart } from "./CartContext";
import { X } from "lucide-react";

const CartPanel = ({ isOpen, onClose }) => {
  const { cartItems, setCartItems } = useCart();

  if (!isOpen) return null;

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cartItems];
    const currentItem = updatedCart[index];
    const newQuantity = (currentItem.quantity || 1) + delta;

    if (newQuantity < 1) return;

    updatedCart[index] = { ...currentItem, quantity: newQuantity };
    setCartItems(updatedCart);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative z-50 w-full sm:w-[400px] h-full bg-white shadow-xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold font-mono">Your Cart</h2>
          <button
            onClick={onClose}
            className="w-6 h-6 text-blue-800 hover:text-black"
          >
            <X className="w-8 h-8 text-gray-950 hover:text-black" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={`${item.id}-${item.size || index}`}
                  className="flex items-center gap-3 border-b pb-4 relative"
                >
                  {(item.image || item.image1 || (item.images && item.images[0])) && (
                    <img
                      src={
                        item.image ||
                        item.image1 ||
                        (item.images && item.images[0])
                      }
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  )}

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.price}</p>
                    {item.size && (
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    )}

                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => handleQuantityChange(index, -1)}
                        className="px-2 py-1 border rounded text-sm"
                      >
                        −
                      </button>
                      <span className="text-sm">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(index, 1)}
                        className="px-2 py-1 border rounded text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="absolute top-0 right-0 text-gray-500 hover:text-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 border-t">
          <button className="w-full py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;