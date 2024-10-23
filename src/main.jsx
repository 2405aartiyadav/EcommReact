import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PrductContextProvider } from "./Context/ProductContext.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SignIn from "./component/SignIn.jsx";
import SignUp from "./component/SignUp.jsx";
import ResetPassword from "./component/ResetPassword.jsx";
import Profile from "./component/Profile.jsx";
import Setting from "./component/Setting.jsx";
import Cart from "./component/Cart.jsx";
import Checkout from "./component/Checkout.jsx";
import Orders from "./component/Orders.jsx";
import Products from "./component/Products.jsx";
import Shop from "./component/Shop.jsx";
import ContactUs from "./component/ContactUs.jsx";
import Blog from "./component/Blog.jsx";
import MainLandingPage from "./component/LandingPage/MainLandingPage.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx";
// import Test from "./component/Test.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainLandingPage />} />
      <Route path="test" element={<Test />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="setting" element={<Setting />} />
      <Route path="profile" element={<Profile />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<Orders />} />
      <Route path="products" element={<Products />} />
      <Route path="shop" element={<Shop />} />
      <Route path="reset" element={<ResetPassword />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="productdetail" element={<ProductDetails />} />
      {/* <Route path="test" element={<Test />} /> */}

    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthContextProvider>
      <PrductContextProvider>
        <RouterProvider router={router} />
      </PrductContextProvider>
    </AuthContextProvider>
  </>
);
