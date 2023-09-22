import Categories from "./components/Categories";
import Dishes from "./components/Dishes";
import InputSearch from "./components/InputSearch";
import ProfilComponent from "./components/ProfilComponent";

function App() {
  return (
    <div className="app flex flex-col gap-4">
      <ProfilComponent />
      <InputSearch />
      <Categories />
      <Dishes />
    </div>
  );
}

export default App;
