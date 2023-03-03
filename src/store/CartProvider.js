import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addItemToCart = (item) => {
    const existingCartItemIndex = items.findIndex(
      (product) => item.id === product.id
    );
    const existingCartItem = items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...items, item];
    }
    setItems(updatedItems);
    const totalQuantity = updatedItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setQuantity(totalQuantity);
    return updatedItems;
  };

  const cartCtx = {
    items: items,
    totalQuantity: quantity,
    addItem: addItemToCart,
    removeItem: (id) => {},
  };
  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
