import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingIndex = prevItems.findIndex(
      (item) =>
        item.id === product.id &&
        item.color === product.color &&
        item.size === product.size
    );

    if (existingIndex !== -1) {
      const updatedItems = [...prevItems];
      const existingItem = updatedItems[existingIndex];

      if (existingItem.quantity < 10) {
        updatedItems[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
      }

      return updatedItems;
    }

    return [...prevItems, { ...product, quantity: 1 }];
  });
};

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCartOpen,
        setIsCartOpen,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);