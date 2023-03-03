import React, { useContext } from "react";
import classes from "./AvailableItems.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../store/CartContext";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
  };

  return (
    <li key={props.id.toString()}>
      <h5>{props.title}</h5>
      <div className="bg-image hover-zoom">
        <img src={props.imageUrl} alt={props.title} width={"250px"} />
      </div>
      <div className={classes.price}>
        <p>${props.price}</p>
        <Button onClick={addToCartHandler}>Add To Cart</Button>
      </div>
    </li>
  );
};

export default Product;
