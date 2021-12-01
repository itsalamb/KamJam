import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" />
      </div>
      <div className="nav-main">
        <button>Insert Searchbar here</button>
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
        <div className="login-links">
          <Link>Checkout</Link>
          <Link>Login/Sign Up</Link>
          <Link>Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
