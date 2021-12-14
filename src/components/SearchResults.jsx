import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Products from "./Products";

const SearchResults = () => {
    const location = useLocation()
    const history = useHistory();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await fetch(`/api/search${location.search}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await results.json()
            setSearchResults(data.products)
        }
        fetchProducts()
    }, [location.search])

    return (
        <Products title='Search Results' products={searchResults}  />
    )

}

export default SearchResults