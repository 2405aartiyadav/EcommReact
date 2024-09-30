import React, { useContext, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PrductContext } from "../Context/ProductContext";

function Cart() {
  const {selectedItemInCart}=useContext(PrductContext);
  const [items, setItems] = useState([
    {
      title: "HP Pavilion 15-eh1047AU",
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
    <div className="flex flex-row mx-10 my-10">
      <div className="basis-5/12 ">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-300">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {selectedItemInCart.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 flex items-center space-x-4">
                  {/* Delete button */}
                  <button className="text-gray-500 hover:text-red-600">
                    <XMarkIcon className="size-5" />
                  </button>
                  {/* Product Info */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-22 h-12"
                  />
                  <span className="">{item.title}</span>
                </td>
                <td className="p-4">${item.actualPrice}</td>
                <td className="p-4 flex items-center ">
                  <div className="border rounded-full border-black">
                    <button className="border px-2 py-1 border-none">-</button>
                    <span>{item.quantity}</span>
                    <button className="border px-2 py-1 border-none">+</button>
                  </div>
                </td>
                <td className="p-4">${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="basis-5/12 mx-24 ">
        <h2 className="text-lg font-semibold mb-4 h-14 bg-gray-300">
          Cart Total
        </h2>
        <div className="border-b py-2 flex justify-between ">
          <span>SUBTOTAL</span>
          <span>$</span>
        </div>
        <div className="border-b py-2 flex justify-between">
          <span>DISCOUNT</span>
          <span>---</span>
        </div>
        <div className="border-b py-2 flex justify-between">
          <span>TOTAL</span>
          <span>$</span>
        </div>
        <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
