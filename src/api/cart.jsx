export const getCart = async (token) => {
  try {
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};

    const response = await fetch("/api/cart", {
      headers,
    });

    const { cart } = await response.json();
    return cart;
  } catch (error) {
    console.error(error);
  }
};
