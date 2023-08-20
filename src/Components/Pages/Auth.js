import axios from "axios";
import React, { useRef, useState } from "react";
import classes from "./Auth.css";

import { useHistory } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const enteredEmailRef = useRef();
  const enteredPassRef = useRef();
  const enteredConfPassRef = useRef();
  const history = useHistory();

  const toggleAuthHandler = (event) => {
    event.preventDefault();
    setIsLogin(!isLogin);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const enteredEmail = enteredEmailRef.current.value;
      const enteredPass = enteredPassRef.current.value;
      const enteredConfPass = !isLogin
        ? enteredConfPassRef.current.value
        : null;

      const authObj = {
        email: enteredEmail,
        password: enteredPass,
        returnSecureToken: true,
      };

      if (isLogin) {
        let res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD9IHVJXmO199ELEojC5tmtnsW91qJmN8g",
          authObj,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        try {
          history.replace('/welcome');
          localStorage.setItem('ExpenseToken', res.data.idToken);
          enteredEmailRef.current.value = "";
          enteredPassRef.current.value = "";
        } catch (err) {
          console.log(err);
        }
      } else {
        if (
          enteredEmail.trim().length === 0 ||
          enteredPass.trim().length === 0 ||
          enteredConfPass.trim().length === 0
        ) {
          alert("All fields are mandatory");
        } else if (enteredPass !== enteredConfPass) {
          alert("Passwords do not match");
        } else if (
          enteredPass === enteredConfPass &&
          enteredEmail.trim().length > 0 &&
          enteredPass.trim().length > 0 &&
          enteredConfPass.trim().length > 0
        ) {
          let res = await axios.post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD9IHVJXmO199ELEojC5tmtnsW91qJmN8g",
            authObj,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          try {
            console.log(res);
            enteredEmailRef.current.value = "";
            enteredPassRef.current.value = "";
            enteredConfPassRef.current.value = "";
          } catch (err) {
            console.log(err);
          }
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <React.Fragment>
      <form className={classes.form}>
        <h2 className={classes.header}>{isLogin ? "Login" : "Sign Up"}</h2>
        <label htmlFor="mail" className={classes.label}>
          EMail
        </label>
        <input
          ref={enteredEmailRef}
          type="email"
          id="mail"
          required
          className={classes.input}
        ></input>
        <label htmlFor="password_" className={classes.label}>
          Password
        </label>
        <input
          ref={enteredPassRef}
          type="password"
          id="password_"
          required
          className={classes.input}
        ></input>
        {!isLogin && (
          <React.Fragment>
            <label htmlFor="confirmpass" className={classes.label}>
              Confirm Password
            </label>
            <input
              ref={enteredConfPassRef}
              type="password"
              id="confirmpass"
              required
              className={classes.input}
            ></input>
          </React.Fragment>
        )}
        <button onClick={submitHandler} className={classes.button}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <button
          onClick={toggleAuthHandler}
          className={`${classes.button} ${classes.toggleButton}`}
        >
          {isLogin ? "Create new account" : "Already have an account?"}
        </button>
      </form>
    </React.Fragment>
  );
};

export default Auth;
