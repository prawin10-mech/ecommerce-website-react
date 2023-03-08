import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";
import axios from "axios";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const fetchCountHandler = async () => {
    const cartCount = await axios.get("http://localhost:3000/cart");
    const totalQuantity = cartCount.data.reduce(
      (total, item) => total + item.cartItem.quantity,
      0
    );
    setQuantity(totalQuantity);
  };

  useEffect(() => {
    fetchCountHandler();
  }, [items]);

  const addItemToCart = async (item) => {
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
