export const getAllProducts = async (name, description, condition, price) => {
  const response = await fetch("api/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { name, description, condition, price } = await response.json();

  return products;
};
