import React, { useEffect, useState } from "react";
import DataRecette from "../data/recettes.json";

function Dishes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataRecette.recettes);
  }, []);

  console.log(data);

  return (
    <div className="flex flex-row justify-center flex-wrap w-full gap-4">
      {data.map((recette, index) => (
        <div className="w-[44%] border p-2 text-center rounded-xl" key={index}>
          <img src={recette.photo} alt="" />
          <h4>{recette.nom}</h4>
          <p>{recette.time}</p>
          <button>Ajouter au panier</button>
        </div>
      ))}
    </div>
  );
}

export default Dishes;
