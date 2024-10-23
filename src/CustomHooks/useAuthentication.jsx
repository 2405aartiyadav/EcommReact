import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function useAuthentication() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const{setIsUserLoggedIn}=useContext(AuthContext)

  let navigate = useNavigate();

  const login = (userName, passWord) => {
    axios
      .post(`${baseUri}/auth/login`, {
        username: userName,
        password: passWord,
      })
      .then((resp) => {
        if (resp.status === 200 && resp.data.token) {
          setIsUserLoggedIn(true);
          toast("Loged in succesfully", {
            duration: 3000,
            position: "top-center",
            icon: "✅",
          });

          let userObj = {
            username: userName,
            loginStatus: true,
            token: resp.data.token,
          };
          localStorage.setItem("userAuthDetail", JSON.stringify(userObj));
          setIsUserLoggedIn(true)
          navigate("/shop");
        } else {
          toast("Login failed!", {
            duration: 3000,
            position: "top-center",
            icon: "⚠️",
          });
          setIsUserLoggedIn(false)

        }
      })
      .catch((error) => {
        console.log(error);
        setIsUserLoggedIn(false)
        let errMsg = error.response.data.message;
        toast(errMsg, {
          duration: 3000,
          position: "top-center",
          icon: "❌",
        });
      });
  };

  const logout = () => {
    localStorage.removeItem("userAuthDetail");
    setIsUserLoggedIn(false);
    toast("You have been logged out.", {
      duration: 3000,
      icon: "ℹ",
      position: "top-center",
    });
    navigate("/signin");
  };

  const checkLoginStatus =  () => {
    let authObj = JSON.parse(localStorage.getItem("userAuthDetail")) 
    console.log(authObj);
    
    if (authObj && authObj.loginStatus) {
      // verify token
       axios
        .get(`${baseUri}/auth/verify-token`, {
          headers: {
            token: authObj.token,
          },
        })
        .then((resp) => {
          console.log("token verfied");
        })
        .catch((error) => {
          toast("Session has expire,please re-login", {
            duration: 6000,
            position: "top-center",
            icon: "❌",
          });
        });
    } else {
      toast.error('User not logged in!', {
        duration: 3000, 
        position: 'top-right', 
        style: {
          borderRadius: '8px',
          background: '#000',
          color: '#fff',
        },
      });
      // toast("Please login first.", {
      //   duration: 3000,
      //   position: "top-center",
      //   icon: "❌",
      // });
      navigate("/signin");
    }
  };

  const getUserAuthDetail=()=>{
    let authObj = JSON.parse(localStorage.getItem("userAuthDetail")) 
    return authObj;


  }
  return { login, logout, checkLoginStatus,getUserAuthDetail };

}

export default useAuthentication;
