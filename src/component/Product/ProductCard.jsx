import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border-2 border-gray rounded-lg w-56 h-80 px-3 ">
      <div className="h-52 mt-3 rounded-lg shadow-mdp-4 p-3">
        <span className="w-5 bg-slate-800 opacity-80 rounded-lg px-2 text-sm text-white">
          {product.discount}%
        </span>
        <img src={product.images} alt="" className="object-contain  h-48 w-96 " />
      </div>
      <h2 className="text-sm  mt-5">{product.title}</h2>
      <div className="grid grid-cols-2">
        <p className="text-gray-600 font-bold">${product.price}</p>
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
