import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import CartContext from "../../store/CartContext";
const CartButton = () => {
  const cartCtx = useContext(CartContext);
  const [isCartShow, setIsCartShow] = useState(false);

  const cartButtonHandler = () => {
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
        CART<span>{cartCtx.totalQuantity}</span>
      </Button>
      {isCartShow && <Cart onClick={closeCartButtonHandler} />}
    </>
  );
};

export default CartButton;
