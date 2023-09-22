import React, { useEffect, useState } from "react";
import ArrowIcon from "../images/arrowCategories.svg";
import CategoriesData from "../data/categories.json";

function Categories() {
  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    setDataCategories(CategoriesData.categories);
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="text-lg font-semibold">Categories</h3>
        <div className="flex flex-row gap-2 items-center">
          <p>All</p>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-row gap-4 py-4">
          {dataCategories.map((cate, index) => (
            <div
              className="px-2 py-2 border rounded-lg bg-gray-500"
              key={index}
            >
              {cate.categorie}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
