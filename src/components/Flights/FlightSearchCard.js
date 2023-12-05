import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../styles/MainSection.css";
import Departureplan from "../../Assests/Images/Flight/Departureplan";
import Trasition from "../../Assests/Images/Flight/Trasition";
import { useState } from "react";
import CalenderLogo from "../../Assests/Images/Flight/CalenderLogo";
import FlightCalendar from "../FlightCalendar";
import FinalFlightDataCard from "./FinalFlightDataCard";
export const srcValue = React.createContext();

function FlightSearchCard({ icon }) {
  const [wherefromValue, SetWherefromvalue] = useState("BLR-Bangalore,In");
  const [wheretoValue, SetWheretoValue] = useState("BOM-Mumbai,In");
  const [day, setDay] = useState("");
  const [searchData, setSearchData] = useState({});

  let FromValue = wherefromValue.split("-");
  let ToValue = wheretoValue.split("-");

  const handleWhereFromLocation = (e) => {
    SetWherefromvalue(e.target.value);
  };
  const handleWhereToLocation = (e) => {
    SetWheretoValue(e.target.value);
  };

  const handleSearchButton = () => {
    console.log(FromValue[0]);
    console.log(ToValue[0]);
    console.log(day);

    localStorage.setItem(
      "SearchData",
      JSON.stringify({
        source: FromValue[0],
        destination: ToValue[0],
        day: day,
      })
    );
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
              <datalist id="browser" style={{ marginLeft: "-55px" }}>
                <option
                  className="datalist-option"
                  value="BLR-Bangalore, IN - Kempegowda International Airport (BLR)"
                />
                <option value="BOM-Mumbai, IN - Chatrapati Shivaji Airport (BOM)" />
                <option value="DEL-New Delhi, IN - Indira Gandhi Airport (DEL)" />
                <option value="CCU-Kolkata, IN - Netaji Subhas Chandra Bose Airport (CCU)" />
                <option value="GOI-Goa, IN - Dabolim Airport (GOI)" />
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
                  <FlightCalendar
                    onDayOfWeekChange={(dayOfWeek) => {
                      setDay(dayOfWeek);
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to="/search">
              <button className="search-btn" onClick={handleSearchButton}>
                Search flights
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <srcValue.Provider value={searchData}>
        <FinalFlightDataCard />
      </srcValue.Provider> */}
    </>
  );
}
export default FlightSearchCard;
