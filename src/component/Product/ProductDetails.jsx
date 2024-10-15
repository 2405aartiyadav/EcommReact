import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import toast from "react-hot-toast";

function ProductDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addItemToCart, selectedItemInCart } = useContext(ProductContext);

  const [cartItem, setCartItem] = useState([selectedItemInCart]);
  const [productImg, setProductImg] = useState("");
  const [qty, setQty] = useState(0);
  const [productData, setProductData] = useState({
    id: "",
    title: "",
    images: [],
    discount: "",
    price: "",
    features: [],
    description: "",
  });

  useEffect(() => {
    if (state && state.productData) {
      const data = state.productData;
      setProductData(data);
      data && data.images && data.images.length > 0
        ? setProductImg(data.images[0])
        : "";
    } else {
      navigate("/shop");
    }
  }, []);

  const addToCart = (event, productData) => {
    event.preventDefault();

    const productDetail = {
      title: productData.title,
      image: productData.images[0],
      actualPrice: productData.price,
      quantity: qty,
      discount: productData.discount,
    };

    if (qty > 0) {
      addItemToCart(productData.id, productDetail);
      console.log(selectedItemInCart);
      navigate("/cart");
      setQty(0);
    } else {
      toast.error("Please select item to add");
    }
  };

  return (
    <>
      <div className="flex flex-row mx-10 my-10  gap-6">
        <div className="flex flex-col gap-4">
          {productData.images.map((img, index) => {
            return (
              <div
                key={index}
                className="w-40 basis-2/40"
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
            <p className="text-2xl font-bold">{productData.title}</p>
            <p className="text-2xl  mt-4">${productData.price} </p>
            <hr className="border border-950 mt-10" />
            <p className="mt-5">{productData.description}</p>
            <ul style={{ listStyle: "disc" }} className="mt-5">
              {productData.features.map((list, index) => {
                return <li key={index}>{list}</li>;
              })}
            </ul>
            <div className="flex flex-row ">
              <div className="w-24 p-2 mt-5 text-center border-black font-serif border rounded-full">
                <button
                  className="border-none mr-4"
                  onClick={() => {
                    if (qty > 0) {
                      setQty(qty - 1);
                    }
                  }}
                >
                  -
                </button>
                <label className="border-none text-center">{qty}</label>
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
                <button
                  className="border-none"
                  onClick={(event) => {
                    addToCart(event, productData);
                  }}
                >
                  Add to Cart
                </button>
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
