import React, { createContext, useState, useContext, useEffect } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(true);
  const [localStorageLoginData, setLocalStorageLoginData] = useState(
    JSON.parse(localStorage.getItem("signup&loginData"))
  );

  // console.log("localStorage", localStorageLoginData);
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
