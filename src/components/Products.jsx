import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { useHistory } from "react-router";

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
    <>
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <img className="product-image" src={product.imageurl} />
            <p className="price">$ {product.price}</p>
            <span>
            <AddToCartButton />
            <button type="button" className="details-button" onClick={() => {history.push(`/products/${product.id}`)}}>See Details</button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
