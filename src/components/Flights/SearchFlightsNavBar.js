import { useState, useEffect } from "react";
import { Hotel } from "@mui/icons-material";
import MyAccount from "./MyAccount";
import LoginPage from "../../Pages/LoginPage";
import SearchFlightLogo from "./../../Assests/Images/SearchFlightLogo";
import AppLogo from "./../../Assests/Images/AppLogo.png";
import SupportLogo from "./../../Assests/Images/SupportLogo";
import AvtaarLogo from "./../../Assests/Images/AvtaarLogo";
import "./../../styles/SearchFlightsNavBar.css";
import FlightCalendar from "../FlightCalendar";
import { useFlightContext } from "../../Hooks/useFlightContext";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../Hooks/LoginContext";

function SearchFlightsNavBar() {
  const { setSearchNavData, setSearchData } = useFlightContext();
  const { loginState, localStorageLoginData } = useLoginContext();
  const [wheretoValue, SetWheretoValue] = useState("");
  const [wherefromValue, SetWherefromvalue] = useState("");
  const [dayDeparture, setDayDeparture] = useState("");
  const [dayArrival, setDayArrival] = useState("");
  const [FormattedStartDate, setFormattedStartDate] = useState("");
  const [StartDateMonth, setStartDateMonth] = useState("");
  const [StartDateYear, setStartDateYear] = useState("");
  const [FormattedEndDate, setFormattedEndDate] = useState("");
  const [EndDateMonth, setEndDateMonth] = useState("");
  const [EndDateYear, setEndDateYear] = useState("");
  const [loginPopup, setLoginPopUp] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);

  const FlightData = JSON.parse(localStorage.getItem("SearchData"));

  const handleLoginAndSignUp = () => {
    setLoginPopUp(true);
  };

  const handleMyAccount = () => {
    setLogoutPopUp(true);
  };

  const DepatureValue = FlightData?.source + "-" + FlightData?.DepartureCity;
  const ArrivalValue = FlightData?.destination + "-" + FlightData?.ArrivalCity;

  useEffect(() => {
    if (FlightData) {
      SetWherefromvalue(FlightData?.DepartureCity);
      SetWheretoValue(FlightData?.ArrivalCity);
    }
  }, []);

  // setting location
  const handleWhereFromLocation = (e) => {
    SetWherefromvalue(e.target.value);
  };
  const handleWhereToLocation = (e) => {
    SetWheretoValue(e.target.value);
  };

  let FromValue =
    wherefromValue == FlightData?.DepartureCity
      ? DepatureValue?.split("-")
      : wherefromValue?.split("-");

  let ToValue =
    wheretoValue == FlightData?.ArrivalCity
      ? ArrivalValue?.split("-")
      : wheretoValue?.split("-");
  let DepartureCity = FromValue[1]?.split(",")[0].trim();
  let ArrivalCity = ToValue[1]?.split(",")[0].trim();

  // setting SearchData in localStorage
  const handleNavFlightSearch = () => {
    setSearchData({
      source: FromValue[0],
      destination: ToValue[0],
      dayDeparture: dayDeparture,
      dayArrival: dayArrival,
      FormattedStartDate: FormattedStartDate,
      StartDateMonth: StartDateMonth,
      StartDateYear: StartDateYear,
      FormattedEndDate: FormattedEndDate,
      EndDateMonth: EndDateMonth,
      EndDateYear: EndDateYear,
      DepartureCity: DepartureCity,
      ArrivalCity: ArrivalCity,
    });

    localStorage.setItem(
      "SearchData",
      JSON.stringify({
        source: FromValue[0],
        destination: ToValue[0],
        dayDeparture: dayDeparture,
        dayArrival: dayArrival,
        FormattedStartDate: FormattedStartDate,
        StartDateMonth: StartDateMonth,
        StartDateYear: StartDateYear,
        FormattedEndDate: FormattedEndDate,
        EndDateMonth: EndDateMonth,
        EndDateYear: EndDateYear,
        DepartureCity: DepartureCity,
        ArrivalCity: ArrivalCity,
      })
    );

    window.location.reload();
  };

  return (
    <>
      <div className="search-flights-navbar">
        <div className="leftside-searchflights-navbar">
          <Link to="/">
            <img src={AppLogo} />
          </Link>
          <Link to="/">
            <SearchFlightLogo />
          </Link>
          <Link to="/hotel">
            <Hotel style={{ color: "darkgray" }} />
          </Link>
        </div>
        <div className="rightside-searchflights-navbar">
          <SupportLogo />
          <div>
            <a href="https://www.cleartrip.com/accounts/trips">Support Me</a>
          </div>

          {loginState && localStorageLoginData?.status == "success" ? (
            <>
              <div>
                <AvtaarLogo />
              </div>
              <p className="nav-para" onClick={handleMyAccount}>
                My Account
              </p>
            </>
          ) : (
            <button className="custom-button" onClick={handleLoginAndSignUp}>
              Login in / sign up
            </button>
          )}
          <MyAccount open={logoutPopUp} openChange={setLogoutPopUp} />
          <LoginPage open={loginPopup} openChange={setLoginPopUp} />
        </div>
      </div>
      <div className="flights-search-boxs">
        <div className="flights-search-box">Round trip</div>
        <div className="flights-search-box">
          <input
            placeholder="Where from?"
            value={wherefromValue}
            className="searchflight-input"
            list="browser"
            onChange={handleWhereFromLocation}
          />
        </div>
        <div className="flights-search-box">
          <input
            placeholder="Where To?"
            value={wheretoValue}
            className="searchflight-input"
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

        {/* <div className="flights-search-box"></div> */}
        <div className="flightsearch-box-date">
          <FlightCalendar
            StartDay={(
              dayOfstart,
              formattedStartDate,
              startDateMonth,
              startDateYear
            ) => {
              setDayDeparture(dayOfstart);
              setFormattedStartDate(formattedStartDate);
              setStartDateMonth(startDateMonth);
              setStartDateYear(startDateYear);
            }}
            EndDay={(dayOfEnd, formattedEndDate, endDateMonth, endDateYear) => {
              setDayArrival(dayOfEnd);
              setFormattedEndDate(formattedEndDate);
              setEndDateMonth(endDateMonth);
              setEndDateYear(endDateYear);
            }}
          />
        </div>
        <div className="flights-search-box">1 Traveller</div>
        <button
          className="flights-search-button"
          onClick={handleNavFlightSearch}
        >
          Search
        </button>
      </div>
      <hr style={{ height: "1px" }}></hr>
    </>
  );
}
export default SearchFlightsNavBar;
