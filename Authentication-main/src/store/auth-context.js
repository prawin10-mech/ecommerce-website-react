import React from "react";

const AuthContext = React.createContext({
  token: "",
  addToken: (token) => {},
  isLoggedIn: false,
});

export default AuthContext;
