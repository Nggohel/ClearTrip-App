import { useState } from "react";
import "../../styles/HotelSearchPage.css";
import applogo from "../../Assests/Images/AppLogo.png";
import Location from "../../Assests/Location";
import FlightCalendar from "../../components/FlightCalendar";
function HotelSearchNavBar() {
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  return (
    <>
      <div className="navbar">
        <img src={applogo} alt="App Logo" width="100" height="25" />
        <div className="hotel-search-card-data">
          <div className="search-data-one">
            <Location />
            <p className="search-data-para">Goa</p>
          </div>
          <div className="search-data-second">
            <FlightCalendar
              StartDay={(dayOfstart) => {
                setDayStart(dayOfstart);
              }}
              EndDay={(dayOfEnd) => {
                setDayEnd(dayOfEnd);
              }}
            />
          </div>
          <div className="search-data-third"></div>
        </div>
        <button className="custom-button">Login in / sign up</button>
      </div>
    </>
  );
}
export default HotelSearchNavBar;
