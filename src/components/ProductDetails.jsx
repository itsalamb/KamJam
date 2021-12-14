import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddToCartButton from "./AddToCartButton";

const ProductDetails = ({}) => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const resp = await fetch(`/api/products/${params.productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      console.log("this is the data", data);
      setProduct(data.product);
    };
    fetchProduct();
  }, []);

  console.log("product", product);
  return (
    <>
      <h1>Product</h1>
      <div className="single-product-container">
        
      {product.length > 0 ? product.map((product) => (
          <div className="single-product-details-card" key={product.id}>
            <h3 className="single-product-name">{product.name}</h3>
            <h4 className="single-product-description">{product.description}</h4>
            <img className="single-product-image" src={product.imageurl} />
            <p className="single-price">$ {product.price}</p>
            <AddToCartButton />
          </div>
        )): 
        <h2>Product Cannot Be Found</h2>}
        </div>
      </>
  )
}

export default ProductDetails;
