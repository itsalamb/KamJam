import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
// import { CartContext } from "./CartProvider";
import "material-icons/iconfont/material-icons.css";
import logo from "./images/logo.png";
import { AuthContext } from "./AuthProvider";
import { CartContext } from "./CartProvider";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const { user, setUser } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const history = useHistory();
  console.log("CART FROM CART CONTEXT???:", cart);

  const handleClick = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser("guest");
    history.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="logoDiv">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
      </div>
      <div className="nav-main">
        <SearchBar className="search-bar" />
        <div className="links">
          <Link to="/" className="navlinks">
            Home
          </Link>
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
          <p>Hello, {user.name ? user.name : `guest`}</p>
          <div className="view-cart">
            <Link to="/cart/userid/:userId">
              <span class="material-icons">shopping_cart</span>
            </Link>
            <Link to="/cart/userid/:userId">
              <p>View cart ({cart.length})</p>
            </Link>
          </div>
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
