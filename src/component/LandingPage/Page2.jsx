import React, { useState } from "react";

function Page2() {
  const [products, setProducts] = useState([
    {
      item: "Product1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    { item: "Product2", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product3", desc: " Lorem ipsum dolor sit amet." },
    { item: "Product4", desc: " Lorem ipsum dolor sit amet." },
  ]);
  return (
    <div className="mt-20">
      <div class="font-bold text-2xl mb-2"> Featured Products</div>
      <div className="flex flex-wrap justify-center mt-5">
        {products.map((product) => (
          <div className="bg-white  rounded-lg shadow-mdp-4 w-64 m-10 h-60 bg-slate-300">
            <h2 className="text-lg font-bold text-center">{product.item}</h2>
            <p className="text-gray-600 text-center">{product.desc}</p>
            {/* <button className="bg-red-300">Buy Now</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
