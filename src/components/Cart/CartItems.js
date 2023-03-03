import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const CartItems = () => {
  const cartCtx = useContext(CartContext);
  let cartItems = cartCtx.items.map((cartElement) => {
    return (
      <tr className="text-dark" key={cartElement.title}>
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
