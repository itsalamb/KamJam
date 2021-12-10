// to do: 
// delete from cart, 
// increase quantity,
// decrease quantity,
// link to checkout component

import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "./CartProvider";

const Cart = ({ cartId }) => {
  const [userId, setUserId] = useState([]);
  const [productId, setProductId] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const {cart} = useContext(CartContext);

  const removeFromCart = async (event) => {
    event.removeFromCart();
    const TOKEN = window.localStorage.getItem("token");

    const response = await delete(
        `/api/cart`,
      {
        method: "DELETE",
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
    console.log(cart);
  };

  const cartItem = [
    CartContext.productId
]
console.log(cartItem);

  return( 
    <div>
      {cartItem ? cartItem : <span>Cart is empty</span>}
    </div>
  );
};
export default Cart;
