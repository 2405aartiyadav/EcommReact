import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useAuthentication() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);

  let navigate = useNavigate();

  const login = (userName, passWord) => {
    axios
      .post(`${baseUri}/auth/login`, {
        username: userName,
        password: passWord,
      })
      .then((resp) => {
        if (resp.status === 200 && resp.data.token) {
          setIsUserLogedIn(true);
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
          sessionStorage.setItem("token", resp.data.token);
          localStorage.setItem("userAuthDetail", JSON.stringify(userObj));
          navigate("/profile");
        } else {
          toast("Login failed!", {
            duration: 3000,
            position: "top-center",
            icon: "⚠️",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsUserLogedIn(false);
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
    setIsUserLogedIn(false);
    toast("You have been logged out.", {
      duration: 3000,
      icon: "ℹ",
      position: "top-center",
    });
    navigate("/signin");
  };

  const checkLoginStatus = async () => {
    let authObj = localStorage.getItem("userAuthDetail");
    if (authObj && authObj.loginStatus) {
      //verify token
      // await axios.get(`${baseUri}/auth/verify-token`,{
      //   headers:{
      //     token:authObj.token
      //   }
      // }).then((resp)=>{

      // })
      return true;
    } else {
      toast("Please login first.", {
        duration: 3000,
        position: "top-center",
        icon: "❌",
      });
      navigate('/signin')
      return false;
    }
  };
  return { login, logout, checkLoginStatus };
}

export default useAuthentication;
