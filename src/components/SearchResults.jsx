import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Products from "./Products";

const SearchResults = () => {
    const location = useLocation()
    const history = useHistory();
    const [searchResults, setSearchResults] = useState([]);
    console.log('location', location)

    useEffect(() => {
        const fetchProducts = async () => {
            const results = await fetch(`/api/search${location.search}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await results.json()
            console.log('data', data)
            setSearchResults(data.products)
        }
        fetchProducts()
    }, [])

    return (
        <Products title='Search Results' products={searchResults}  />
    )

}

export default SearchResults