import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import applogo from "../Assests/Images/AppLogo.png";
import "../styles/NavBar.css";
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="navbar">
          <img src={applogo} alt="App Logo" width="100" height="25" />
          <button className="custom-button">Login in / sign up</button>
        </div>
      </AppBar>
    </Box>
  );
}
