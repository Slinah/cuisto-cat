import React from "react";
import usersData from "../data/users.json";

function Navbar() {
  // Accédez à un utilisateur spécifique (par exemple, le premier utilisateur) en utilisant l'index 0
  const firstUser = usersData.users[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <p className="text-sm text-[#686F82]">Good morning</p>
          <h1 className="text-xl font-semibold text-white">{firstUser.nom}</h1>
        </div>
        <img
          className="w-11"
          src={firstUser.profilpicture}
          alt="This is the profil picture of your account"
        />
      </div>
    </div>
  );
}

export default Navbar;
