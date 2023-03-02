import { productsArr } from "../constants";
import { Button } from "react-bootstrap";
import classes from "./Item.module.css";

const Item = () => {
  const item = productsArr.map((item) => {
    return (
      <li key={item.id}>
        <h5>{item.title}</h5>
        <div className="bg-image hover-zoom">
          <img src={item.imageUrl} alt={item.title} width={"250px"} />
        </div>
        <div className={classes.price}>
          <p>${item.price}</p>
          <Button>Add To Cart</Button>
        </div>
      </li>
    );
  });
  return <ul className={classes.ul}>{item}</ul>;
};

export default Item;
