import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import useAuthentication from "../CustomHooks/useAuthentication";

function Profile() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { checkLoginStatus } = useAuthentication();
  const { isUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
        checkLoginStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-10">
      <div className="bg-white w-full max-w-6xl shadow-md rounded-lg p-8">
        {/* Header */}
        <div className="flex justify-between items-center pb-6 border-b mb-6">
          <h2 className="text-2xl font-semibold">My Profile › <Link to="/setting">Edit Profile</Link></h2>
          <Link to="/setting">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Edit
            </button>
          </Link>
        </div>

        {/* Profile Form */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side: Profile Picture and Basic Info */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 ">
            <img
              className=" w-32 h-32 mb-4 border rounded-full border-gray-400 align-middle"
              src=""
              alt="Profile"
            />
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mb-6">
              Change Picture
            </button>
          </div>

          {/* Right Side: Form Fields */}
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Surname"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="********"
              />
              <Link to="/setting">
              <button className="text-blue-500 text-sm">Change Password</button>
              </Link>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="+91-XX-XX-XX-XX-XX"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Nation</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="India"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Gender</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Language</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
