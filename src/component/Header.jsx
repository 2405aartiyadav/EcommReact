import React, { useContext, useEffect, useState } from "react";
// import profileIcon  from "../assets/profile-icon.png";
import profileIcon from "../assets/profile-icon1.png";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuthentication from "../CustomHooks/useAuthentication";
import { AuthContext } from "../Context/AuthContext";
function Header() {
const navigate=useNavigate();
  const{isUserLoggedIn}=useContext(AuthContext)
  let { login,logout,checkLoginStatus } = useAuthentication();
  const [click, setClick] = useState(false);
  const [isLoggIn, setIsLoggIn] = useState(false);
  const [navItemLoggin, setNavItemLoggin] = useState([
    { item: "Your Profile", to: "/profile" },
    { item: "Settings", to: "/setting" },
  ]);

  const [navItemLogOut, setNavItemLogOut] = useState([
    { item: "Sign Up", to: "/signup" },
    { item: "Sign In", to: "/signin" },
  ]);

  const [headerNavlinks, setHeaderNavlink] = useState([
    { item: "Home", to: "" },
    { item: "Shop", to: "/shop" },
    { item: "Contact Us", to: "/contact" },
    { item: "Blog", to: "/blog" },
  ]);
  useEffect(() => {
    checkLoginStatus()
  },[]);

  return (
    <nav className="bg-gray-300 p-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-red-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} />
              <h3 className="text-lg">Ecom-React</h3>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {headerNavlinks.map((links, index) => {
                  return (
                    <Link
                      to={links.to}
                      key={index}
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-400 hover:bg-gray-700 hover:text-white"
                    >
                      {links.item}
                    </Link>
                  );
                })}
               
               {
                isUserLoggedIn? <button
                className="rounded-md px-3 py-2 text-sm font-medium
               text-red-400 bg-white hover:bg-gray-700
               hover:text-white"
                onClick={() => logout()}
              >
                Logout
              </button>: <button
                  className="rounded-md px-3 py-2 text-sm font-medium
                 text-red-400 bg-white hover:bg-gray-700
                 hover:text-white"
                  onClick={() => navigate('/signin')}
                >
                  LogIn
                </button>
               }
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => {
                    setClick(!click);
                  }}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={profileIcon}
                    alt=""
                  />
                </button>
              </div>
              {/* 
          <!--
            Dropdown menu, show/hide based on menu state.
          --> */}
              {click ? (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                 
                  {isUserLoggedIn ? (
                    <>
                      {navItemLoggin.map((data) => {
                        return (
                            <Link
                              to={data.to}
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              tabIndex="-1"
                              id="user-menu-item-1"
                            >
                              {data.item}
                            </Link>
                        );
                      })}

                      <p  className="block px-4 py-2 text-sm text-gray-700" onClick={()=>logout()}>Sign Out</p>
                    </>
                  ) : (
                    <>
                      {navItemLogOut.map((data) => {
                        return (
                          <>
                            <Link
                              to={data.to}
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              tabIndex="-1"
                              id="user-menu-item-1"
                            >
                              {data.item}
                            </Link>
                          </>
                        );
                      })}
                    </>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
