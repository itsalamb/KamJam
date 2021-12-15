import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user, token } = useContext(AuthContext);
  const userId = user.id;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const fetchCart = async () => {
      const resp = await fetch(`/api/cart/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await resp.json();
      console.log(data);
      setCart(data);
    };
    fetchCart(userId);
  }, [userId]);

  const contextValue = {
    cart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
