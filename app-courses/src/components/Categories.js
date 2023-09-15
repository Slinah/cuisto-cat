import React from "react";
import ArrowCategories from "../images/arrowCategories.svg";
import "../styles/categories.css";
import BurgerIcon from "../images/burger.svg";
import SandwichIcon from "../images/sandwich.svg";

function Categories() {
  return (
    <div className="categories-container">
      <div className="categories-ctn">
        <h3>Categories</h3>
        <div className="categories-sub-ctn">
          <p className="paragraph-categories">All</p>
          <img src={ArrowCategories} alt="" />
        </div>
      </div>
      <div className="categories-btn-ctn">
        <button className="categories-btn">
          <img src={BurgerIcon} alt="" />
          <p>Burger</p>
        </button>
        <button className="categories-btn">
          <img src={BurgerIcon} alt="" />
          <p>Pizza</p>
        </button>
        <button className="categories-btn">
          <img src={SandwichIcon} alt="" />
          <p>Sandwich</p>
        </button>
      </div>
    </div>
  );
}

export default Categories;
