import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [logedInUser, setLogedInUser] = useState();
  const [signedUpUser, setSignedUpUser] = useState();
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);

  let logOut = () => {
    setLogedInUser();
    setIsUserLogedIn(false);
    toast.error("User loged out");
  };
  let logIn = (username) => {
    setLogedInUser(username);
    setIsUserLogedIn(true);
    return true;
  };

  return (
    <LoginContext.Provider
      value={{
        logedInUser,
        setLogedInUser,
        logIn,
        logOut,
        isUserLogedIn,
        setIsUserLogedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export { LoginProvider, LoginContext };
