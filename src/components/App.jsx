import React, { useState, useEffect } from "react";
import LoginForm from "./Login";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Register from "./Register";
import Cart from "./Cart";
import AllProducts from "./AllProducts";
import CategoryProducts from "./CategoryProducts";
import ProductDetails from "./ProductDetails";
import ProductsProvider from "./ProductsProvider";
import CartProvider from "./CartProvider";
import ThankYou from "./ThankYou";
import NotFound from "./NotFound";
import AuthProvider from "./AuthProvider";
import SearchResults from "./SearchResults";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const TOKEN = window.localStorage.getItem("token");
    const checkAuth = async () => {
      const response = await fetch(`api/users/authenticate`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const data = await response.json();
      console.log("AUTH DATA:", data);

      if (data.success === true) {
        setIsLoggedIn(true);
        setUser(data.user.name);
        setUserId(data.user.id);
        console.log("IDDDDDDD:", data.user.id);
      }
    };
    checkAuth();
  }, [isLoggedIn]);
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <ProductsProvider>
            <div className="App">
              <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
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
                  <Route path="/cart/userid/:userid">
                    <Cart
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      userId={userId}
                    />
                  </Route>
                  <Route path="/products/:productId">
                    <ProductDetails userId={userId} />
                  </Route>
                  <Route path="/products">
                    <AllProducts />
                  </Route>
                  <Route path="/:categoryName/products">
                    <CategoryProducts userId={userId} s />
                  </Route>
                  <Route path="/search">
                    <SearchResults />
                  </Route>
                  <Route path="/thankyou">
                    <ThankYou />
                  </Route>
                  <Route path="*">
                    <NotFound
                      title="Page not found"
                      description="Whoops! Looks like we jammed a little too hard."
                    />
                  </Route>
                </Switch>
              </div>
            </div>
          </ProductsProvider>
        </CartProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
