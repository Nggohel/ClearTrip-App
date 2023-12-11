import applogo from "../../Assests/Images/AppLogo.png";
import AvtaarLogo from "../../Assests/Images/AvtaarLogo";
import flightSeat from "../../Assests/Images/flightseat";
import "../../styles/FlightReviewItinerary.css";
import LeftFlightReviewItinerary from "./LeftFlightReviewItinerary";
import RightFlightReviewItinerary from "./RightFlightReviewItinerary";

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

      <div style={{ display: "flex" }}>
        <LeftFlightReviewItinerary />
        <RightFlightReviewItinerary />
      </div>
    </>
  );
}

export default FlightReviewItinerary;
