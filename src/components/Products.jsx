import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";

const AllProducts = ({}) => {
  const [products, setProducts] = useState([]);

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
    <>
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <img className="product-image" src={product.imageurl} />
            <p className="price">$ {product.price}</p>
            <AddToCartButton />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
