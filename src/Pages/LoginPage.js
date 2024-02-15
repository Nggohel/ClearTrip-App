import React, { useEffect, useMemo, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import LoginCarousel from "../components/Carousels/LoginCarousel";
import "../styles/LoginPage.css";
import useFetch from "../Hooks/UseFetch";
import { useLoginContext } from "../Hooks/LoginContext";
import Toaster from "../utils/Toaster";

const LoginPage = ({ open, openChange }) => {
  const { setLoginState, setLocalStorageLoginData, localStorageLoginData } =
    useLoginContext();
  const [isLogin, setIsLogin] = useState(false);
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const [toaster, setToaster] = useState({
    status: "",
    message: "",
  });

  // onclick login set onchnage value for Api
  const handleLogin = () => {
    setIsLogin(true);
    setFromData({
      name: "",
      email: "",
      phonenumber: "",
      password: "",
    });
  };

  // all From Data setting Here
  const handleFromChange = (e) => {
    setToaster({
      status: "",
      message: "",
    });

    const value = e.target.value;
    const name = e.target.name;

    setFromData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data: Data, fetchPostData } = useFetch();

  const derivedValue = useMemo(() => {
    return toaster;
  }, [
    fromData?.name,
    fromData?.email,
    fromData?.password,
    fromData?.phonenumber,
  ]);
  // Api calling for Singup
  const handleSignupApi = async () => {
    if (
      fromData?.name == "" ||
      fromData?.email == "" ||
      fromData?.password == "" ||
      fromData?.phonenumber == ""
    ) {
      setToaster({
        status: "warning",
        message: "Please Fill The Required Fields",
      });
    } else {
      fetchPostData(
        `https://academics.newtonschool.co/api/v1/bookingportals/signup`,
        "POST",
        {
          name: fromData?.name,
          email: fromData?.email,
          password: fromData?.password,
          appType: "bookingportals",
        }
      );
    }
  };
  // Api calling For the Login
  const handleLoginApi = async () => {
    if (fromData?.email == "" || fromData?.password == "") {
      setToaster({
        status: "warning",
        message: "Please Fill The Required Fields",
      });
    } else {
      fetchPostData(
        `https://academics.newtonschool.co/api/v1/bookingportals/login`,
        "POST",
        {
          email: fromData?.email,
          password: fromData?.password,
          appType: "bookingportals",
        }
      );
    }
  };

  console.log("api Data", Data);

  useEffect(() => {
    if (Data != null || Data != undefined) {
      if (Data?.status == "fail") {
        setToaster({
          status: Data?.status,
          message: Data?.message,
        });
      } else {
        openChange(false);
        if (fromData?.phonenumber) {
          sessionStorage.setItem(
            "MobileNo",
            JSON.stringify(fromData?.phonenumber)
          );
        }
        setFromData({
          name: "",
          email: "",
          phonenumber: "",
          password: "",
        });
        setLoginState(true);
        setLocalStorageLoginData(Data);
        localStorage.setItem("signup&loginData", JSON.stringify(Data));
      }
    }
  }, [Data]);

  // status: 'fail', message: 'Invalid input data. A user must have a name. A user must have an email'}
  // console.log("Toaster", toaster);

  return (
    <>
      <Modal
        open={open}
        center
        onClose={() => openChange(false)}
        classNames={{
          modal: "customModal",
        }}
      >
        <div style={{ display: "flex" }}>
          <LoginCarousel />

          <div className="login-container">
            {/* true he toh name ki jarrot nahi he */}
            {isLogin ? (
              ""
            ) : (
              <>
                <label className="name-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input-name"
                  placeholder="Enter Your Name"
                  value={fromData.name}
                  onChange={handleFromChange}
                  required
                ></input>
              </>
            )}

            <label className="name-label">Mobile No</label>
            <input
              type="number"
              name="phonenumber"
              className="input-name"
              placeholder="Enter Your Mobile.No"
              value={fromData.phonenumber}
              onChange={handleFromChange}
              required
            ></input>

            <label className="name-label">Email</label>
            <input
              type="email"
              name="email"
              className="input-name"
              placeholder="Enter Your Email"
              value={fromData.email}
              onChange={handleFromChange}
              required
            ></input>

            <label className="name-label">Password</label>
            <input
              type="password"
              name="password"
              className="input-name"
              placeholder="Enter Your Password"
              value={fromData.password}
              onChange={handleFromChange}
              required
            ></input>
            <button
              className="login-btn"
              onClick={isLogin ? handleLoginApi : handleSignupApi}
            >
              {isLogin ? "Login" : "Get started"}
            </button>

            {/* link option */}
            {/* true he toh yeh line dikhane ki jarrot nahi he */}
            {isLogin ? (
              ""
            ) : (
              <>
                <p className="already-acc-para">
                  Already account ?
                  <span onClick={handleLogin} className="already-acc">
                    Login Here
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </Modal>

      {toaster.status == "fail" || toaster.status == "warning" ? (
        <Toaster status={toaster.status} message={toaster.message} />
      ) : (
        ""
      )}
    </>
  );
};

export default LoginPage;
