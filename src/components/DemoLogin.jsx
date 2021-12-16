import React from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export default function DemoLogin() {
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
          <h2 className="login-to">Log into KAMJAM:</h2>
          <br />
          <label>
            <input
              className="email"
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
              className="password"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <input className="Login" type="submit" value="Log In" />
          <h4 className="no-account">
            Don't have an account? Click below to sign up!
          </h4>
          <button
            className="to-register"
            onClick={() => {
              history.push("/register");
            }}
          >
            Sign Up
          </button>
        </form>
        <h3>
          {/* NavLink can be reabled when other components are working */}
          {/* Not a member yet? <NavLink to="/register">Register today!</NavLink> */}
        </h3>
      </div>
    </>
  );
}
