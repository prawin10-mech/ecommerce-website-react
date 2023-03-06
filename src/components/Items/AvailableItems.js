import React, { useState, useEffect } from "react";
import Product from "./Product";
import classes from "./AvailableItems.module.css";
import axios from "axios";

const AvailableItems = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("null");

  function fetchItemsHandler() {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      setError("null");
      setIsLoading(false);
      let products = await axios.get("http://localhost:3000/products");
      products = products.data.products;
      setIsLoading(true);
      console.log(products);
      setItems(products);
    };
    fetchData();
    console.log(items);
  }
  useEffect(fetchItemsHandler, []);
  if (items.length > 0) {
    const products = items.map((item) => {
      return (
        <ul className={classes.ul}>
          {items.length === 0 && <li>Found no items</li>}
          {!isLoading && <p>{error}</p>}
          {items.length > 0 && (
            <Product
              key={item.id.toString()}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          )}
        </ul>
      );
    });

    return <>{products}</>;
  }
  return <p>Loading...</p>;
};

export default AvailableItems;
