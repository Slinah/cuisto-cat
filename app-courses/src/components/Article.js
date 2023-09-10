import React, { Component } from "react";
import database from "../data/database.json";
import TimeIcon from "../data/icons/star-icon.png";
import PanierShop from "../data/icons/panier-shop.png";

class Article extends Component {
  render() {
    const recettes = database.recettes;

    return (
      <div className="flex flex-col gap-10 p-10 relative">
        {recettes.map((recette, index) => (
          <div
            key={index}
            className="relative py-36 rounded-xl"
            style={{
              backgroundImage: `url(${recette.backgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-black absolute rounded-xl"></div>
            <div
              className="flex flex-row items-center w-full bg-black bg-opacity-50 backdrop-blur-md p-4 absolute bottom-0 rounded-b-xl"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <div className="w-full text-center">
                <h1 className="text-white text-xl font-bold">
                  {recette.titre}
                </h1>
              </div>
            </div>
            <div className="flex flex-row absolute top-0 items-center w-full">
              <div
                className="flex flex-row justify-between items-center w-full bg-black bg-opacity-50 backdrop-blur-md px-4 py-1 rounded-t-xl"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div className="flex flex-row items-center">
                  <img className="w-10" src={TimeIcon} alt="" />
                  <p className="text-white">{recette.temps_preparation}</p>
                </div>
                <div>
                  <button>
                    <img
                      className="w-7 hover:animate-pulse"
                      src={PanierShop}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Article;
