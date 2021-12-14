import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { ProductsContext } from "./ProductsProvider";

const AddToCartButton = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const { products } = useContext(ProductsContext);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const userId = user.id;

  const handleClick = async (event) => {
    event.preventDefault();

    console.log(productId);

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
    console.log(data);
  };

  return (
    <>
      <button onClick={handleClick}>Add to Cart</button>
    </>
  );
};

export default AddToCartButton;
