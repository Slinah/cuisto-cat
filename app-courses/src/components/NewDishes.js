import React, { useEffect, useState } from "react";
import ArrowCategories from "../images/arrowCategories.svg";
import recettesData from "../data/recettes.json";
import "../styles/dishes-ctn.css";
import TimeIcon from "../imagesplats/time.svg";

function NewDishes() {
  const [dataRecette, setDataRecette] = useState([]);

  useEffect(() => {
    setDataRecette(recettesData.recettes);
  }, []);

  return (
    <div className="dishes-ctn">
      <div className="categories-ctn">
        <h3>Dishes</h3>
        <div className="categories-sub-ctn">
          <p className="paragraph-categories">All</p>
          <img src={ArrowCategories} alt="" />
        </div>
      </div>
      <div className="data-ctn">
        {dataRecette.map((recette, index) => (
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
