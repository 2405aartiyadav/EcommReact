import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import useAuthentication from "../CustomHooks/useAuthentication";

function Profile() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { checkLoginStatus, getUserAuthDetail } = useAuthentication();
  const { isUserLoggedIn } = useContext(AuthContext);
  const [uploadProfileImg, setUploadProfileImg] = useState(null);
  const [userDetail, setUserDetail] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    profileImg: uploadProfileImg,
  });
  useEffect(() => {
    checkLoginStatus();
    if (isUserLoggedIn) {
      axios
        .post(`${baseUri}/auth/user-detail`, {
          username: getUserAuthDetail().username,
        })
        .then((response) => {
          setUserDetail(response.data);
          console.log(`userdetail${userDetail}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  let handleUploadImg = (file) => {
    // const fileimg=event.target.files[0];s
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUploadProfileImg(reader.result);
    };
  };

  let uploadImg = (e) => {
    let obj = {
      username: getUserAuthDetail().username,
      profileImg: uploadProfileImg,
    };
    axios
      .post(`${baseUri}/auth/upload-profile`, obj)
      .then((res) => {
        console.log(res.data);
        setUserDetail(res.data);
        console.log(userDetail);

        toast.success("profile photo uploaded");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-10">
      <div className="bg-white w-full max-w-6xl shadow-md rounded-lg p-8">
        <div className="flex justify-between items-center pb-6 border-b mb-6">
          <h2 className="text-2xl font-semibold">
            My Profile › <Link to="/setting">Edit Profile</Link>
          </h2>
          <Link to="/setting">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Edit
            </button>
          </Link>
        </div>

        {/* Profile Form */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 ">
            <img
              className=" w-32 h-32 mb-4 border rounded-full border-gray-400 align-middle"
              src={userDetail.imgUrl}
              alt="Profile"
              value={userDetail.profileImg}
              name="profileImg"
              onChange={handleInputChange}
            />
            <input
              type="file"
              onChange={(event) => {
                handleUploadImg(event.target.files[0]);
              }}
              className=" text-gray-700 px-4 py-2 rounded-lg mb-6"
            />
            <button
              onClick={(e) => uploadImg(e)}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg mb-6"
            >
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
                value={userDetail.firstName}
                name="firstName"
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Surname"
                value={userDetail.lastName}
                name="lastName"
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="********"
                value={userDetail.password}
                name="password"
                onChange={handleInputChange}
                readOnly
              />
              <Link to="/setting">
                <button className="text-blue-500 text-sm">
                  Change Password
                </button>
              </Link>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="email@example.com"
                value={userDetail.email}
                name="email"
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="+91-XX-XX-XX-XX-XX"
                value={userDetail.phoneNumber}
                name="phoneNumber"
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="address"
                value={userDetail.address}
                name="address"
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Nation</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="India"
                value={userDetail.country}
                name="country"
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Gender</label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                value={userDetail.gender}
                name="gender"
                onChange={handleInputChange}
                readOnly
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
