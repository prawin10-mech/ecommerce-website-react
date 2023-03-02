import React from "react";
import { cartElements } from "../../constants";
import { Button } from "react-bootstrap";

const CartItems = () => {
  let cartItems = cartElements.map((cartElement) => {
    return (
      <tr className="text-dark">
        <td>
          <img
            src={cartElement.imageUrl}
            alt={cartElement.title}
            width={"100px"}
            height={"100px"}
          />
          {cartElement.title}
        </td>
        <td>{cartElement.price}</td>
        <td>
          {cartElement.quantity}
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    );
  });
  return cartItems;
};

export default CartItems;
