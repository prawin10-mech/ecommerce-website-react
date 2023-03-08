import React, { useState, useEffect } from "react";
import Product from "./Product";
import classes from "./AvailableItems.module.css";
import axios from "axios";

const AvailableItems = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:3000/products");
        setItems(response.data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const deleteItemHandler = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (items.length === 0) {
    content = <p>Found no items</p>;
  } else {
    content = (
      <ul className={classes.ul}>
        {items.map((item) => (
          <Product
            key={item.id.toString()}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            onSetItems={setItems}
            onDeleteItem={deleteItemHandler}
          />
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default AvailableItems;
