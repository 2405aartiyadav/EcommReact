import React, { useState } from "react";
import {ChevronDownIcon} from '@heroicons/react/24/solid'

function SideBar() {
  const [categories, setCategories] = useState([
    { name: "Lorem ipsum", count: 3 },
    { name: "Lorem ipsum", count: 3 },
    { name: "Lorem ipsum", count: 3 },
    { name: "Lorem ipsum", count: 3 },
    { name: "Lorem ipsum", count: 3 },
  ]);

  // const[priceRange,setPriceRange]=useState([{'100'}])
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="w-52 h-72 border-2 border-gray-800 p-3">
        <p className="font-bold text-sm  border-black border-l-4 p-2">
          Categories
        </p>
        <ul className="category-list">
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <div
                  className="flex category-item"
                >
                  <span>{`${category.name} (${category.count})`}</span>
                  <span
                      className="cursor-pointer pl-10"
                      onClick={(index) => {
                        setToggle(!toggle);
                      }}
                    >
                      {toggle ? "" :<ChevronDownIcon className="size-4"/>}
                    </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-52 h-72 border-2 border-gray-800 p-3 mt-10">
        <p className="font-bold text-sm  border-black border-l-4 p-2">
          Price Range
        </p>
      </div>
    </div>
  );
}

export default SideBar;
