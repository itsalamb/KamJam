import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleClick = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>KamJam logo here!</h2>
      </div>
      <div className="nav-main">
        <SearchBar className="search-bar" />
        <div className="links">
          <Link className="navlinks">Guitars</Link>
          <Link className="navlinks">Drums</Link>
          <Link className="navlinks">Band/Orchestra</Link>
          <Link className="navlinks">Keyboards/Synths</Link>
          <Link className="navlinks">Accessories</Link>
          <Link className="navlinks">See All Products</Link>
        </div>
      </div>
      <div className="right-nav">
        <div className="cart-icon">
          <p>Hello, *insert username*!</p>
          <button>Insert cart icon</button>
        </div>
        <div>
          {isLoggedIn ? (
            <Link className="login-links" to="/login" onClick={handleClick}>
              Logout
            </Link>
          ) : (
            <>
              <Link className="login-links" to="/login">
                Login
              </Link>
              <Link className="login-links" to="/register">
                Sign Up
              </Link>
            </>
          )}
          <Link className="login-links">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
