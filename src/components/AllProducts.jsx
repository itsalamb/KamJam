import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Products from "./Products";

const AllProducts = ({}) => {
  const [products, setProducts] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch("/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      const newdata = Array.from(data.products);
      console.log("this is the data", newdata);
      setProducts(newdata);
    };
    fetchProducts();
  }, []);

  return (
    <Products title='All Products' products={products} />
  );
};

export default AllProducts;
