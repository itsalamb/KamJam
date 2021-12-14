import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import Products from "./Products";

const CategoryProducts = (categoryName, setCategoryName) => {
  const params = useParams();
  const history = useHistory();
  const [catProducts, setCatProducts] = useState([]);

  console.log(params.categoryName);
  console.log("params", params);

  useEffect(() => {
    const fetchProducts = async () => {
      const resp = await fetch(
        `/api/categories/${params.categoryName}/products`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await resp.json();
      setCatProducts(data);
    };
    fetchProducts();
  }, [params.categoryName]);

  return (
    /* Double check this part */
    <>
      <h1>Products</h1>
      <div className="product-container">
        {catProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <img className="product-image" src={product.imageurl} />
            <p className="price">$ {product.price}</p>
            <span>
              <AddToCartButton />
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
    /* Do we need both the above and below? */
  );
  <Products title={params.categoryName} products={catProducts} />;
};

export default CategoryProducts;
