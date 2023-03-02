import React from "react";
import { Button } from "react-bootstrap";

const CartButton = () => {
  const cartButtonHandler = () => {
    console.log("clicked");
  };
  return (
    <Button
      variant="dark"
      className="position-sticky top-0 start-100 bg-white text-black zindex-tooltip"
      onClick={cartButtonHandler}
    >
      CART
    </Button>
  );
};

export default CartButton;
