import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [token, setToken] = useState("");

  const userIsLoggedIn = !!token;
  const authCtx = {
    token: "",
    login: (token) => {
      setToken(token);
    },
    isLoggedIn: userIsLoggedIn,
    logout: () => {
      setToken(null);
    },
  };
  console.log(token);
  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
