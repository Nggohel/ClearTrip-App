import { useNavigate } from "react-router-dom";
import "./../../styles/MainSection.css";
import Departureplan from "../../Assests/Images/Flight/Departureplan";
import Trasition from "../../Assests/Images/Flight/Trasition";
import { useState } from "react";
import CalenderLogo from "../../Assests/Images/Flight/CalenderLogo";
function FlightSearchCard({ icon }) {
  const [wherefromValue, SetWherefromvalue] = useState("BLR-Bangalore,In");
  const [wheretoValue, SetWheretoValue] = useState("BOM-Mumbai,In");
  const navigate = useNavigate();

  const handleWhereFromLocation = (e) => {
    SetWherefromvalue(e.target.value);
  };
  const handleWhereToLocation = (e) => {
    SetWheretoValue(e.target.value);
  };

  const handleSearchButton = () => {
    navigate("/search");
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
              <div>
                <CalenderLogo />
              </div>
              <div>Tue, Nov 28</div>
            </div>
            <div>Tue, Dec 28</div>
            <button onClick={handleSearchButton}>Search flights</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FlightSearchCard;
