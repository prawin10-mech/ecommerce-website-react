import React from "react";
import CartButton from "./CartButton";

const Nav = () => {
  return (
    <>
      <div className="bg-dark d-flex flex-row mr-3 justify-content-md-center text-light position-fixed w-100">
        <h4 className="px-3">HOME</h4>
        <h4 className="px-3">STORE</h4>
        <h4>ABOUT</h4>
        <CartButton />
      </div>
    </>
  );
};

export default Nav;
