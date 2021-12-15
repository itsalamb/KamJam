import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Products from "./Products";
import NotFound from "./NotFound";

const SearchResults = () => {
    const location = useLocation()
    const history = useHistory();
    const [searchResults, setSearchResults] = useState([]);
    console.log(location)

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

    console.log(searchResults)

    return (
        <>
            {searchResults.length === 0 ?
                <NotFound title="No Search Results" description={"Try searching a different word/phrase"} />
                : <Products title='Search Results' products={searchResults} />
            }
        </>
    )

}

export default SearchResults