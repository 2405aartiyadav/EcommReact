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
    console.log(token_value);
    
    if (token_value) {
      axios
        .get("http://localhost:8080/auth/verify-token", null, {
          headers: {
            token: token_value,
          },
        })
        .then((res) => {
          console.log(res.data);
          console.log(token_value);
        })
        // if (token) {
        //   toast.success("you are aurthorize");
        // }
        .catch((error) => {
          console.log(error);
          if (error.response.data.status==="Unauthorized") {
            toast.error("Login session has expired,please try to login.");
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
