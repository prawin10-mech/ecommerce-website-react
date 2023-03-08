import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import axios from "axios";

const CartItems = () => {
  const [items, setItems] = useState([]);
  const cartProducts = () => {
    const fetchData = async () => {
      const items = await axios.get("http://localhost:3000/cart");
      setItems(items.data);
    };
    fetchData();
  };
  useEffect(cartProducts, []);

  console.log(items);

  let cartItems = items.map((cartElement) => {
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
          {cartElement.cartItem.quantity}
          <Button variant="danger">Delete</Button>
        </td>
      </tr>
    );
  });
  return cartItems;
};

export default CartItems;
