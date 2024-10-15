import React, { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Page4() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const navigate=useNavigate();

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
    <div className="mt-20">
      <div className="row">
      <span className="col font-bold text-2xl mb-2">Most Popular Products</span>
      <button className="col " onClick={(e)=>{navigate('/shop')}}>View All</button>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
        suscipit?
      </p>
      <div className="mt-10 grid grid-cols-6 gap-y-4">
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
