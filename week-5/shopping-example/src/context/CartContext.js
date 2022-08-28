import React, { useState, createContext } from "react";

const CartContext = createContext(); // general state

export const CartProvider = ({ children }) => {
  let defaultValue = [];
  if (localStorage.getItem('cart')) {
    defaultValue = JSON.parse(localStorage.getItem('cart'));
  }

  const [data, setData] = useState(defaultValue);

  const value = { // general store
    data,
    setData
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export default CartContext;
