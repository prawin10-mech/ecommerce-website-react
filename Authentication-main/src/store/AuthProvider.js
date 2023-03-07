import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  const authCtx = {
    token: "",
    login: (token) => {
      setToken(token);
      localStorage.setItem("token", token);
    },
    isLoggedIn: userIsLoggedIn,
    logout: () => {
      setToken(null);
      localStorage.removeItem("token", token);
    },
  };
  console.log(authCtx.isLoggedIn);
  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
