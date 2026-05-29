import React, { createContext, useState } from "react";
import all_product from "../Component/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let index = 1; index <= all_product.length; index++) {
    cart[index] = 0;
  }

  return cart;
};

const ShopContextprovider = (props) => {
  const [cartitem, setCartitem] = useState(getDefaultCart());

  // Add to cart
  const addtoCart = (itemsId) => {
    setCartitem((prev) => ({
      ...prev,
      [itemsId]: prev[itemsId] + 1,
    }));
  };

  // Remove from cart
  const removeItems = (itemsId) => {
    setCartitem((prev) => ({
      ...prev,
      [itemsId]: prev[itemsId] - 1,
    }));
  };
  const getTotalcartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartitem){
      if(cartitem[item] > 0){
        let itemInfo = all_product.find((product)=>product.id === Number(item))
totalAmount += itemInfo.new_price * cartitem[item]

 
      }
    }
    return totalAmount;
  }
   const getTotalcartItems = () =>{
    let totalitem =0;
    for(const item in cartitem){
      if(cartitem[item] > 0){
        totalitem+=cartitem[item]
      }
    }
    return totalitem
   }
  const contextValue = {
    getTotalcartItems,
    getTotalcartAmount,
    all_product,
    cartitem,
    addtoCart,
    removeItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextprovider;