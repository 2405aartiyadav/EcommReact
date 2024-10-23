import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Page4() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUri}/product/get-popular-product`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [products]);

  return (
    <>
      <div className="mt-20 my-24 bg-gradient-to-r from-gray-200 to-gray-250 p-10">
        <div className="flex flex-row ">
          <span className="flex-grow text-3xl lg:text-4xl font-bold mb-2">
            Most Popular Products
          </span>
          <button
            className="boder rounded-lg text-white font-bold bg-gradient-to-r from-blue-500 to-blue-600 w-40"
            onClick={(e) => {
              navigate("/shop");
            }}
          >
            View All
          </button>
        </div>
        <p className="mb-6 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
          suscipit?
        </p>
        <div className="mt-10 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-y-4 md:gap-10 transform transition duration-300  ">
          {products.map((product, index) => (
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Page4;
