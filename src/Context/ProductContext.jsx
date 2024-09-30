import React, { createContext, useState } from "react";
const PrductContext = createContext();

function PrductContextProvider({ children }) {
  const [selectedItemInCart, setSelectedItemInCart] = useState([]);
  const addItemToCart = (productList) => {
    setSelectedItemInCart((prev) => [...prev, productList]);
  };

return <PrductContext.Provider value={{selectedItemInCart,addItemToCart}}>{children}</PrductContext.Provider>
}

export { PrductContext, PrductContextProvider };
