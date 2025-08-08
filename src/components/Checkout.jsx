import React from 'react';
import { useCart } from './CartContext';

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = item.quantity || 1;
      return total + price * quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Checkout Summary</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity || 1}</p>
                  </div>
                  <p className="font-semibold">${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4">
              <p className="text-xl font-bold">Total: ₦{calculateTotal()}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;