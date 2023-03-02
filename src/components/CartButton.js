import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Cart from "./Cart/Cart";

const CartButton = () => {
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
        CART
      </Button>
      {isCartShow && <Cart onClick={closeCartButtonHandler} />}
    </>
  );
};

export default CartButton;
