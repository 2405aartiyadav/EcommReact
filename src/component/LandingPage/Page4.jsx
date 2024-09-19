import React, { useState } from "react";
import ProductCard from "../Product/ProductCard";

function Page4() {
  const [products, setProducts] = useState([
    {
      item: "Product1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    { item: "Product2", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product3", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product4", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product5", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product6", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product7", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product8", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product9", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product10", desc: " Lorem ipsum dolor sit amet." }
  ]);
  return (
    <div className="mt-20">
      <div class="font-bold text-2xl mb-2 ">Most Popular Products</div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, suscipit?</p>
      <div className="grid grid-cols-6 gap-y-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Page4;
