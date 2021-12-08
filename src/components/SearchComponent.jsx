import React from 'react'

export default function SearchComponent() {
    return (
        <form
            id="search"
            onSubmit={async (event) => {
                event.preventDefault();
                setIsLoading(true);
                try {
                    const results = await fetchQueryResults({
                    });
                    setSearchResults(results);
                } catch (error) {
                    console.error(error);
                } finally {
                    setIsLoading(false)
                }
            }}>
        </form>
    )
}

export default SearchComponent;
