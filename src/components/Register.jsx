import react, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "./AuthProvider";

const Register = ({ setIsLoggedIn }) => {
  const { token, setToken, user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("/api/users/register", {
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
    const data = await resp.json();
    localStorage.setItem("token", data.token);
    console.log("registration data: ", data);

    if (data.token) {
      setIsLoggedIn(true);
      setUser(data.user);
      setToken(token);
      setSuccessMessage(`Welcome to KamJam ${data.user.name}`);
      history.push("/");
    } else {
      setErrorMessage(data.message);
    }
  };
  return (
    <>
      <div className="loginPage">
        <h2 className="welcome-back">Welcome to KamJam!</h2>
        <p className="login-sub">This one goes to 11.</p>
        <div>
          {errorMessage ? <h4>{errorMessage}</h4> : null}
          {successMessage ? <h4>{successMessage}</h4> : null}
          <form className="loginForm" onSubmit={handleSubmit}>
            <h2 className="login-to">Create Your Account</h2>
            <br />
            <label>
              <input
                className="login-info"
                type="text"
                required={true}
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </label>
            <br />
            <label>
              <input
                className="login-info"
                type="text"
                required={true}
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </label>
            <br />
            <label>
              <input
                className="login-info"
                type="password"
                required={true}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </label>
            <br />
            <button className="login-links" type="submit">
              Create Account!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
