import AddToCartButton from "./AddToCartButton";
import { useHistory } from "react-router";

const Products = ({ title, products }) => {
    const history = useHistory();

    return (
        <>
            <h1>{title}</h1>
            <div className="product-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <h3 className="product-name">{product.name}</h3>
                        <img className="product-image" src={product.imageurl} />
                        <p className="price">$ {product.price}</p>
                        <div className="product-buttons">
                            <AddToCartButton />
                            <button type="button" className="details-button" onClick={() => { history.push(`/products/${product.id}`) }}>See Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products