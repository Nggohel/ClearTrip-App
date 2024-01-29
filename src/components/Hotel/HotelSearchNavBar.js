import { useEffect, useState } from "react";
import "../../styles/HotelSearchPage.css";
import applogo from "../../Assests/Images/AppLogo.png";
import Location from "../../Assests/Location";
import FlightCalendar from "../../components/FlightCalendar";

function HotelSearchNavBar({ searchData, btnCss, Apidata }) {
  console.log("Apidata", Apidata);

  const [searchState, setSearchState] = useState(true);
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const city = Apidata?.hotels[0]?.location.split(",")[0].trim();
  useEffect(() => {
    setSearchState(searchData);
  }, [searchData]);

  return (
    <>
      <div className="navbar">
        <img src={applogo} alt="App Logo" width="100" height="25" />
        {searchState ? (
          <div className="hotel-search-card-data">
            <div className="search-data-one">
              <Location />
              <p className="search-data-para">
                {city ? (
                  city
                ) : (
                  <input
                    type="text"
                    className="choose-person-input"
                    placeholder="City"
                    list="room-person-list"
                  />
                )}
                <datalist id="room-person-list" style={{}}>
                  <option className="datalist-option" value="Goa" />
                  <option value="Banglore" />
                  <option value="Kolkata" />
                </datalist>
              </p>
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
            <div className="search-data-third">
              <input
                type="text"
                className="choose-person-input"
                placeholder="1 Room, 2 Adults"
                list="room-person-list"
              />
              <datalist id="room-person-list" style={{}}>
                <option className="datalist-option" value="1 Room, 2 Adults" />
                <option value="1 Room, 1 Adults" />
                <option value="2 Room, 4 Adults" />
              </datalist>
            </div>
          </div>
        ) : (
          ""
        )}
        <button className={`custom-button  ${btnCss}`}>
          Login in / sign up
        </button>
      </div>
    </>
  );
}
export default HotelSearchNavBar;
