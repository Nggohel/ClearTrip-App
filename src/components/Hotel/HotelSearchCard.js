import { useState } from "react";
import Location from "../../Assests/Location";
import "../../styles/HotelSearchCard.css";
import CalenderLogo from "../../Assests/Images/Flight/CalenderLogo";
import personLogo from "../../Assests/Images/personLogo.svg";
import FlightCalendar from "../FlightCalendar";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function HotelSearchCard() {
  const Navigate = useNavigate();
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [hotelLocation, SethotelLocation] = useState("");

  // updated Data Store in Local Storage 
  const handleSearchbtn = () => {
    localStorage.setItem(
      "SearchHotelData",
      JSON.stringify({
        source: hotelLocation,
        dayCome: dayStart,
      })
    );

    Navigate("/hotelsearch");
  };

  const options = [
    "Bangalore,Karnataka,India",
    "Mumbai,Maharashtra,India",
    "Kolkata,West Bengal ,India",
    "Chennai,Tamil Nadu ,India",
    "Jaipur,Rajasthan ,India",
    "Udaipur,Rajasthan ,India",
  ];

  const handleSearchCity = (selectedOption) => {
    const city = selectedOption.value.split(",")[0].trim();

    SethotelLocation(city);
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
              <Dropdown
                options={options}
                onChange={handleSearchCity}
                value={hotelLocation}
                placeholder="Enter locality, landmark, city or hotel"
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


