import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginContext } from "../Context/LoginContext";

function SignIn() {
  const navigate = useNavigate();
  const { logIn, logOut, logedInUser, isUserLogedIn, setIsUserLogedIn } =
    useContext(LoginContext);
  const { register, resetField, reset, handleSubmit } = useForm();
{console.log(setIsUserLogedIn);
}
  const onSubmit = (data) => {
    // console.log(data);
    if (data.username && data.password) {
      axios
        .post("http://localhost:8080/auth/login", {
          username: data.username,
          password: data.password,
        })
        .then((res) => {
          if (res.status === 200) {
            let result = logIn(data.username);
            sessionStorage.setItem("token",res.data.token)
            console.log(result);
            toast.success("Loged in succesfully");
            navigate("/profile");
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.status === 400) {
            toast.error(err.response.data);
          }
          
          else if (err.response.data.status === 401){
            setIsUserLogedIn(false);
            toast.error(err.response.data);

          }

          else 
            toast.error("failed to login");
        });
    } else {
      toast.error("Please enter valid username and password");
    }
  };
  return (
    <>
      <div className="max-w-md mx-auto my-20 items-center rounded-xl bg-slate-50 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img alt="Your Company" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="username"
                  className="block pl-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("username", { required: true })}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/reset"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-md text-gray-950">
            Don't have account?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
