import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import Products from "./Products";

const CategoryProducts = (categoryName, setCategoryName) => {
  const params = useParams();
  const history = useHistory()
  const [catProducts, setCatProducts] = useState([]);

    console.log('params', params);

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
    <Products title={params.categoryName} products={catProducts} />
  );
};

export default CategoryProducts;
