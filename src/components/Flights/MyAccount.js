import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../../styles/LoginPage.css";
import { useLoginContext } from "../../Hooks/LoginContext";

const MyAccount = ({ open, openChange }) => {
  // login data From Api
  const { localStorageLoginData } = useLoginContext();

  // console.log("LoginData", localStorageLoginData);
  // const getLoginAndsingUpData = JSON.parse(
  //   localStorage.getItem("signup&loginData")
  // );
  // clear the LocalStorage
  const handleLogout = () => {
    localStorage.removeItem("signup&loginData");
    localStorage.removeItem("ArrivalId");
    localStorage.removeItem("DepartureId");
    localStorage.removeItem("SearchData");

    openChange(false);
    window.location.reload();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => openChange(false)}
        classNames={{
          modal: "customLogoutModal",
        }}
      >
        <div style={{}}>
          <div style={{ marginTop: "50px" }}></div>
          <h4>
            <span className="name">Name: </span>
            {localStorageLoginData?.data?.name
              ? localStorageLoginData?.data?.name
              : localStorageLoginData?.data?.user.name}
          </h4>

          <h4 className="myacc-email">
            Email:
            {localStorageLoginData?.data?.email
              ? localStorageLoginData?.data?.email
              : localStorageLoginData?.data?.user.email}
          </h4>
          <div style={{ marginTop: "50px" }}></div>
          <h5 className="logout" onClick={handleLogout}>
            LogOut
          </h5>
        </div>
      </Modal>
    </>
  );
};

export default MyAccount;
