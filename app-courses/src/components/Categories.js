import React, { useEffect, useState } from "react";
import ArrowCategories from "../images/arrowCategories.svg";
import "../styles/categories.css";

// Importez votre structure JSON des catégories
import CategoriesData from "../data/categories.json";

function Categories() {
  const [searchCategories, setSearchCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);

  useEffect(() => {
    setSearchCategories(CategoriesData.categories.slice(0, 3));
  }, []);

  const toggleCategories = () => {
    if (showAllCategories) {
      setSearchCategories(CategoriesData.categories.slice(0, 3));
    } else {
      setSearchCategories(CategoriesData.categories);
    }
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="categories-container">
      <div className="categories-ctn">
        <h3>Categories</h3>
        <div onClick={toggleCategories} className="categories-sub-ctn">
          <p className="paragraph-categories">
            {showAllCategories ? "All" : "All"}
          </p>
          <img src={ArrowCategories} alt="" />
        </div>
      </div>
      <div className="categories-btn-ctn">
        <div className="ctn-map">
          {searchCategories.map((category, index) => (
            <button className="categories-btn" key={index}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
