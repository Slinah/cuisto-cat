import SearchLine from "../images/navbarimg/search-line.svg";
import AddArticle from "../images/navbarimg/add-article.svg";
import PanierShop from "../images/navbarimg/panier-navbar.png";

function Navbar() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h1 id="website-title" className="text-3xl tracking-wide">
          M<span className="text-white">e</span>s cours
          <span className="text-white">e</span>s
        </h1>
        <div className="flex flex-row gap-2">
          <div className="border p-1 bg-white rounded-full hover:bg-transparent">
            <img className="w-6" src={SearchLine} alt="" />
          </div>
          <div className="border p-1 bg-white rounded-full hover:bg-transparent">
            <img className="w-6" src={AddArticle} alt="" />
          </div>
          <div className="border p-1 bg-white rounded-full hover:bg-transparent">
            <img className="w-6" src={PanierShop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
