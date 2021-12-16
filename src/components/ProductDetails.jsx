import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import AddToCartButton from "./AddToCartButton";
import { ProductsContext } from "./ProductsProvider";
import NotFound from "./NotFound";

const ProductDetails = ({ }) => {
  const [product, setProduct] = useState([]);
  const [productNotFound, setProductNotFound] = useState(false);

  const params = useParams();
  const { products } = useContext(ProductsContext);
  const productId = params.productId;

  useEffect(() => {
    const fetchProduct = async () => {
      const resp = await fetch(`/api/products/${params.productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { product } = await resp.json();
      if (!product.length) {
        setProductNotFound(true);
      } else {
        setProduct(product);
      }
    };
    fetchProduct();
  }, []);

  if (productNotFound) {
    return (
      <NotFound
        title="No Product Found"
        description="This Product Does Not Exist"
      />
    );
  }

  return (
    <>
      <div className="single-product-container">
        {product.map((product) => (
          <div className="single-product-details-card" key={product.id}>
            <h1 className="single-product-name">{product.name}</h1>
            <div className="img-description">
              <img className="single-product-image" src={product.imageurl} />
              <h2 className="single-product-description">
                Description: {product.description}
              </h2>
            </div>
            <div className="price-cart-box">
              <p className="product-condition">
                Condition: {product.condition}
              </p>
              <p className="single-price">$ {product.price}</p>
              <AddToCartButton />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
