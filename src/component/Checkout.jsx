import React, { useState } from "react";
const Checkout = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:p-10 bg-gray-100">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-gray-100 p-5 shadow-md mb-5 border-4 border-spacing-6gray md:mb-0">
        <div className="border-b-2 mb-5">
          <ul className="flex justify-between">
            <li className="text-gray-600 font-medium py-2">Personal</li>
            <li className="text-gray-600 font-medium py-2">Billing</li>
            <li className="text-gray-600 font-medium py-2">Confirmation</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name*
              </label>
              <input
                type="text"
                value={userData.firstName}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name*
              </label>
              <input
                type="text"
                value={userData.lastName}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              value={userData.email}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="tel"
              value={userData.phoneNumber}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Street Address*
            </label>
            <input
              type="text"
              value={userData.address}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Town / City*
              </label>
              <input
                type="text"
                value={userData.city}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country*
              </label>
              <input
                type="text"
                value={userData.country}
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Postcode / Zip*
            </label>
            <input
              type="text"
              value={userData.zipCode}
              className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full md:w-auto bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Proceed to Next Step
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
