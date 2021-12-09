import React from "react";
import { useState } from "react";

const SearchBar = ({ setIsLoading }) => {
  const [queryString, setQueryString] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  return (
    <form
      className="search"
      id="search"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
          const results = await fetchQueryResults({});
          setSearchResults(results);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <fieldset>
        <label htmlFor="keywords">Find your sound: </label>
        <input
          className="searchbar"
          id="keywords"
          type="text"
          placeholder="Search KamJam"
          value={queryString}
          onChange={(e) => setQueryString(e.target.value)}
        />
      </fieldset>
      <button className="search-button">SEARCH</button>
    </form>
  );
};

export default SearchBar;
