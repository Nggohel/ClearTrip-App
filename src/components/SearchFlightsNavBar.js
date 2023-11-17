import { Hotel } from "@mui/icons-material";
import SearchFlightLogo from "../Assests/Images/SearchFlightLogo";
import AppLogo from "./../Assests/Images/AppLogo.png";
import SupportLogo from "../Assests/Images/SupportLogo";
import AvtaarLogo from "../Assests/Images/AvtaarLogo";
import "./../styles/SearchFlightsNavBar.css";

function SearchFlightsNavBar() {
  return (
    <>
      <div className="search-flights-navbar">
        <div className="leftside-searchflights-navbar">
          <img src={AppLogo} />
          <SearchFlightLogo />
          <Hotel style={{ color: "darkgray" }} />
        </div>
        <div className="rightside-searchflights-navbar">
          <span>INR Rs.</span>
          <span>
            <span>
              <SupportLogo />
            </span>
            <span>Support</span>
          </span>
          <span>
            <AvtaarLogo />
          </span>
          <span>Log in</span>
        </div>
      </div>
      <div className="flights-search-boxs">
        <div className="flights-search-box">Round trip</div>
        <div className="flights-search-box">
          {/* <input type="text" /> */}
          BLR - Bangalore, IN
        </div>
        <div className="flights-search-box">BOM - Mumbai, IN</div>

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
