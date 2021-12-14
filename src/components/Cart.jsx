// to do:
// delete from cart,
// increase quantity,
// decrease quantity,
// link to checkout component

import { response } from "msw";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "./AuthProvider";

const Cart = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const userId = user.id;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const resp = await fetch(`/api/cart/userid/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await resp.json();
      const currentCart = Array.from(data.currentCart);
      setCart(currentCart);
    };
    fetchCart(userId);
  }, [userId]);

  return (
    <>
      <h1>Here is your cart good sir</h1>
      {cart.map((myCart) => (
        <div className="mycart" key={myCart.id}>
          <h3 className="cart-info">{myCart.name}</h3>
          <img className="cart-image" src={myCart.imageurl} />
          <p className="cart-info">$ {myCart.price}</p>
          <p cart-info>Quantity: {myCart.quantity}</p>
          <br />
        </div>
      ))}
    </>
  );
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
