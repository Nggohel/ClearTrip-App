import { Hotel } from "@mui/icons-material";
import SearchFlightLogo from "./../../Assests/Images/SearchFlightLogo";
import AppLogo from "./../../Assests/Images/AppLogo.png";
import SupportLogo from "./../../Assests/Images/SupportLogo";
import AvtaarLogo from "./../../Assests/Images/AvtaarLogo";
import "./../../styles/SearchFlightsNavBar.css";
import { useState } from "react";

function SearchFlightsNavBar() {
  const [wheretoValue, SetWheretoValue] = useState("BOM-Mumbai,In");
  const [wherefromValue, SetWherefromvalue] = useState("BLR-Bangalore,In");

  const handleWhereFromLocation = (e) => {
    SetWherefromvalue(e.target.value);
  };
  const handleWhereToLocation = (e) => {
    SetWheretoValue(e.target.value);
  };

  return (
    <>
      <div className="search-flights-navbar">
        <div className="leftside-searchflights-navbar">
          <img src={AppLogo} />
          <SearchFlightLogo />
          <Hotel style={{ color: "darkgray" }} />
        </div>
        <div className="rightside-searchflights-navbar">
          <div>INR Rs.</div>
          <div>
            <SupportLogo />
          </div>
          <div>Support</div>
          <div>
            <AvtaarLogo />
          </div>
          <div>Log in</div>
        </div>
      </div>
      <div className="flights-search-boxs">
        <div className="flights-search-box">Round trip</div>
        <div className="flights-search-box">
          <input
            placeholder="Where from?"
            value={wherefromValue}
            className="search-input"
            list="browser"
            style={{
              border: "0px",
              outline: "none",
              fontSize: "12px",
              width: "120px",
              color: "#1a1a1a",
              fontWeight: "400",
            }}
            onChange={handleWhereFromLocation}
          />
        </div>
        <div className="flights-search-box">
          <input
            placeholder="Where To?"
            value={wheretoValue}
            className="search-input"
            style={{
              border: "0px",
              outline: "none",
              fontSize: "12px",
              width: "120px",
              color: "#1a1a1a",
              fontWeight: "400",
            }}
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

        <div className="flights-search-box">Thu, Nov 16</div>
        <div className="flights-search-box">Thu, Nov 18</div>
        <div className="flights-search-box">1 Traveller</div>
        <button className="flights-search-button">Search</button>
      </div>
      <hr></hr>
    </>
  );
}
export default SearchFlightsNavBar;
