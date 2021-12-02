import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
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
          <Link className="login-links">Checkout</Link>
          <Link className="login-links">Login/Sign Up</Link>
          <Link className="login-links">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
