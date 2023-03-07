import React, { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [token, setToken] = useState("");

  const userIsLoggedIn = !!token;
  const authCtx = {
    token: "",
    addToken: (token) => {
      setToken(token);
    },
    isLoggedIn: userIsLoggedIn,
  };
  console.log(token);
  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
