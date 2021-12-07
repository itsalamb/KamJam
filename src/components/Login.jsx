import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
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
    console.log(data);
    window.localStorage.setItem("token", data.token);

    if (data.token) {
      setIsLoggedIn(true);
      setSuccessMessage("Welcome back!");

      history.push("/");
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <>
      <div className="loginPage">
        <h2>Welcome Back!</h2>
        <h2>Log into KAMJAM:</h2>
        {errorMessage ? <h4>{errorMessage}</h4> : null}
        {successMessage ? <h4>{successMessage}</h4> : null}
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>
            <input
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
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Log In" />
        </form>
        <h3>
          {/* NavLink can be reabled when other components are working */}
          {/* Not a member yet? <NavLink to="/register">Register today!</NavLink> */}
        </h3>
      </div>
    </>
  );
};

export default LoginForm;
