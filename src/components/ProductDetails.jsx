import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddToCartButton from "./AddToCartButton";

const ProductDetails = ({ }) => {
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
      <div className="single-product-container">
        {product.length > 0 ? product.map((product) => (
          <div className="single-product-details-card" key={product.id}>
            <h1 className="single-product-name">{product.name}</h1>
            <h2 className="single-product-description">{product.description}</h2>
            <img className="single-product-image" src={product.imageurl} />
            <div className="price-cart-box">
              <p className="single-price">$ {product.price}</p>
              <AddToCartButton />
            </div>
          </div>
        )) :
          <h2>Product Cannot Be Found</h2>}
      </div>
    </>
  )
}

export default ProductDetails;
