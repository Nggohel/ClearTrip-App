import { Link, useNavigate } from "react-router-dom";
import "./../../styles/MainSection.css";
import Departureplan from "../../Assests/Images/Flight/Departureplan";
import Trasition from "../../Assests/Images/Flight/Trasition";
import { useState } from "react";
import CalenderLogo from "../../Assests/Images/Flight/CalenderLogo";
import FlightCalendar from "../FlightCalendar";

function FlightSearchCard({ icon }) {
  const [wherefromValue, SetWherefromvalue] = useState("BLR-Bangalore,In");
  const [wheretoValue, SetWheretoValue] = useState("BOM-Mumbai,In");
  const [isOpen, setIsOpen] = useState(false);
  const [searchData, setSearchData] = useState("");

  // const navigate = useNavigate();

  const handleWhereFromLocation = (e) => {
    SetWherefromvalue(e.target.value);
  };
  const handleWhereToLocation = (e) => {
    SetWheretoValue(e.target.value);
  };

  const handleSearchButton = () => {
    setSearchData(wherefromValue);
  };
  const handleCalendarClick = () => {
    // setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="middle-section-card">
        <div className="flightsearch-innerdata">
          <form className="search-from">
            <span>{icon}</span>
            <select className="flightsearch-section">
              <option>One way</option>
              <option>Round trip</option>
            </select>
          </form>
          <div className="flightsearch-button">
            <button>Regular fare</button>
            <button>Student fare</button>
            <button>Senior citizen fare</button>
            <button>Armed forces fare</button>
          </div>
          <div className="flightsearch-search">
            <div className="departure-inputcard">
              <div className="departure-icon">
                <Departureplan />
              </div>
              <input
                placeholder="Where from?"
                value={wherefromValue}
                className="search-input"
                list="browser"
                style={{ border: "0px", outline: "none" }}
                onChange={handleWhereFromLocation}
              />
              <div>
                <div className="trasition">
                  <Trasition />
                </div>
              </div>
              <div className="departure-icon">
                <Departureplan />
              </div>
              <input
                placeholder="Where To?"
                value={wheretoValue}
                className="search-input"
                style={{ border: "0px", outline: "none" }}
                onChange={handleWhereToLocation}
                list="browser"
              />
              <datalist id="browser" style={{ maxWidth: "180px" }}>
                <option value="BLR Bangalore, IN - Kempegowda International Airport (BLR)" />
                <option value="BOM Mumbai, IN - Chatrapati Shivaji Airport (BOM)" />
                <option value="DEL New Delhi, IN - Indira Gandhi Airport (DEL)" />
                <option value="CCU Kolkata, IN - Netaji Subhas Chandra Bose Airport (CCU)" />
                <option value="GOI Goa, IN - Dabolim Airport (GOI)" />
              </datalist>
            </div>
          </div>
          <div className="flightsearch-search-calender">
            <div className="calender">
              <div className="choose-date">
                <div>
                  <CalenderLogo />
                </div>
                <div>
                  <FlightCalendar />
                </div>
              </div>
              <svg width="1" height="36" viewBox="0 0 1 36" fill="none">
                <line
                  x1="0.5"
                  y1="2.18557e-8"
                  x2="0.499998"
                  y2="36"
                  stroke="#E6E6E6"
                ></line>
              </svg>
              <div className="choose-date">
                <div>
                  <CalenderLogo />
                </div>
                <div>
                  <FlightCalendar />
                </div>
              </div>
            </div>
            <Link to="/search">
              <button
                className="search-btn"
                onClick={handleSearchButton}
                searchvalue={searchData}
              >
                Search flights
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default FlightSearchCard;
