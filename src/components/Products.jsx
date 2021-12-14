import AddToCartButton from "./AddToCartButton";
import { useHistory } from "react-router";

const Products = ({ title, products }) => {
    const history = useHistory();

    return (
        <>
            <h1 className="product-title">{title}</h1>
            <div className="product-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id} onClick={() => { history.push(`/products/${product.id}`) }}>
                        <h3 className="product-name">{product.name}</h3>
                        <img className="product-image" src={product.imageurl} />
                        <div className="product-buttons">
                            <button type="button" className="details-button" onClick={() => { history.push(`/products/${product.id}`) }}>See Details</button>
                            <AddToCartButton />
                            <p className="price">$ {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Products
