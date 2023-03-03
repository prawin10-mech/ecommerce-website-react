import React from "react";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-dark d-flex flex-row mr-3 justify-content-md-center text-light position-fixed w-100 ">
        <h4 className="px-3 m-1">HOME</h4>
        <NavLink to="/" className="text-white text-decoration-none m-1">
          <h4>STORE</h4>
        </NavLink>
        <NavLink to="/about" className="text-white text-decoration-none m-1">
          <h4>ABOUT</h4>
        </NavLink>
        <CartButton />
      </div>
    </>
  );
};

export default Nav;
