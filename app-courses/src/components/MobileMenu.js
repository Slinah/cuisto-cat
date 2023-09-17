import React from "react";
import ClocheIcon from "../images/cloche.svg";
import CategoriesIcon from "../images/categories.svg";
import HeartIcon from "../images/heart.svg";
import PanierIcon from "../images/panier.svg";
import "../styles/mobile-menu.css";

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <img src={ClocheIcon} alt="" />
      <img src={CategoriesIcon} alt="" />
      <img src={HeartIcon} alt="" />
      <img src={PanierIcon} alt="" />
    </div>
  );
}

export default MobileMenu;
