import React, { useState, useContext } from "react";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Nav = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <>
      <div className="bg-dark d-flex flex-row mr-3 justify-content-md-center text-light position-fixed w-100 ">
        <NavLink to="/" className="text-white text-decoration-none">
          <h4 className="px-3 m-1">HOME</h4>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/store" className="text-white text-decoration-none m-1">
            <h4>STORE</h4>
          </NavLink>
        )}
        <NavLink to="/about" className="text-white text-decoration-none m-1">
          <h4>ABOUT</h4>
        </NavLink>
        <NavLink to="/contact" className="text-white text-decoration-none m-1">
          <h4>CONTACT</h4>
        </NavLink>
        <NavLink to="/login" className="text-white text-decoration-none m-1">
          {!isLoggedIn && <h4>LOGIN</h4>}
          {isLoggedIn && (
            <button
              className="bg-dark text-white border-0"
              onClick={logoutHandler}
            >
              <h4>LOGOUT</h4>
            </button>
          )}
        </NavLink>

        <CartButton />
      </div>
    </>
  );
};

export default Nav;
