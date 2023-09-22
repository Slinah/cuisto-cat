import React from "react";

function InputSearch() {
  return (
    <div className="w-full">
      <input
        className=" border text-center bg-black w-full p-2 rounded-xl placeholder:text-white text-white"
        type="search"
        placeholder="Recherchez une recette..."
        required
      />
    </div>
  );
}

export default InputSearch;
