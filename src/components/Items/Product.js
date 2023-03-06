import React, { useContext } from "react";
import classes from "./AvailableItems.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import axios from "axios";

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
  };

  const deleteItemHandler = async () => {
    const productId = props.id;
    await axios.post(`http://localhost:3000/admin/delete-product/${productId}`);
    console.log(props.id);
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
        <Button onClick={deleteItemHandler}>Delete Product</Button>
      </div>
    </li>
  );
};

export default Product;
