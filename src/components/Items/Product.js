import React, { useContext } from "react";
import classes from "./AvailableItems.module.css";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";

const token = localStorage.getItem("token");

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = async () => {
    cartCtx.addItem({ ...props, quantity: 1 });
    const productId = props.id;
    const obj = { productId };
    await axios.post("http://localhost:3000/cart", obj, {
      headers: { Authorization: token },
    });
  };

  const deleteItemHandler = async () => {
    const productId = props.id;
    await axios.post(`http://localhost:3000/admin/delete-product/${productId}`);
    props.onDeleteItem(productId);
    console.log(props.id);
  };

  return (
    <li key={props.id}>
      <h5>{props.title}</h5>
      <Link to={`/products/${props.id}`}>
        <div className="bg-image hover-zoom">
          <img
            src={props.imageUrl}
            alt={props.title}
            width={"250px"}
            height={"300px"}
          />
        </div>
      </Link>
      <div className={classes.price}>
        <p>${props.price}</p>
        <Button onClick={addToCartHandler}>Add To Cart</Button>
        <Button onClick={deleteItemHandler}>Delete Product</Button>
      </div>
    </li>
  );
};

export default Product;
