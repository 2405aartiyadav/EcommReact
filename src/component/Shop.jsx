import React from "react";
import ProductCard from "./Product/ProductCard";
import { MagnifyingGlassCircleIcon,PlusCircleIcon } from "@heroicons/react/24/solid";

import SideBar from "./sidebar/SideBar";
function Shop() {
  return (
    <div className="mx-5 my-10 flex">
      <div className="m-5">
        <SideBar />
      </div>
      <div className="mx-10">
        <p className="font-bold text-4xl text-gray-950 opacity-85">
          {" "}
          Our Collections Of Products
        </p>

        <div className="mt-5 flex items-center border border-gray-300 rounded-full w-full">
          <input
            type="text"
            placeholder="Seacrch an item"
            className=" outline-none w-full border-none focus:border-none ml-2 text-gray-500"
          />
          <MagnifyingGlassCircleIcon className="size-10" />
        </div>
        <div className="mt-5">
          <p className="font-bold text-sm">Showing 1-12 of 24 item(s)</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            ducimus, in praesentium perspiciatis veniam rerum?
          </p>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-6">
          <ProductCard product={{ title: "item", discount:"30",price:"200"}} />
          <ProductCard product={{ title: "item", discount:"30",price:"200"}} />
          <ProductCard product={{ title: "item", discount:"30",price:"200"}} />
          <ProductCard product={{ title: "item", discount:"30",price:"200"}} />
          <ProductCard product={{ title: "item", discount:"30",price:"200"}} />
          <ProductCard product={{ title: "item", discount:"30",price:"200"}} />
          <ProductCard product={{ title: "item", discount:"30",price:"200"}} />



          
        </div>
      </div>
    </div>
  );
}

export default Shop;
