import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import AddToCartButton from "./AddToCartButton";

const CategoryProducts = (categoryName, setCategoryName) => {
  const params = useParams();
  const history = useHistory()
  const [catProducts, setCatProducts] = useState([]);

    console.log(params.categoryName);

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

      console.log("this is the data", data);
      setCatProducts(data);
    };
    fetchProducts();
  }, [params.categoryName]);

  return (
    <>
      <h1>Products</h1>
      <div className="product-container">
        {catProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
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

export default CategoryProducts;
