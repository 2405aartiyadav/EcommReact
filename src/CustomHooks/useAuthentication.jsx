import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useAuthentication() {
  const baseUri = import.meta.env.VITE_API_BASE_URL;
  let navigate = useNavigate();

  const login = (userName, passWord) => {
    axios
      .post(`${baseUri}/auth/login`, {
        username: userName,
        password: passWord,
      })
      .then((resp) => {
        if (resp.status === 200 && resp.data.token) {
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
    toast("You have been logged out.", {
      duration: 3000,
      icon: "ℹ",
      position: "top-center",
    });
    navigate("/signin");
  };
  return {login, logout};
}

export default useAuthentication;
