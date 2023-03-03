import React from "react";
import AvailableItems from "./AvailableItems";
import classes from "./Items.module.css";

const Item = () => {
  return (
    <div className={classes.items}>
      <AvailableItems />
    </div>
  );
};

export default Item;
