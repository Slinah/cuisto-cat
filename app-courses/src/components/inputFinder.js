import React from "react";
import "../styles/inputFinder.css";
import filterSvg from "../images/filter.svg";

function InputFinder() {
  return (
    <div id="search-input">
      <input type="search" placeholder="Recherchez vos recettes..." required />
      <img className="input-filter" src={filterSvg} alt="" />
    </div>
  );
}

export default InputFinder;
