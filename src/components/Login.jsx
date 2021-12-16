import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
// import { getUserByEmail } from "../express/db/users";
import { AuthContext } from "./AuthProvider";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const { token, setToken, user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
    const data = await response.json();
    setToken(data.token);

    if (data.token) {
      setSuccessMessage("Welcome back!");
      setIsLoggedIn(true);

      history.push("/");
      setUser(user);
    } else {
      setErrorMessage(data.message);
    }
  };

  const handleDemo = async (event) => {
    event.preventDefault();

    const response = await fetch(`api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "demouser@gmail.com",
        password: "demouser123",
        name: "KamJam Demo",
      }),
    });
    const data = await response.json();
    setToken(data.token);

    if (data.token) {
      setSuccessMessage("Welcome back!");
      setIsLoggedIn(true);

      history.push("/");
      setUser(user);
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <>
      <div className="loginPage">
        <h2 className="welcome-back">Welcome Back!</h2>
        <p className="login-sub">You're looking groovy as always.</p>
        {errorMessage ? <h4 className="login-sub">{errorMessage}</h4> : null}
        {successMessage ? (
          <h4 className="login-sub">{successMessage}</h4>
        ) : null}
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="login-to">Log into Kam Jam</h2>
          <br />
          <label>
            <input
              className="login-info"
              type="text"
              name="name"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />

          <label>
            <input
              className="login-info"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <div>
            <button className="login-links" type="submit">
              Log In
            </button>
            <button className="login-links" onClick={handleDemo}>
              Demo User login
            </button>
          </div>
          <h4 className="no-account">
            Don't have an account? Click below to sign up!
          </h4>
          <button
            className="login-links"
            onClick={() => {
              history.push("/register");
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
