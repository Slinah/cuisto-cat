import React, { useState } from "react";
import "../styles/inputFinder.css";
import filterSvg from "../images/filter.svg";

function InputFinder({ setSearchValue }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchValue(e.target.value); // Mettez à jour la valeur de recherche dans le composant parent
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valeur de recherche : ", inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} id="search-input">
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="search"
        placeholder="Recherchez vos recettes..."
        required
      />
      <img className="input-filter" src={filterSvg} alt="" />
    </form>
  );
}

export default InputFinder;
