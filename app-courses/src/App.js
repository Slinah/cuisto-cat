import Categorie from "./components/Categorie";
import Dishes from "./components/Dishes";
import MenuMobile from "./components/MenuMobile";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App flex flex-col gap-7 px-3 py-5 pb-32 max-w-[375px] relative">
      <Navbar />
      <SearchBar />
      <Categorie />
      <Dishes />
      <MenuMobile />
    </div>
  );
}

export default App;
