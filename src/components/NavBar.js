import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import applogo from "../Assests/Images/AppLogo.png";
import "../styles/NavBar.css";
import LoginPage from "../Pages/LoginPage";
import MyAccount from "./Flights/MyAccount";
import { useLoginContext } from "../Hooks/LoginContext";
import AvtaarLogo from "../Assests/Images/AvtaarLogo";

export default function NavBar() {
  const {
    loginState,
    setLoginState,
    localStorageLoginData,
    setLocalStorageLoginData,
  } = useLoginContext();

  const [loginPopup, setLoginPopUp] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);
  const [toasterVisible, setToasterVisible] = useState(false);
  const handleLoginAndSignUp = () => {
    setLoginPopUp(true);
  };

  const handleMyAccount = () => {
    setLogoutPopUp(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className={toasterVisible ? "toaster-visible" : ""}
      >
        <div className="navbar">
          <img src={applogo} alt="App Logo" width="100" height="25" />
          {loginState && localStorageLoginData?.status == "success" ? (
            <>
              <div>
                <AvtaarLogo />
              </div>
              <p className="nav-para" onClick={handleMyAccount}>
                My Account
              </p>
            </>
          ) : (
            <button className="custom-button" onClick={handleLoginAndSignUp}>
              Login in / sign up
            </button>
          )}
          <MyAccount open={logoutPopUp} openChange={setLogoutPopUp} />
          <LoginPage open={loginPopup} openChange={setLoginPopUp} />
        </div>
      </AppBar>
    </Box>
  );
}
