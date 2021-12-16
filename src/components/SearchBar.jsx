import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const SearchBar = ({ setIsLoading }) => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const query = new URLSearchParams({
    term,
  });

  return (
    <form
      className="search"
      id="search"
      onSubmit={async (event) => {
        event.preventDefault();
        history.push(`/search?${query.toString()}`);
      }}
    >
      <fieldset>
        <label className="search-label" htmlFor="keywords">
          Find your sound:{" "}
        </label>
        <input
          className="searchbar"
          id="keywords"
          type="text"
          placeholder="Search KamJam"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </fieldset>
      <button
        className="navlinks"
        onClick={() => {
          history.push(`/search?term=${term}`);
        }}
      >
        SEARCH
      </button>
    </form>
  );
};

export default SearchBar;
