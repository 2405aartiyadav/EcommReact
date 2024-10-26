import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
function Featured() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
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
    <div className="mt-20   ">
      <div className="p-2 flex-grow text-3xl lg:text-4xl font-bold mb-6"> Featured Products</div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 px-10 transform transition duration-300">
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
  );
}

export default Featured;
