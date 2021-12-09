// cart, edit cart, remove from cart, checkout

import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "./CartProvider";

const Cart = ({ cartId }) => {
  const [userId, setUserId] = useState([]);
  const [productId, setProductId] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const {cart} = useContext(CartContext);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const TOKEN = window.localStorage.getItem("token");

    const response = await fetch(
        `/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      }
    );
    const data = await response.json();
    console.log(productId);
    history.push("/products");
  };

   return <h1>this will be your shopping cart</h1>;

  
};
export default Cart;
