import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ filterBySearch }) => {
  return (
    <form className="position-relative custom-text-color">
      <BiSearchAlt2 className="fs-2 ms-4 position-absolute search-icon" />
      <input
        onChange={(event) => {
          filterBySearch(event.target.value.toLowerCase());
        }}
        className=" searchinput py-3  pe-2 border-0 shadow rounded-2 bg-elements custom-text-color"
        type="text"
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Search;
