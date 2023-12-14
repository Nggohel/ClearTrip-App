import { useState } from "react";
import Location from "../../Assests/Location";
import "../../styles/HotelSearchCard.css";
import CalenderLogo from "../../Assests/Images/Flight/CalenderLogo";
import personLogo from "../../Assests/Images/personLogo.svg";
import FlightCalendar from "../FlightCalendar";
function HotelSearchCard() {
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  return (
    <>
      <div className="main-hotelsearch-card">
        <div className="hotelsearch-card">
          <div className="hotelsearch-input-card">
            <div>
              <Location />
            </div>
            <div>
              <input
                type="text"
                className="hotelsearch-input"
                style={{ width: "550px", height: "56px" }}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div className="hotel-choose-date">
              <div>
                <CalenderLogo />
              </div>
              <div>
                <FlightCalendar
                  StartDay={(dayOfstart) => {
                    setDayStart(dayOfstart);
                  }}
                  EndDay={(dayOfEnd) => {
                    setDayEnd(dayOfEnd);
                  }}
                />
              </div>
            </div>

            <div className="hotel-choose-person">
              <div>
                <img
                  src={personLogo}
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="choose-person-input"
                  placeholder="1 Room, 2 Adults"
                />
              </div>
            </div>
          </div>
          <div className="hotel-search">
            <button className="hotel-search-btn">Search hotels</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelSearchCard;
