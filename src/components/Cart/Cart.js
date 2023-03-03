import React, { useContext } from "react";
import CartItems from "./CartItems";

const Cart = (props) => {
  return (
    <>
      <div className="position-fixed text-dark top-0 end-0 mx-4 mt-5 py-5 bg-light">
        <button
          className="position-relative text-dark top-0 end-0"
          onClick={props.onClick}
        >
          X
        </button>
        <table>
          <thead className="fw-bolder mt-0">
            <tr className="px-5">
              <td>Item</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            <CartItems />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
