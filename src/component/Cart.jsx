import React, { useContext, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState(new Map());
  const { selectedItemInCart, totalQty, setTotalQty } = useContext(ProductContext);
  const [quantity, setQuantity] = useState();

  const handleRemoveItem = (event, id) => {
    event.preventDefault();
    setCartItems(Array.from(cartItems).filter(([key, item]) => item.id !== id));
  };
  useEffect(() => {
    console.log(selectedItemInCart);
    setCartItems(selectedItemInCart);
  }, [selectedItemInCart]);
  let itemTotalAmount = 0;
  let totalAmount = 0;
  let totalItem = 0;
  let totalQuantity = 0;
  let totalDiscount = 0;
  let itemDiscountAmount = 0;
  let totalItemDiscountPercentage = 0;
  let totalPriceAfterDiscount = 0;
  let itemAmountAfterDiscount = 0;
  const subtotal = Array.from(cartItems).reduce((acc, [key, item]) => {
    return acc + item.actualPrice * item.quantity;
  }, 0);
  cartItems.forEach((item) => {
    //  subtotal =  item.actualPrice * item.quantity;
    itemTotalAmount = item.quantity * item.actualPrice;
    totalItemDiscountPercentage = item.discount;
    itemDiscountAmount = (subtotal / 100) * totalItemDiscountPercentage;  subtotal * 0.1;
    itemAmountAfterDiscount = itemTotalAmount - itemDiscountAmount;
    totalAmount += itemTotalAmount;
    totalDiscount += itemDiscountAmount;
    totalPriceAfterDiscount += itemAmountAfterDiscount;
  });

  // console.log(`totalQuantity ${totalQuantity}`);
  // console.log(`totalAmount ${totalAmount}`);
  // console.log(`totalDiscount ${totalDiscount}`);
  // console.log(`totalPriceAfterDiscount ${totalPriceAfterDiscount}`);
  // console.log(`itemTotalAmount ${itemTotalAmount}`);
  // console.log(`itemDiscountAmount ${itemDiscountAmount}`);
  // console.log(`itemAmountAfterDiscount ${itemAmountAfterDiscount}`);

  // console.log(`totalQty ${totalQty}`);

  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mt-5 w-full md:w-5/12">
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
            {Array.from(cartItems).map(([key, item]) => {
              return (
                <tr key={key} className="border-b">
                  <td className="p-4 flex items-center space-x-4">
                    {/* Delete button */}
                    <button
                      className="text-gray-500 hover:text-red-600"
                      onClick={(event) => handleRemoveItem(event, item.key)}
                    >
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
                  <td className="p-12 font-semibold">₨.{(item.actualPrice).toLocaleString()}</td>
                  <td className="p-4 flex items-center ">
                    <div className="border rounded-full border-black">
                      <button className="border px-2 py-1 border-none">
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button className="border px-2 py-1 border-none">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-4 font-semibold">₨.{(item.actualPrice * item.quantity).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className=" mt-5 w-full md:w-5/12 m-7">
        <h2 className="text-lg font-semibold mb-4 h-14 bg-gray-300">
          Cart Total
        </h2>
        <div className="border-b py-2 flex justify-between ">
          <span>SUBTOTAL</span>
          <span>₨.{subtotal.toLocaleString()}</span>
        </div>
        <div className="border-b py-2 flex justify-between">
          <span>DISCOUNT</span>
          <span>{totalDiscount.toLocaleString()}</span>
        </div>
        <div className="border-b py-2 flex justify-between">
          <span>TOTAL</span>
          <span>₨{totalPriceAfterDiscount.toLocaleString()}</span>
        </div>
        <Link to="/checkout">
          <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">
            Proceed To Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
