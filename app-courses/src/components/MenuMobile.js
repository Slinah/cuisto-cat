import React from "react";
import Cloche from "../images/mobilemenu/cloche.svg";
import Category from "../images/mobilemenu/category.svg";
import Favoris from "../images/mobilemenu/favoris.svg";
import Panier from "../images/mobilemenu/panier.svg";

function MenuMobile() {
  return (
    <div className="fixed w-full left-0 bottom-0 ">
      <div className="bg-opacity-50 backdrop-blur-md rounded-xl py-8 flex justify-around">
        <img src={Cloche} alt="Dishes" className="blur-none" />
        <img src={Category} alt="Categories" className="blur-none" />
        <img src={Favoris} alt="Liked or favoris" className="blur-none" />
        <img src={Panier} alt="Shop" className="blur-none" />
      </div>
    </div>
  );
}

export default MenuMobile;
