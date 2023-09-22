import React, { useEffect, useState } from "react";
import DataUsers from "../data/users.json";

function ProfilComponent() {
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    // Utilisez setDataUser pour mettre à jour les données de l'utilisateur lorsque le composant est monté.
    setDataUser(DataUsers.utilisateurs[0]);
  }, []); // Assurez-vous de fournir un tableau vide de dépendances pour que useEffect s'exécute une seule fois lors du montage.

  return (
    <div>
      {dataUser && (
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="">Good Morning</h1>
            <p className="font-medium text-xl">{dataUser.nom}</p>
          </div>
          <img src={dataUser.profil} alt={`${dataUser.nom}`} />
        </div>
      )}
    </div>
  );
}

export default ProfilComponent;
