import React, { useEffect, useState } from "react";
import ArrowAll from "../images/arrow-all.svg";
import Etoile from "../images/etoile.svg";
import Time from "../images/time.svg";

// Importez votre base de données JSON ici
import data from "../data/plats.json";

function Dishes() {
  // Utilisez l'état pour stocker les données de la base de données
  const [plats, setPlats] = useState([]);

  useEffect(() => {
    // Mettez à jour l'état avec les données de la base de données lorsque le composant est monté
    setPlats(data.plats);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-white text-lg">Dishes</h3>
        <div className="flex flex-row gap-2">
          <p className="text-white">All</p>
          <img src={ArrowAll} alt="An arrow redirecting on every dishes" />
        </div>
      </div>
      <div className="grid-cols-2 grid gap-3">
        {plats.map((plat) => (
          <div
            className="flex flex-col gap-1 text-center pt-2 pb-12 rounded-xl bg-[#353842] shadow-xl relative"
            key={plat.id}
          >
            <div className="w-full flex flex-row justify-center">
              <img
                className="shadow-black w-36"
                src={plat.image}
                alt={plat.title}
              />
            </div>
            <h4 className="text-white font-semibold">{plat.title}</h4>
            <div className="flex flex-row gap-2 justify-between px-3">
              <div className="flex flex-row gap-1 justify-center w-full">
                <img src={Time} alt={plat.time} />
                <p className="text-[#686F82]">{plat.time}</p>
              </div>
            </div>
            <p className="text-[#686F82]">{plat.calories}</p>
            <button className="rounded-b-xl absolute bottom-0 w-full py-2 bg-[#474b58] text-white hover:text-white hover:bg-gradient-to-r from-[#55575e] to-[#3b3e49]">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;
