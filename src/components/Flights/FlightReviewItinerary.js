import { useState } from "react";
import MyAccount from "./MyAccount";
import LoginPage from "../../Pages/LoginPage";
import applogo from "../../Assests/Images/AppLogo.png";
import AvtaarLogo from "../../Assests/Images/AvtaarLogo";
import "../../styles/FlightReviewItinerary.css";
import LeftFlightReviewItinerary from "./LeftFlightReviewItinerary";
import RightFlightReviewItinerary from "./RightFlightReviewItinerary";
import { useFlightContext } from "../../Hooks/useFlightContext";

function FlightReviewItinerary() {
  const { loginState, localStorageLoginData } = useFlightContext();
  const [loginPopup, setLoginPopUp] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);

  const handleLoginAndSignUp = () => {
    setLoginPopUp(true);
  };

  const handleMyAccount = () => {
    setLogoutPopUp(true);
  };
  return (
    <>
      <div className="review-navbar">
        <img src={applogo} alt="App Logo" width="100" height="30" />
        <div className="review">
          {loginState || localStorageLoginData !== null ? (
            <>
              <AvtaarLogo />
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
      </div>
      <hr className="hr-line"></hr>

      <div style={{ display: "flex", gap: "34px" }}>
        <LeftFlightReviewItinerary />
        <RightFlightReviewItinerary />
      </div>
    </>
  );
}

export default FlightReviewItinerary;
