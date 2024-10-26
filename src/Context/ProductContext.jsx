import React, { createContext, useEffect, useState } from "react";
const ProductContext = createContext();

function PrductContextProvider({ children }) {
  const [selectedItemInCart, setSelectedItemInCart] = useState(new Map());
  const[totalQty,setTotalQty]=useState(0)
  const[searchInput,setSearchInput]=useState('');
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
    <ProductContext.Provider value={{ selectedItemInCart,searchInput, addItemToCart,setSearchInput,totalQty,setTotalQty }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, PrductContextProvider };
