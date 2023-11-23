import applogo from "../../Assests/Images/AppLogo.png";
import AvtaarLogo from "../../Assests/Images/AvtaarLogo";
import "../../styles/FlightReviewItinerary.css";
import LeftFlightReviewItinerary from "./LeftFlightReviewItinerary";

function FlightReviewItinerary() {
  return (
    <>
      <div className="review-navbar">
        <img src={applogo} alt="App Logo" width="100" height="30" />
        <div className="review">
          <p>
            <AvtaarLogo />
          </p>
          <p className="review-login">Log in</p>
        </div>
      </div>
      <hr className="hr-line"></hr>
      <LeftFlightReviewItinerary/>
    </>
  );
}

export default FlightReviewItinerary;
