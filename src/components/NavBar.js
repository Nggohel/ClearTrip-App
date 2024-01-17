import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import applogo from "../Assests/Images/AppLogo.png";
import "../styles/NavBar.css";
import LoginPage from "../Pages/LoginPage";
import { useState } from "react";
export default function NavBar() {
  const [loginPopup, setloginPopUp] = useState(false);

  const handleLoginandSignUp = () => {
    setloginPopUp(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="navbar">
          <img src={applogo} alt="App Logo" width="100" height="25" />
          <button className="custom-button" onClick={handleLoginandSignUp}>
            Login in / sign up
          </button>
          {/* <div>
            <p>My account</p>
          </div> */}

          <LoginPage open={loginPopup} openChange={setloginPopUp} />
        </div>
      </AppBar>
    </Box>
  );
}
