import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { ProductsContext } from "./ProductsProvider";
import { CartContext } from "./CartProvider";
import { useParams } from "react-router";

const AddToCartButton = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const { products } = useContext(ProductsContext);
  const { cart } = useContext(CartContext);
  const params = useParams();
  const productId = params.productId;
  const [quantity, setQuantity] = useState(1);
  const userId = user.id;
  console.log("USER IS HERE:", userId);
  console.log("PRODUCT HERE:", productId);
  console.log("CART HERE:", cart.quantity);

  const handleClick = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `
        /api/cart/userid/${userId}
        `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          productId,
          quantity,
        }),
      }
    );

    const data = await response.json();
  };

  return (
    <>
      <button className="add-to-cart-button" onClick={handleClick}>
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartButton;
