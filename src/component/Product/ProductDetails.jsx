import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const { state } = useLocation();
  const data = state.productData;

  const [productImg, setProductImg] = useState("");
  const [qty, setQty] = useState(0);
  const [prData, setPrData] = useState({});
  console.log(prData);
  
  useEffect(() => {
    setPrData(data);
    console.log(prData);
  }, [data]);

  return (
    <>
    {
      prData.images.map((img,index)=>{
        return(
          <>
          <img src={img} alt="" />
          </>
          
        )
      })
    } 
      <div className="flex flex-row mx-10 my-10  gap-6">
        <div className="flex flex-col gap-4">
          {prData.images.map((img, index) => {
            return (
              <div
                key={index}
                className="w-40 basis-2/4  bg-slate-400"
                onMouseOver={(e) => {
                  setProductImg(img);
                }}
              >
                <img src={img} alt="img" />
              </div>
            );
          })}
        </div>
        <div className="basis-5/12">
          <img src={productImg} alt="productimg" />
        </div>
        <div className="basis-5/12 mx-10">
          <div className="">
            <p className="text-2xl font-bold">{prData.title}</p>
            <p className="text-2xl  mt-4">${prData.price} </p>
            <hr className="border border-950 mt-10" />
            <p className="mt-5">{prData.description}</p>
            <ul style={{ listStyle: "disc" }} className="mt-5">
              {prData.features.map((list) => {
                return <li>{list.features}</li>;
              })}
            </ul>
            <div className="flex flex-row ">
              <div className="w-24 p-2 mt-5 text-center border-black font-serif border rounded-full">
                <button
                  className="border-none mr-4"
                  onClick={() => {
                    setQty(qty - 1);
                  }}
                >
                  -
                </button>
                <label className="border-none text-center">
                  {qty < 0 ? 0 : qty}
                </label>
                <button
                  className="ml-4"
                  onClick={() => {
                    setQty(qty + 1);
                  }}
                >
                  +
                </button>
              </div>
              <span className="mt-7 ml-5 w-1/2 p-2  border-black  text-center text-white bg-black  border rounded-full">
                <button className="border-none">Add to Cart</button>
              </span>
            </div>
          </div>
          <button className="w-full border border-black rounded-full p-2 bg-zinc mt-5">
            Buy Now
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
