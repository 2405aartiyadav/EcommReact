import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function SignUp() {
  const {
    register,
    resetField,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);

    axios
      .post("http://localhost:8080/auth/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast.success("User sign up successfully");
          navigate("/signin");
          setSignedUp(true);
          console.log("signup successfully");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          toast.error(err.response.data);
        } else {
          if (err.response.data.includes("duplicate key error")) {
            toast.error("User already exist");
          } else {
            console.log(err);
          }
        }
      });
  };

  return (
    <>
      <div className="max-w-lg mx-auto my-20 items-center rounded-xl bg-slate-50 flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8 border-2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img alt="Your Company" src={logo} className="mx-auto h-10 w-auto" />
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Signup here
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="name"
                  required
                  autoComplete="firstName"
                  className="block pl-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("firstName", { required: "*Please enter your name" })}
                />
                <p className="text-red-600">
                  {errors.firstName && <p>{errors.firstName?.message}</p>}
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
               Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="name"
                  required
                  autoComplete="namlastNamee"
                  className="block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("lastName", { required: "*Please enter your name" })}
                />
                <p className="text-red-600">
                  {errors.lastName && <p>{errors.lastName?.message}</p>}
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="block pl-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email", {
                    required: "Please Enter Your Email!",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "*Please enter valid email",
                    },
                  })}
                  type:email
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
            </div>

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
                <p className="text-red-600">
                  {errors.username && errors.username.message}
                </p>
              </div>
            </div>

            <div className="flex-row">
              <div className="flex col-6 items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: "*Please Enter Your Password",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long!",
                    },
                  })}
                />
                <p className="text-red-600">{errors.password?.message}</p>
              </div>

              <div className="flex col-6 items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block pl-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("ConfirmPassword", {
                    required: true,
                    validate: (val) => {
                      const { password } = getValues();
                      return password === val || "*Password should match";
                    },
                  })}
                />

                <p className="text-red-600">
                  {errors.ConfirmPassword && errors.ConfirmPassword.message}
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-md text-gray-950">
            <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
