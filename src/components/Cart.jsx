// to do:
// delete from cart,
// increase quantity,
// decrease quantity,
// link to checkout component

import { response } from "msw";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { getCart } from "../api/cart";
import { CartContext } from "./CartProvider";

const Cart = ({ userId, isLoggedIn }) => {
  useEffect(() => {
    const getCart = async () => {
      const resp = await fetch(`api/cart/userid/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await resp.json();
      console.log("DATAAAA BITSH:", data);
    };
    getCart(userId);
    [userId];
  });

  return <h1>Here is your cart good sir</h1>;
};

export default Cart;

// const [userId, setUserId] = useState([]);
//   const [productId, setProductId] = useState([]);
//   const [quantity, setQuantity] = useState([]);

//   const {cart} = useContext(CartContext);

//   const removeFromCart = async (event) => {
//     event.removeFromCart();
//     const TOKEN = window.localStorage.getItem("token");

//     const response = await delete(
//         `/api/cart`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${TOKEN}`,
//         },
//         body: JSON.stringify({
//           productId,
//           quantity,
//         }),
//       }
//     );
//     const data = await response.json();
//     console.log(cart);
//   };

//   const cartItem = [
//     CartContext.productId
// ]
// console.log(cartItem);
