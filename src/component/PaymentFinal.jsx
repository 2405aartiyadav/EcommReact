import React, { useState } from "react";
import Cart from "./Cart";
const PaymentFinal = () => {
  const [address, setAddress] = useState("");
  const [wallet, setWallet] = useState(50000); // Assume wallet balance is ₹500

  const handleAddressChange = (e) => setAddress(e.target.value);

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:p-10 bg-gray-100">
      <div className="w-full md:w-2/5 bg-gray-100 p-5 shadow-md mb-5 border-4 border-spacing-6gray md:mb-0">
        {/* Shipping Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipping</h2>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Shipping Address
            </label>
            <p className="text-red-600 mb-2">
              No addresses found. Please add one to proceed.
            </p>
            <textarea
              value={address}
              onChange={handleAddressChange}
              placeholder="Add new address"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500 resize-none"
              rows="4"
            />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Add new address
          </button>
        </div>

        {/* Pricing Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Payment Method
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                id="wallet"
                defaultChecked
                className="mr-2"
              />
              <label htmlFor="wallet" className="text-lg">
                Wallet (
                <span className="font-bold text-green-700">
                  ₹{wallet} available
                </span>
                )
              </label>
            </div>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 w-full sm:w-auto rounded-md hover:bg-green-600 transition duration-200">
            Place Order
          </button>
        </div>
      </div>

      <div className="w-full md:w-4/5 bg-gray-100 p-5 shadow-md mb-5 border-4 border-spacing-6gray md:mb-0">
        <Cart />
      </div>
    </div>
  );
};

export default PaymentFinal;
