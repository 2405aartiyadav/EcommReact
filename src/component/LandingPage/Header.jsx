import React from "react";
import Cards from "../Product/ProductCard";

function Header() {
  return (
    <>
      <header className="bg-slate-400 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, ut?
        </h1>
        <p className="max-w-xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quis animi atque.
        </p>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search An Item"
            className="px-6 py-2 text-gray-900 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-white">
            Search
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
