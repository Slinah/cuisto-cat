import ArrowAll from "../images/arrow-all.svg";
import Burger from "../images/burger.svg";
import Pizza from "../images/pizza.svg";
import Sandwich from "../images/sandwich.svg";

function Categorie() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-white text-lg">Categories</h3>
        <div className="flex flex-row gap-2">
          <p className="text-white">All</p>
          <img src={ArrowAll} alt="" />
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-center">
        <button className="shadow-xl">
          <div className="flex flex-row gap-2 items-center p-3 rounded-xl bg-[#353842] hover:text-black hover:bg-white text-[#8E94A4]">
            <img className="w-6" src={Burger} alt="" />
            <p>Burger</p>
          </div>
        </button>
        <button className="shadow-xl">
          <div className="flex flex-row gap-2 items-center p-3 rounded-xl bg-[#353842] text-[#8E94A4] hover:text-black hover:bg-white ">
            <img className="w-6" src={Pizza} alt="" />
            <p>Pizza</p>
          </div>
        </button>
        <button className="shadow-xl ">
          <div className="flex flex-row gap-2 items-center p-3 rounded-xl bg-[#353842] hover:bg-white text-[#8E94A4] hover:text-black">
            <img src={Sandwich} alt="" />
            <p>Sandwich</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Categorie;
