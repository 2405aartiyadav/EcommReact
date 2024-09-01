import { useState } from "react";
import "./App.css";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import { Toaster } from "react-hot-toast";
Header;

function App() {
  return (
    <>
      <Header />
      <Toaster position='top-right' />

      <Outlet />
      {/* <SignUp /> */}

    </>
  );
}

export default App;
