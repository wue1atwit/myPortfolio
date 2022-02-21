import React from "react";

const SearchBar = ({ getSearch }) => {
  return (
    <input
      type="text"
      name="search_bar"
      id="search_bar"
      placeholder="Search"
      onChange={(e) => getSearch(e.target.value)}
    />
  );
};

export default SearchBar;
