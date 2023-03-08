import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/CartContext";
import axios from "axios";

const CartButton = () => {
  const cartCtx = useContext(CartContext);
  const [isCartShow, setIsCartShow] = useState(false);
  const [count, setCount] = useState(0);

  const cartProducts = async () => {
    const cartCount = await axios.get("http://localhost:3000/cart");
    const totalQuantity = cartCount.data.reduce(
      (total, item) => total + item.cartItem.quantity,
      0
    );
    setCount(totalQuantity);
  };

  useEffect(() => {
    cartProducts();
  }, [cartCtx.totalQuantity]);

  const cartButtonHandler = async () => {
    setIsCartShow(true);
  };
  const closeCartButtonHandler = () => {
    setIsCartShow(false);
  };
  return (
    <>
      <Button
        variant="dark"
        className="position-sticky top-0 start-100 bg-white text-black zindex-tooltip"
        onClick={cartButtonHandler}
      >
        CART<span>{count}</span>
      </Button>
      {isCartShow && <Cart onClick={closeCartButtonHandler} />}
    </>
  );
};

export default CartButton;
