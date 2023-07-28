import React, { createContext, useContext, useState } from "react";

export const CartItems = createContext({
  items: ()=> {},
  price: 0,
  quantity:(val)=> {},
  quantityData:0,
  itemsData:[]
});

const Items = (props) => {
  const [quantity,setQuantity] = useState(0);
  const[items,setItems] = useState([])
  function seter(value) {
    setQuantity(value)
  }

  function ItemAdder(val) {
    setItems(val)
  }

  return <CartItems.Provider value={{items:ItemAdder,price:0,quantity:seter,quantityData:quantity,itemsData:items}}>
     {props.children}
  </CartItems.Provider>;
};

export default Items