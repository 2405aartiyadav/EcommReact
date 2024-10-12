import React, { createContext, useEffect, useState } from "react";
const PrductContext = createContext();

function PrductContextProvider({ children }) {
  const [selectedItemInCart, setSelectedItemInCart] = useState(new Map());
  const addItemToCart = (id, product) => {
    console.log(id, product);
    if(selectedItemInCart.has(id)){
      let checkExistingItem=selectedItemInCart.get(id);
     checkExistingItem.quantity+=product.quantity;
     selectedItemInCart.set(id,checkExistingItem);

    }
    else{
    setSelectedItemInCart((prev) => new Map(prev.set(id, product)));
    }
  };
  useEffect(()=>{
    console.log(selectedItemInCart);
    
  },[])

  return (
    <PrductContext.Provider value={{ selectedItemInCart, addItemToCart }}>
      {children}
    </PrductContext.Provider>
  );
}

export { PrductContext, PrductContextProvider };
