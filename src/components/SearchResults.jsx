import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Products from "./Products";
import NotFound from "./NotFound";

const SearchResults = () => {
    const location = useLocation()
    const history = useHistory();
    const [searchResults, setSearchResults] = useState([]);
    const [validSearch, setValidSearch] = useState(true)
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
        if (searchResults.length > 0) {
            setValidSearch(true)
        } else {
            setValidSearch(false)
        }console.log(searchResults ,validSearch)
    }, [location.search])



    

    return (
        <>
            {searchResults.length > 0  ?
                <Products title='Search Results' products={searchResults} />
                : <NotFound title="No Search Results" description={"Try searching a different word/phrase"} />
            }
        </>
    )

}

export default SearchResults