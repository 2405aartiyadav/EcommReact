import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import PriceFilter from "./PriceFilter";

function SideBar({selectedCategory,setSelectedCategory,priceRange,setPriceRange}) {
  
  // const[priceRange,setPriceRange]=useState([{'100'}])
 
  const handleCategoryChange=(e)=>{

    setSelectedCategory(e.target.value);
    console.log(`selectedcat=${selectedCategory}`);
    
   
  }
 const handlePriceChange=(e)=>{
  const value=e.target.value;
  setPriceRange([priceRange[0],Number(value)]);
 }

  return (
    <div>
      <div className="w-52 border rounded-lg p-4 bg-white shadow-lg">
        <h2 className="text-lg font-bold border-l-4 border-indigo-500 pl-2 mb-4">
          Categories
        </h2>
        <ul className="space-y-3">
            <li  className="flex justify-between items-center">
             <select value={selectedCategory} name="category" id="" onChange={handleCategoryChange}>
              <option value="All">All</option>
              <option value="Laptop">Laptop</option>
              <option value="Earphone">Earphone</option>
              <option value="Headphone">Headphone</option>
              <option value="Mouse">Mouse</option>
              <option value="Keyboard">Electronics</option>
              <option value="Keyboard">Keyboard</option>
             </select>
             
            </li>
        </ul>
      </div>

      {/* Price range */}
      <div className="mt-10 border rounded-lg p-4 bg-white shadow-lg">
        <h2 className="text-lg font-bold border-l-4 border-blue-500 pl-2 mb-4">
          Price Range
        </h2>
        <div className="flex justify-between items-center">
          <input
            type="range"
            min="200"
            max="100000"
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
            value={priceRange[1]}
            onChange={handlePriceChange}
         />
        </div>
        <div className="flex justify-between mt-4 text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
