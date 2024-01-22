import React, { createContext, useState, useContext, useEffect } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(false);
  const [localStorageLoginData, setLocalStorageLoginData] = useState(
    JSON.parse(localStorage.getItem("signup&loginData"))
  );

  // console.log(loginState, "loginContext");
  // useEffect(() => {
  //   if (loginState) {
  //     setLocalStorageLoginData(

  //     );
  //   }
  // }, [loginState]);

  console.log("localStorage", localStorageLoginData);
  const LogincontextValue = {
    loginState,
    setLoginState,
    localStorageLoginData,
    setLocalStorageLoginData,
  };

  return (
    <LoginContext.Provider value={LogincontextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
