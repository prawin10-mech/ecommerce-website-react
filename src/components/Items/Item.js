import React, { useState, useEffect } from "react";
import AvailableItems from "./AvailableItems";
import classes from "./Items.module.css";
import axios from "axios";
import AddItem from "../Items/AddItems";
import { Button } from "react-bootstrap";

const Item = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addItemBtn, setAddItemBtn] = useState(false);
  const [items, setItems] = useState([]);

  const newProductHandler = () => {
    const fetchData = async () => {
      setIsLoading(true);
      let response = await axios.get("http://localhost:3000/products");
      response = response.data;
      setItems(response);
      setIsLoading(false);
    };

    fetchData();
  };

  useEffect(newProductHandler, []);

  const addItemHandler = async () => {
    setAddItemBtn(true);
  };

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    setAddItemBtn(false);
    return items;
  };

  console.log(items);
  return (
    <>
      {!isLoading && (
        <div>
          {!addItemBtn && (
            <Button onClick={addItemHandler} className="m-auto">
              Add Item
            </Button>
          )}
          {addItemBtn && <AddItem onAddItem={addItem} />}
          <div className={classes.items}>
            <AvailableItems items={items} />
          </div>
        </div>
      )}

      {isLoading && <p>loading.....</p>}
    </>
  );
};

export default Item;
