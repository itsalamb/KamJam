import React, { useState } from "react";

const AddToCartButton = () => {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleClick = async (event) => {
    event.preventDefault();

    console.log(productId);

    const response = await fetch(
      `
        /api/cart
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
