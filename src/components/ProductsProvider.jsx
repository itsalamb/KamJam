import { createContext, useState, useEffect } from "react";
import { getAllProducts } from "../express/db/products";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (refresh) {
      (async () => {
        const products = await getAllProducts();
        setProducts(products);
        setRefresh(false);
        setIsLoading(false);
      })();
    }
  }, [refresh]);

  const contextValue = {
    products,
    refreshProducts() {
      setRefresh(true);
    },
    isLoading,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
