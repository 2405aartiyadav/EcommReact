import React, { useState } from "react";
import ProductCard from "./Product/ProductCard";
import {
  MagnifyingGlassCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";

import SideBar from "./sidebar/SideBar";
function Shop() {
  const [productData, setProductData] = useState([
    {
      title: "HP Pavilion 15-eh1047AU",
      discount: 30,
      price: "49990",
      rating: "5",
      reviewCount: "436",
      description:
        "HP Pavilion 15 laptop will help you excel in computational tasks with ease. It is designed and built, keeping gaming, entertainment, multimedia, and content creation in mind. If you are looking for gaming laptops or mid-range laptops with multitasking abilities, the HP Pavilion series is the best bet. It will keep up with your intensive games and most multitasking workloads with high-end processors from Intel and Ryzen.",
      features: [
        "AMD Ryzen 5 Hexa Core 5500",
        "16 GB RAM",
        "1 TB SSD",
        "Windows 11 Home & MS Office",
        "Thin and Light Laptop",
        "15.6 Inch, Natural Silver, 1.75 Kg",
      ],
      images: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/u/w/-original-imah4qshhfj428ef.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/o/c/z/15-eh1047au-thin-and-light-laptop-hp-original-imah2mxnjwbt2fxn.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/n/z/0/15-eh1047au-thin-and-light-laptop-hp-original-imah2mxnxxfbuxec.jpeg?q=70&crop=false",
      ],
    },
    {
      title: "Apple MacBook Air Laptop",
      price: "58,990",
      discount: 10,
      rating: "5",
      reviewCount: "4,891",
      description:
        "Transform thе way you work with thе rangе of Applе Mac. MacOS can enhance productivity with fеaturеs likе mission control, spotlight, and seamless intеgration with othеr Applе dеvicеs. If you are seeking a dеvicе that combines form and function, a Mac might be the ideal choice. Thе modеls, еquippеd with M1, M2, and M3 chips, offеr procеssing powеr and еnеrgy efficiency. Whеn purchasing a Mac, look into thе diffеrеnt modеls availablе onlinе. Thе MacBook Air is a lightwеight, ultra-portablе laptop idеal for еvеryday tasks.",
      features: [
        "AppleM1chip",
        "13.3-inch/33.74cmRetinaDisplay",
        "8GBRAM,256GBSSDStorage",
        "BacklitKeyboard",
        "FaceTimeHDCamera",
        "TouchID.WorkswithiPhone/iPad",
        "SpaceGrey",
      ],
      images: [
        "https://m.media-amazon.com/images/I/71jG+e7roXL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/71-6roO29AL._SX522_.jpg",
        "https://m.media-amazon.com/images/I/61uNK7su24L._SX522_.jpg",
      ],
    },
  ]);

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
          {productData.map((product) => {
            return (
              <ProductCard
                product={{
                  title: product.title,
                  images: product.images,
                  discount: product.discount,
                  price: product.price,
                  features:product.features
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
