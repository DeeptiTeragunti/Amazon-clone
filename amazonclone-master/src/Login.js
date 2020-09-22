import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();

  //setting user name and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //signIn Function using firebase authentication
  const signIn = (e) => {
    e.preventDefault();

    //change in firebase.js
    //install npm i firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  //registers a new user using firebase
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            {" "}
            Sign In
          </button>
        </form>
        <p>
          By siging-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Internet-Based Ads.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
