import React, { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../../styles/LoginPage.css";
import { useLoginContext } from "../../Hooks/LoginContext";

const MyAccount = ({ open, openChange }) => {
  const { localStorageLoginData } = useLoginContext();

  console.log(localStorageLoginData);

  const getLoginAndsingUpData = JSON.parse(
    localStorage.getItem("signup&loginData")
  );

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
        <div>
          <h3>
            {localStorageLoginData?.data?.name
              ? localStorageLoginData?.data?.name
              : localStorageLoginData?.data?.user.name}
          </h3>
          <hr></hr>
          <h5 className="logout" onClick={handleLogout}>
            LogOut
          </h5>
        </div>
      </Modal>
    </>
  );
};

export default MyAccount;
