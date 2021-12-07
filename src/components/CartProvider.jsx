import { createContext, useState, useEffect } from "react";
import { getCart } from "../api/cart";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (refresh) {
      (async () => {
        const cart = await getCart();
        setCart(cart);
        setRefresh(false);
        setIsLoading(false);
      })();
    }
  }, [refresh]);

  const contextValue = {
    cart,
    refreshCart() {
      setRefresh(true);
    },
    isLoading,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
