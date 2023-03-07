import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  const [error, setError] = useState(false);

  const [loginSuccess, setLoginSuccess] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const signupHandler = async (e) => {
    try {
      setError(false);
      e.preventDefault();
      setIsSignUp(true);
      const obj = { email, password };
      await axios.post("http://localhost:3000/admin/signup", obj);
    } catch (err) {
      setError(true);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const obj = { email, password };
      const response = await axios.post(
        "http://localhost:3000/admin/login",
        obj
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setLoggedIn(true);
        setEmail("");
        setPassword("");
        setLoginSuccess(true);
        navigate("/store");
      }
    } catch (err) {
      console.log("failed");
      setLoginSuccess(false);
      setLoggedIn(false);
    }
  };
  return (
    <>
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          {!loginSuccess && (
            <p className="text-danger">Please enter valid email or password</p>
          )}
          <div className={classes.actions}>
            {!isLogin && (
              <button type="submit" onClick={signupHandler}>
                Sign up
              </button>
            )}
            {isLogin && (
              <button type="submit" onClick={loginHandler}>
                {loggedIn ? "LOGOUT" : "LOGIN"}
              </button>
            )}
            {!isLogin && isSignUp && (
              <p className="text-primary">Sending request ...</p>
            )}
            {!isSignUp && (
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
