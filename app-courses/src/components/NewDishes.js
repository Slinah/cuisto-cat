import React, { useEffect, useState } from "react";
import ArrowCategories from "../images/arrowCategories.svg";
import recettesData from "../data/recettes.json";
import "../styles/dishes-ctn.css";
import TimeIcon from "../imagesplats/time.svg";
import InputFinder from "../components/inputFinder";

function NewDishes() {
  const [dataRecette, setDataRecette] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // État pour stocker la valeur de recherche

  useEffect(() => {
    setDataRecette(recettesData.recettes);
  }, []);

  // Fonction de filtrage
  const filterRecipes = () => {
    return dataRecette.filter((recette) =>
      recette.nom.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <div className="dishes-ctn">
      <div className="categories-ctn">
        <h3>Dishes</h3>
      </div>
      <InputFinder setSearchValue={setSearchValue} />
      {/* Passez setSearchValue en tant que prop */}
      <div className="data-ctn">
        {filterRecipes().map((recette, index) => (
          <div className="data-card" key={index}>
            <img className="img-card" src={recette.photo} alt="" />
            <h4 className="card-title">{recette.nom}</h4>
            <div className="card-time">
              <img className="time-icon" src={TimeIcon} alt="" />
              <p>{recette.time}</p>
            </div>
            <button className="card-btn">Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewDishes;
