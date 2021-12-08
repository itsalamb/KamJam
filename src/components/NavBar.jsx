import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CartContext } from "./CartProvider";
import "material-icons/iconfont/material-icons.css";

const NavBar = ({ isLoggedIn, setIsLoggedIn, name }) => {
  // const { cart, refreshCart, isLoading } = useContext(CartContext);

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
          <Link to="/Guitars/products" className="navlinks">
            Guitars
          </Link>
          <Link to="/Drums/products" className="navlinks">
            Drums
          </Link>
          <Link to="/Band/products" className="navlinks">
            Band/Orchestra
          </Link>
          <Link to="/Keyboards/products" className="navlinks">
            Keyboards/Synths
          </Link>
          <Link to="/Accessories/products" className="navlinks">
            Accessories
          </Link>
          <Link to="/products" className="navlinks">
            See All Products
          </Link>
        </div>
      </div>
      <div className="right-nav">
        <div className="cart-icon">
          <p>Hello, {name ? name : `guest`}</p>
          {/* {console.log("NAMEEEE:", user.name)} */}
          <Link to="/cart">
            <span class="material-icons">shopping_cart</span>
            <p>View cart (0))</p>
          </Link>
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
          <Link to="/" className="login-links">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
