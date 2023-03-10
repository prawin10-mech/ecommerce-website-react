import React, { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cartCtx.items);
  }, [cartCtx.items]);

  const handleCartClose = () => {
    props.onClick();
  };

  return (
    <>
      <div className="position-fixed text-dark top-0 end-0 mx-4 mt-5 py-5 bg-light">
        <button
          className="position-relative text-dark top-0 end-0"
          onClick={handleCartClose}
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
            <CartItems items={cartItems} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
