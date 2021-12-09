import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (refresh) {
      setIsLoading(true);
      (async () => {
        // const products = await getAllProducts();
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
