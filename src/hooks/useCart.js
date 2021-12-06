import { useContext } from "react";
import { ProductsContext } from "../components/ProductsProvider";

const useProducts = () => {
  return useContext(ProductsContext);
};

export default useProducts;
