import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "./AuthProvider";
import { ProductsContext } from "./ProductsProvider";
import { CartContext } from "./CartProvider";
import { useParams } from "react-router";

const AddToCartButton = () => {
  const history = useHistory();
  const { user, token } = useContext(AuthContext);
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
        /api/cart
        `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          productId,
          quantity,
        }),
      }
    );

    const data = await response.json();
    history.push("/cart");
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
