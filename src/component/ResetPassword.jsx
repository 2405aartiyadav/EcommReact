import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [secQuestion, setSecQuestion] = useState({});
  const [secAnswer, setSecAnswer] = useState({
    securityAns1: "",
    securityAns2: "",
  });
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [passwordDetails, setPasswordDetails] = useState([
    {
      newPassword: "",
      confirmPassword: "",
    },
  ]);

  const [passwordError, setPasswordError] = useState("");
  const [isPaswdSubmitting, setIsPaswdSubmitting] = useState(false);

  // const [newPassword, setNewPassword] =useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  let handleChangeInput = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setSecAnswer({ ...secAnswer, [name]: value });
  };

  const checkPasswordMatch = () => {
    if (passwordDetails.newPassword !== passwordDetails.confirmPassword) {
      setPasswordError("Password do not match");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  let handleResetBtn = (event) => {
    event.preventDefault();
    console.log(checkPasswordMatch());

    if (checkPasswordMatch()) {
      setIsPaswdSubmitting(true);

      axios
        .post("http://localhost:8080/auth/reset-password", {
          email: email,
          password: passwordDetails.newPassword,
        })
        .then((res) => {
          console.log("backendpaswd");
          toast.success("Password updated,Please re-login");
          navigate("/signin");
          setIsPaswdSubmitting(true);
        })
        .catch((error) => {
          console.log(error);
          setIsPaswdSubmitting(false);
        });
    } else {
      toast.error("Something wrong");
    }
  };

  let handleResetBtnClick = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/auth/check-email-to-reset-password", {
        email: email,
      })
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.toString().includes("Security questions are not set")) {
          toast.error(resp.data);
        } else {
          setSecQuestion(resp.data);
          setFlag2(true);
          setFlag1(false);
          setFlag3(false);
        }
      })
      .catch((error) => {
        toast.error(error.response.data);
        console.log(error);
      });
  };

  const handleVerifyBtnClick = (event) => {
    event.preventDefault();
    try {
      axios
        .post("http://localhost:8080/auth/verify-security-answer", {
          email: email,
          securityQuestion1: secQuestion.securityQuestion1,
          securityAns1: secAnswer.securityAns1,
          securityQuestion2: secQuestion.securityQuestion2,
          securityAns2: secAnswer.securityAns2,
        })
        .then((resp) => {
          setFlag3(true);
          setFlag2(false);
          setFlag1(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Invalid answer");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {flag1 && !flag2 && !flag3 ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Forgot Password
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <button
              onClick={handleResetBtnClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}

      {!flag1 && flag2 && !flag3 ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Answer Security Question
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="securityQuestion1"
              >
                Security Question1:- {secQuestion.securityQuestion1}
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="securityAns1"
                type="text"
                name="securityAns1"
                placeholder="Type your Answer"
                value={secAnswer.securityAns1}
                onChange={(event) => {
                  handleChangeInput(event);
                }}
              />
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="securityQuestion2"
              >
                Security Question2:- {secQuestion.securityQuestion2}
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="securityAns2"
                type="text"
                name="securityAns2"
                placeholder="Type your Answer"
                value={secAnswer.securityAns2}
                onChange={(event) => {
                  handleChangeInput(event);
                }}
              />
            </div>
            <button
              onClick={(event) => {
                handleVerifyBtnClick(event);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Verify
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}

      {!flag1 && !flag2 && flag3 ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Create New password
          </h1>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="newPassword"
                type="text"
                name="newPassword"
                placeholder="Enter your email address"
                value={passwordDetails.newPassword}
                onChange={(event) => {
                  setPasswordDetails({
                    ...passwordDetails,
                    [event.target.name]: event.target.value,
                  });
                }}
                onBlur={checkPasswordMatch}
              />
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>

              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={passwordDetails.confirmPassword}
                onChange={(event) => {
                  setPasswordDetails({
                    ...passwordDetails,
                    [event.target.name]: event.target.value,
                  });
                }}
                onBlur={checkPasswordMatch}
              />
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </div>
            <button
              type="submit"
              onClick={(event) => {
                handleResetBtn(event);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Reset Password
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ResetPassword;
