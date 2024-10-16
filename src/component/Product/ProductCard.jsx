import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
      <div className="h-52 mt-3 rounded-lg shadow-mdp-4 p-3">
        <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded absolute top-2 left-2">
          {product.discount}%
        </span>
        <img src={product.images} alt="" className="md:h-48 md:w-full md:object-contain mb-2" />
      </div>
      <h2 className="font-semibold mt-5">{product.title}</h2>
      <div className="grid grid-cols-2">
        <p className="text-lg font-bold text-gray-800 mb-2">${product.price}</p>
        <button className="ml-auto ">
          <Link to="/productdetail" state={{ productData: product }}>
            <PlusCircleIcon className="size-8" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
