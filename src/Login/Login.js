import React, { useState, useEffect } from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import db, { auth, googleProvider, emailProvider } from "./../firebase";
import * as actionTypes from "./../reducer/actionTypes";
import { useStateValue } from "../reducer/StateContextProvider";

const Login = () => {
  // Context API variables
  const [{ user }, dispatch] = useStateValue();
  // Local state Variables
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccesMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Local Variables
  let timer = null;

  const handleGoogleSubmit = (e) => {
    e.preventDefault();
    setError("");

    auth
      .signInWithPopup(googleProvider)
      .then((authuser) => {
        setError(``);

        setSuccesMessage("Log In User with Google Services");
        dispatch({
          type: actionTypes.SET_USER,
          user: authuser.user,
        });
      })
      .catch((error) =>
        setError(`${error.code.split("/")[1]} : ${error.message}`)
      );
    setPassword("");
    setConfirmPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (confirmPassword?.length > 6 && password?.length > 6) {
      if (confirmPassword === password) {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((authuser) => {
            setError(``);
            setSuccesMessage(`User Created for ${authuser.user?.email}`);
            dispatch({
              type: actionTypes.SET_USER,
              user: authuser.user,
            });
          })
          .catch((error) => {
            setError(`${error.code.split("/")[1]} : ${error.message}`);
            timer = setTimeout(() => {
              setError(``);
            }, 3000);
            return () => clearTimeout(timer);
          });
      } else {
        setError("Password doesnot match");
        timer = setTimeout(() => {
          setError(``);
        }, 3000);
        return () => clearTimeout(timer);
      }

      setPassword("");
      setConfirmPassword("");
    } else {
      if (password?.length > 6) {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((authuser) => {
            console.log(authuser);
            setSuccesMessage("Log In User with Email");
            dispatch({
              type: actionTypes.SET_USER,
              user: authuser.user,
            });
          })
          .catch((error) => {
            setError(`${error.code.split("/")[1]} : ${error.message}`);
            timer = setTimeout(() => {
              setError(``);
            }, 3000);
            return () => clearTimeout(timer);
          });
      } else {
        setError(`Password length is less than 6`);
        timer = setTimeout(() => {
          setError(``);
        }, 3000);
        return () => clearTimeout(timer);
      }

      setPassword("");
      setConfirmPassword("");
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="login">
      {error && <div className="errorContainer"> {error}</div>}
      {successMessage && (
        <div className="successContainer"> {successMessage}</div>
      )}
      <div className="login__left">
        <div className="login__leftContainer">
          <img src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg" />
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
      </div>
      <div className="login__right">
        <div className="login__rightContainer">
          <form>
            <input
              type="text"
              placeholder="Email address or phone number"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!hidden && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            {hidden ? (
              <Button
                onClick={(e) => {
                  setHidden(true);
                  handleLogin(e);
                }}
              >
                Log In
              </Button>
            ) : (
              <Button
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Sign up
              </Button>
            )}

            <p>Forgotten password ?</p>
          </form>
          <div className="login__bottom">
            <Button
              onClick={(e) => setHidden(!hidden)}
              className="login__createAccount"
            >
              {hidden ? `Create New Account` : `Login`}
            </Button>
            <Button
              onClick={(e) => {
                setHidden(true);
                handleGoogleSubmit(e);
              }}
              className="login__createAccount"
            >
              Sign In With Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
