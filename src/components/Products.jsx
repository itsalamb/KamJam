// import AddToCartButton from "./AddToCartButton";

const Products = ({ title, products }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <img className="product-image" src={product.imageurl} />
            <p className="price">$ {product.price}</p>
            <span>
              {/* <AddToCartButton /> */}
              <button
                type="button"
                className="details-button"
                onClick={() => {
                  history.push(`/products/${product.id}`);
                }}
              >
                See Details
              </button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
