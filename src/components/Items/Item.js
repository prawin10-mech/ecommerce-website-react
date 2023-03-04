import React, { useState } from "react";
import AvailableItems from "./AvailableItems";
import classes from "./Items.module.css";
import { Button } from "react-bootstrap";

const Item = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    let response = await fetch("https://swapi.dev/api/films");
    response = response.json();
    response = response.results;
    console.log(response);
    setIsLoading(false);
  };
  return (
    <>
      <Button onClick={fetchData}>Fetch data</Button>
      {!isLoading && (
        <div className={classes.items}>
          <AvailableItems />
        </div>
      )}
      {isLoading && <p>loading.....</p>}
    </>
  );
};

export default Item;
