import React from "react";
import SearchInput from "../images/search.svg";

function SearchBar() {
  return (
    <div className="flex flex-row relative w-full items-center justify-center">
      <input
        className="w-11/12 py-5 px-8 rounded-xl bg-[#252830]"
        type="search"
        placeholder="Find your dishes"
        required
      />
      <img className="absolute right-6" src={SearchInput} alt="" />
    </div>
  );
}

export default SearchBar;
