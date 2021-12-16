import AddToCartButton from "./AddToCartButton";
import { useHistory } from "react-router";

const Products = ({ title, products }) => {
  const history = useHistory();

  return (
    <div className="product-page">
      <h1 className="product-title">{title}</h1>
      <div className="product-container">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <h3 className="product-name" onClick={() => {
              history.push(`/products/${product.id}`);
            }}>{product.name}</h3>
            <img className="product-image" onClick={() => {
              history.push(`/products/${product.id}`);
            }} src={product.imageurl} />
            <div className="product-buttons">
              <button
                type="button"
                className="details-button"
                onClick={() => {
                  history.push(`/products/${product.id}`);
                }}
              >
                See Details
              </button>
              <p className="price">$ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
