import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import NewDishes from "./components/NewDishes";
import InputFinder from "./components/inputFinder";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <InputFinder />
      <Categories />
      <NewDishes />
    </div>
  );
}

export default App;
