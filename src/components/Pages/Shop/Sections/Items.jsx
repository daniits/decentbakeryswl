import React, { useState } from "react";
import SvgIcon from "../../../../../public/images/Svgicon";
import GridProducts from "./Products/GridProducts";
import ListProduct from "./Products/ListProduct";

const Items = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [view, setView] = useState("grid")

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);  
  };

  const options = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest Arrivals",
    "Best Sellers",
  ];

  return (
    <div className="">
      <div className="flex sm:flex-col lg:flex-row sm:gap-5 items-center justify-between">
        {/* Product Found */}
        <div className="border-2 border-gray-300 rounded-full py-2 px-3">
          <p>
            <span className="text-pink">12</span> Product Found of{" "}
            <span className="text-pink">30</span>
          </p>
        </div>

        {/* Sort By and View Modes */}
        <div className="flex sm:flex-col lg:flex-row items-center gap-5">
          {/* Dropdown */}
          <div className="relative w-56 border-2 border-blue rounded-full">
            {/* <p>Sort by:</p> */}
            <button
              className="w-full  text-pink py-2 px-4 rounded-lg   focus:outline-none"
              onClick={handleToggle}
            >
              {selectedValue || "Select an option"}
            </button>

            {isOpen && (
              <ul className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-md border border-gray-200">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-800"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
 
          <div className="flex items-center gap-4"> 
            <div className={`flex items-center justify-center border-2 border-blue hover:border-pink rounded-full w-10 h-10 ${view === "grid" ? "border-pink" : "" } `}
             onClick={() => setView('grid')}
            >
              <SvgIcon iconName="grid" className="w-7 h-7" />
            </div>
            <div className={`flex items-center justify-center border-2 border-blue hover:border-pink rounded-full w-10 h-10 ${view === "list" ? "border-pink" : "" } `}
            onClick={() => setView('list')}>
              <SvgIcon iconName="list" className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {view === "grid" ? 
        (
            <GridProducts/>
        ) : view === "list" ? 
        (
            <ListProduct/>
        ) : "" }
      </div>
    </div>
  );
};

export default Items;
