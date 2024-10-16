import React, { useEffect, useState } from "react";
import ProductCard from "./Product/ProductCard";
import {ProductContext} from'../Context/ProductContext.jsx'
import {
  MagnifyingGlassCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import SideBar from "./sidebar/SideBar";
import axios from "axios";
import { useContext } from "react";
function Shop() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const [productData, setProductData] = useState([]);
  const {searchInput,setSearchInput } = useContext(ProductContext);
  const [totalCount, setotalCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseUri}/product/get-all-products`)
      .then((res) => {
        setProductData(res.data);
        setotalCount(productData.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productData]);

let filterItem=productData.filter((item)=>{
  if(item.title.toLowerCase().includes(searchInput.toLowerCase())){
    return item;
  }
})
  return (
  
    <div className="mx-5 my-10 flex">
      <div className="m-5">
        <SideBar />
      </div>
      <div className="mx-10">
          
      <div className="max-w-7xl mx-auto p-4">
        <header className="mb-8 font-bold text-4xl text-gray-950 opacity-85">
          <h1 className="text-3xl font-bold mb-2">Our Collections Of Products</h1>
          <div className="mt-5 flex items-center border border-gray-300 rounded-full w-full">
          <input
            type="text"
            placeholder="Seacrch an item"
            className="outline-none w-full border-none ml-2 text-lg text-gray-500"
            value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log("search btn clicked");
            }}
          >
            <MagnifyingGlassCircleIcon className="size-10" />
          </button>
        </div>
          <p className="text-gray-500 text-lg mt-4 font-bold">
            Showing {totalCount} of 24 item(s) <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus, in praesentium perspiciatis veniam rerum?
          </p>
        </header>
        
        <div className="mt-5 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* <div className="mt-5 grid md:grid-cols-5  sm:grid-cols-2 gap-6"> */}
          {filterItem.map((product, index) => {
            return (
              <ProductCard
                key={index}
                product={{
                  id: product._id,
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
    </div>
  );
}

export default Shop;
