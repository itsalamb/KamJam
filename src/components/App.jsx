import React, { useState, useEffect } from "react";
import LoginForm from "./Login";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Register from "./Register";
import Cart from "./Cart";
import AllProducts from "./Products";
import CategoryProducts from "./CategoryProducts";
import ProductDetails from "./ProductDetails";
// import ProductsProvider from "./ProductsProvider";
// import CartProvider from "./CartProvider";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const TOKEN = window.localStorage.getItem("token");
    const checkAuth = async () => {
      const response = await fetch(`api/users/login`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setEmail(data.email);

      if (data.id) {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, [isLoggedIn]);
  return (
    <Router>
      {/* <CartProvider>
        <ProductsProvider> */}
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path="/login">
              <LoginForm setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path="/cart">
              <Cart setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path="/products/:productId">
              <ProductDetails />
            </Route>
            <Route path="/products">
              <AllProducts />
            </Route>
            <Route path="/:categoryName/products">
              <CategoryProducts />
            </Route>
            
          </Switch>
        </div>
      </div>
      {/* </ProductsProvider>
      </CartProvider> */}
    </Router>
  );
};

export default App;
