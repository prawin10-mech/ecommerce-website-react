import React, { useState } from "react";
import AvailableItems from "./AvailableItems";
import classes from "./Items.module.css";
import axios from "axios";
import AddItem from "../Items/AddItems";

const Item = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    let response = await axios.get("http://localhost:3000/products");
    response = response.data.products;
    console.log(response);
    setIsLoading(false);
  };
  return (
    <>
      {!isLoading && (
        <div>
          <AddItem />
          <div className={classes.items}>
            <AvailableItems />
          </div>
        </div>
      )}

      {isLoading && <p>loading.....</p>}
    </>
  );
};

export default Item;
