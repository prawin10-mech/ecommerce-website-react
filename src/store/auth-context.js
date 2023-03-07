import React from "react";

const AuthContext = React.createContext({
  token: "",
  login: (token) => {},
  isLoggedIn: false,
  logout: () => {},
});

export default AuthContext;
