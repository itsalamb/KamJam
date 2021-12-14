import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
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

  const contextValue = {
    cart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
