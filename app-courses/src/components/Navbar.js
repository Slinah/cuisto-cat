import usersData from "../data/users.json";
import "../styles/navigation.css";
import Weather from "./Weather";

function Navbar() {
  const premierUtilisateur = usersData.utilisateurs[0];
  return (
    <div className="navbar">
      <div className="user-profil">
        <div className="user-name">
          <p>Good Morning</p>
          <h1>{premierUtilisateur.nom}</h1>
        </div>
        <p>{premierUtilisateur.ville}</p>
      </div>
      <img className="img-profil" src={premierUtilisateur.profil} alt="" />
    </div>
  );
}

export default Navbar;
