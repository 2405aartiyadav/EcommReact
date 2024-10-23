import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-2 mb-8 shadow-sm hover:shadow-md transform transition duration-300  hover:scale-105 ">
      <div className="relative">
        <span className="-my-5 absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
          -{product.discount}%
        </span>

        <img
          src={product.images}
          alt=""
          className="md:h-48 md:w-full md:object-contain mb-2 w-32 mt-5"
        />
      </div>
      <h2 className="font-semibold mt-5">{product.title}</h2>
      <div className="grid md:grid-cols-2">
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
