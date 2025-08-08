import React from "react";
import { useCart } from "./CartContext";
import { X, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const CartPanel = ({ isOpen, onClose }) => {
  const { cartItems, setCartItems } = useCart();

  if (!isOpen) return null;

  const handleRemove = (idToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== idToRemove);
    setCartItems(updatedCart);
  };

 const increaseQuantity = (targetItem) => {
  setCartItems((prevItems) =>
    prevItems.map((item) => {
      if (
        item.id === targetItem.id &&
        item.color === targetItem.color &&
        item.size === targetItem.size
      ) {
        if (item.quantity < 10) {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    })
  );
};

const decreaseQuantity = (targetItem) => {
  setCartItems((prevItems) =>
    prevItems
      .map((item) => {
        if (
          item.id === targetItem.id &&
          item.color === targetItem.color &&
          item.size === targetItem.size
        ) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.quantity !== 0)
  );
};

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      <div className="relative z-50 w-full sm:w-[400px] h-full bg-white shadow-xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold font-mono">Your Cart</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-800 hover:text-red-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 border-b pb-4 relative"
                >
                  <img
                    src={
                      item.image ||
                      item.image1 ||
                      (item.images && item.images[0]) ||
                      "/placeholder.jpg"
                    }
                    alt={item.name}
                    className="w-14 h-14  rounded"
                  />

                  <div className="flex flex-col">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.price}</p>
                      {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="px-2 py-1 border text-sm rounded"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item)}
                          className={`px-2 py-1 border text-sm rounded ${
                            item.quantity === 10 ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          disabled={item.quantity === 10}
                        >
                          +
                        </button>
                      </div>
                    </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-0 right-0 p-1 text-gray-500 hover:text-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 border-t">
          <Link to="/checkout">
            <button className="w-full py-2 bg-blue-800 text-white rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;