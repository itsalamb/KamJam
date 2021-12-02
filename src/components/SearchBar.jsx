import { useState } from "react";

const SearchBar = () => {
  return (
    <form>
      <label>
        <span>Search KamJam:</span>
      </label>
      <input
        type="text"
        placeholder="this will (hopefully) search for products...one day..."
        size="50"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
