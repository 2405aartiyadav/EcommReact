import React, { useContext, useEffect, useState } from "react";
import AccountSettingInput from "./AccountSettingInput";
import axios from "axios";
import toast from "react-hot-toast";
import useAuthentication from "../CustomHooks/useAuthentication";
import { AuthContext } from "../Context/AuthContext";

function Setting() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const { checkLoginStatus,getUserAuthDetail } = useAuthentication();
  const{isUserLoggedIn}=useContext(AuthContext)

  const [formData, setFormData] = useState();
  const [isLoggIn, setIsLoggIn] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dob: undefined,
    newPasswd: "",
    confirmPasswd: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    securityQuestion1: "",
    securityAns1: "",
    securityQuestion2: "",
    securityAns2: "",
  });

  useEffect(() => {
    
    if(isUserLoggedIn){
    console.log(getUserAuthDetail());
    console.log(getUserAuthDetail().username);
      axios
      .post(`${baseUri}/auth/user-detail`, {
        username:getUserAuthDetail().username,
      })
      .then((response) => {
        let resp = response.data;

        // let dateString = resp.dob.toString();
        // const indexofT = dateString.indexOf("T");
        // const dob1 = dateString.substring(0, indexofT);
        // resp.dob = dob1;
        setUserData(resp);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios
      .post(`${baseUri}/auth/update-user-detail`, userData)
      .then((response) => {
        console.log(response.data);
        console.log(userData);
        toast.success("User detail updated");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <>
        <div id="setting">
          <div className="profileInformation">
            <div className="mx-28 mt-10">
              <h2>Account Setting</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, quam?
              </p>
            </div>
            <div className="mx-28 mt-4 p-9 bg-slate-100">
              <form action="" onSubmit={handleSubmit}>
                <div className="my-2" id="basicinfo">
                  <h3 className="text-gray-550 font-bold">
                    Profile Information
                  </h3>

                  <div className="flex my-3 p-2">
                    <AccountSettingInput
                      label="First Name"
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={userData.firstName}
                      handleInputChange={handleInputChange}
                      readOnly
                    />
                    <AccountSettingInput
                      label="Lastt Name"
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={userData.lastName}
                      handleInputChange={handleInputChange}
                      readOnly
                    />
                    <AccountSettingInput
                      label="Username"
                      id="username"
                      name="username"
                      type="text"
                      value={userData.username}
                      handleInputChange={handleInputChange}
                      readOnly
                    />
                  </div>

                  <div className="flex my-3 p-2">
                    <AccountSettingInput
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      value={userData.email}
                      handleInputChange={handleInputChange}
                      readOnly
                    />

                    <AccountSettingInput
                      label="Phone Number"
                      id="phoneNumber"
                      name="phoneNumber"
                      type="number"
                      value={userData.phoneNumber}
                      handleInputChange={handleInputChange}
                    />

                    <div className="flex-1 p-1">
                      <label
                        htmlFor="gender"
                        className="block mb-2 text-sm font-medium text-gray-500dark:text-white"
                      >
                        Gender
                      </label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={userData.gender === "male"}
                        onChange={handleInputChange}
                        className="h-4 w-4"
                      />
                      <label htmlFor="male" className="p-3 font-medium text-sm">
                        Male
                      </label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={userData.gender === "female"}
                        onChange={handleInputChange}
                        className="h-4 w-4"
                      />
                      <label
                        htmlFor="female"
                        className="p-3 font-medium text-sm"
                      >
                        Female
                      </label>
                    </div>
                  </div>

                  <div className="flex my-3 p-2">
                    <AccountSettingInput
                      label="Date of Birth"
                      id="dob"
                      name="dob"
                      type="date"
                      value={userData.dob}
                      handleInputChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* address */}

                <div className="Address">
                  <h3 className="text-gray-550 font-bold">Address Detail</h3>

                  <div className="flex my-3 p-2">
                    <div className="flex-1 ...">
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-500dark:text-white"
                      >
                        Shipping Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                        className="block h-28 w-1/2 p-2 text-gray-500 border border-gray-300 rounded-2xl bg-gray-50 text-base"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex my-3 p-2">
                  <AccountSettingInput
                    label="Country"
                    id="country"
                    name="country"
                    type="text"
                    value={userData.country}
                    handleInputChange={handleInputChange}
                  />

                  <AccountSettingInput
                    label="State"
                    id="state"
                    name="state"
                    type="text"
                    value={userData.state}
                    handleInputChange={handleInputChange}
                  />
                </div>

                <div className="flex my-3 p-2">
                  <AccountSettingInput
                    label="City"
                    id="city"
                    name="city"
                    type="text"
                    value={userData.city}
                    handleInputChange={handleInputChange}
                  />

                  <AccountSettingInput
                    label="Zip code"
                    id="zipCode"
                    name="zipCode"
                    type="number"
                    value={userData.zipCode}
                    handleInputChange={handleInputChange}
                  />
                </div>

                <button className="bg-gray-700 text-white w-40 rounded-full p-2">
                  Submit
                </button>
              </form>
            </div>

            <div className="securityInformation" id="securityInformation">
              <div className="mx-28 mt-4 p-9 bg-slate-100">
                <p className="text-red-400 font-bold">
                  **This functionality is currently unavailable
                </p>
                <form action="">
                  <div className="my-2 passwordDetail">
                    <h3 className="text-black-950 font-bold">
                      Change Password
                    </h3>

                    <div className="flex my-3 p-2">
                      <AccountSettingInput
                        label="New Password"
                        id="newPasswd"
                        name="newPasswd"
                        type="password"
                        value={userData.newPasswd}
                        handleInputChange={handleInputChange}
                      />

                      <AccountSettingInput
                        label="Confirm Password"
                        id="confirmPasswd"
                        name="confirmPasswd"
                        type="password"
                        value={userData.confirmPasswd}
                        handleInputChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Security question */}
                  <hr className="text-black" />
                  <h2 className="p-3 mt-3 text-gray-550 font-bold">
                    Set Your Security Question
                  </h2>

                  {/* Security question1 */}

                  <div className="flex my-3 p-2">
                    <div className="flex-1 ...">
                      <label htmlFor="securityQuestion1">
                        Security Question 1:
                        <select
                          name="securityQuestion1"
                          value={userData.securityQuestion1}
                          onChange={handleInputChange}
                          id="securityQuestion1"
                          className="block mt-2 w-96 p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-base"
                        >
                          <option value="">Select a question</option>
                          <option value="What is your mother's maiden name">
                            What is your mother's maiden name?
                          </option>
                          <option value="What is your favorite color">
                            What is your favorite color
                          </option>
                        </select>
                      </label>

                      {/* Security answer */}
                      <label htmlFor="" className="my-14">
                        Security Answer
                        <input
                          type="text"
                          name="securityAns1"
                          value={userData.securityAns1}
                          onChange={handleInputChange}
                          className="block mt-2 w-96 p-2 text-gray-500 border border-gray-300 rounded-md bg-gray-50 text-base"
                        />
                      </label>
                    </div>

                    {/* Security question2 */}
                    <div className="flex-1 ...">
                      <label htmlFor="securityQuestion2">
                        Security Question 2:
                        <select
                          name="securityQuestion2"
                          value={userData.securityQuestion2}
                          onChange={handleInputChange}
                          id="securityQuestion2"
                          className="block mt-2 w-96 p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-base"
                        >
                          <option value="">Select a question</option>
                          <option value="What is your mother's maiden name">
                            What is your mother's maiden name?
                          </option>
                          <option value="What is your favorite color">
                            What is your favorite color
                          </option>
                        </select>
                      </label>
                      {/* Security answer */}
                      <label htmlFor="" className="mt-6">
                        Security Answer
                        <input
                          type="text"
                          name="securityAns2"
                          value={userData.securityAns2}
                          onChange={handleInputChange}
                          className="block mt-2 w-96 p-2 text-gray-500 border border-gray-300 rounded-md bg-gray-50 text-base"
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       
      
    </>
  );
}

export default Setting;
