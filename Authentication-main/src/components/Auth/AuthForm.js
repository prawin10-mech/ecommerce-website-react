import { useState, useRef } from "react";
import axios from "axios";
import { Prompt } from "react-router-dom";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  const [error, setError] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const signupHandler = async (e) => {
    try {
      setError(false);
      e.preventDefault();
      setIsSignUp(true);
      const obj = { email, password };
      console.log(error);
      await axios.post("http://localhost:3000/admin/signup", obj);
    } catch (err) {
      setError(true);
    }
  };

  console.log(error);
  return (
    <>
      <Prompt
        when={error}
        message={(loaction) => {
          console.log("Prompt message", error);
          return "User already exists";
        }}
      />
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
          <div className={classes.actions}>
            {!isSignUp && (
              <button type="submit" onClick={signupHandler}>
                {!isLogin ? "Sign Up" : "Login"}
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

export default AuthForm;
