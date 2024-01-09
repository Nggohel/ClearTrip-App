import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import LoginCarousel from "../components/Carousels/LoginCarousel";
import "../styles/LoginPage.css";
const LoginPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ display: "flex" }}>
          <LoginCarousel />
          <div className="login-container">
            <label className="name-label">Name</label>
            <input
              type="text"
              className="input-name"
              placeholder="Enter Your Name"
            ></input>
            <label className="name-label">Email</label>
            <input
              type="email"
              className="input-name"
              placeholder="Enter Your Email"
            ></input>

            <button className="login-btn">Get Login</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginPage;
