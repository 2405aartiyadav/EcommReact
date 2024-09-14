import React, { useContext, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Profile() {
  const navigate = useNavigate();
  const { logedInUser } = useContext(LoginContext);

  useEffect(() => {
    let token_value = sessionStorage.getItem("token");
    
    if (token_value) {
      axios
        .get("http://localhost:8080/auth/verify-token", {
          headers: {
            token: token_value,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
       
        .catch((error) => {
          console.log(error);
          console.log(error.response.data);
          
          if (error.response.data==="Unauthorized") {
            toast.error("Login session has expired,please try to login.");
            sessionStorage.removeItem("token");
            navigate("/signin");
          }
        });
    } else {
      toast.error("Please login");
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      {console.log(logedInUser)}

      <h1>Welcome {logedInUser}</h1>

      
    </div>
  );
}

export default Profile;