import React, { useEffect, useState } from 'react'
import useAuthentication from "./useAuthentication";
import axios from 'axios';
const useFetchData=(url,options={})=> {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const { checkLoginStatus, getUserAuthDetail } = useAuthentication();
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
  });
  
const fectchUserDetail=()=>{
  
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
  
  return {fectchUserDetail}
}
export default useFetchData
