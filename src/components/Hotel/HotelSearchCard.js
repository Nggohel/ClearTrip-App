import { useState } from "react";
import Location from "../../Assests/Location";
import "../../styles/HotelSearchCard.css";
import CalenderLogo from "../../Assests/Images/Flight/CalenderLogo";
import personLogo from "../../Assests/Images/personLogo.svg";
import FlightCalendar from "../FlightCalendar";
import { useNavigate } from "react-router-dom";
function HotelSearchCard() {
  const Navigate = useNavigate();
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [hotelLocation, SethotelLocation] = useState("");

  const handleHotelLocation = (e) => {
    SethotelLocation(e.target.value);
  };
  const handleSearchbtn = (e) => {
    Navigate("/hotelsearch");
  };

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
                placeholder="Where from?"
                value={hotelLocation}
                list="citylist"
                onChange={handleHotelLocation}
              />
              <datalist id="citylist" style={{}}>
                <option
                  className="datalist-option"
                  value="Banglore,Karnataka,India"
                />
                <option value="Mumbai,Maharashtra,India" />
                <option value="New Delhi,Delhi ,India" />
                <option value="Kolkata,West Bengal ,India" />
                <option value="Goa,Goa ,India" />
                <option value="Chennai,Tamil Nadu ,India" />
                <option value="Jaipur,Rajasthan ,India" />
                <option value="Udaipur,Rajasthan ,India" />
              </datalist>
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
                  list="room-person-list"
                />
                <datalist id="room-person-list" style={{}}>
                  <option
                    className="datalist-option"
                    value="1 Room, 2 Adults"
                  />
                  <option value="1 Room, 1 Adults" />
                  <option value="2 Room, 4 Adults" />
                </datalist>
              </div>
            </div>
          </div>
          <div className="hotel-search">
            <button className="hotel-search-btn" onClick={handleSearchbtn}>
              Search hotels
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelSearchCard;
