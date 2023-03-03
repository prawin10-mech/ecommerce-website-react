import React from "react";
import { productsArr } from "../../constants";
import Product from "./Product";
import classes from "./AvailableItems.module.css";

const AvailableItems = () => {
  const products = productsArr.map((item) => {
    return (
      <ul className={classes.ul}>
        <Product
          key={item.id.toString()}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      </ul>
    );
  });

  return <>{products}</>;
};

export default AvailableItems;
