import React, { useEffect, useState } from "react";
import ProductCard from "./Product/ProductCard";
import {
  MagnifyingGlassCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

import SideBar from "./sidebar/SideBar";
import axios from "axios";
function Shop() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUri}/product/get-all-products`)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            className="outline-none w-full border-none ml-2 text-gray-500"
          />
          <button
            onClick={() => {
              console.log("search btn clicked");
            }}
          >
            <MagnifyingGlassCircleIcon className="size-10" />
          </button>
        </div>
        <div className="mt-5">
          <p className="font-bold text-sm">Showing 1-12 of 24 item(s)</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            ducimus, in praesentium perspiciatis veniam rerum?
          </p>
        </div>
        <div className="mt-5 grid md:grid-cols-5  sm:grid-cols-2 gap-6">
          {productData.map((product,index) => {
            return (
              <ProductCard key={index}
                product={{
                  id:product._id,
                  title: product.title,
                  images: product.images,
                  discount: product.discount,
                  price: product.price,
                  features: product.features,
                  description: product.description,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
