import { useState } from "react";
import { Hotel } from "@mui/icons-material";
import SearchFlightLogo from "./../../Assests/Images/SearchFlightLogo";
import AppLogo from "./../../Assests/Images/AppLogo.png";
import SupportLogo from "./../../Assests/Images/SupportLogo";
import AvtaarLogo from "./../../Assests/Images/AvtaarLogo";
import "./../../styles/SearchFlightsNavBar.css";
import FlightCalendar from "../FlightCalendar";
import { useFlightContext } from "../../Hooks/useFlightContext";

function SearchFlightsNavBar() {
  const { setSearchNavData } = useFlightContext();
  const FlightData = JSON.parse(localStorage.getItem("SearchData"));

  const [wheretoValue, SetWheretoValue] = useState(FlightData?.ArrivalCity);
  const [wherefromValue, SetWherefromvalue] = useState(
    FlightData?.DepartureCity
  );
  const [dayDeparture, setDayDeparture] = useState(FlightData?.dayDeparture);
  const [dayArrival, setDayArrival] = useState(FlightData?.dayArrival);
  const [FormattedStartDate, setFormattedStartDate] = useState(
    FlightData?.FormattedStartDate
  );
  const [StartDateMonth, setStartDateMonth] = useState(
    FlightData?.StartDateMonth
  );
  const [StartDateYear, setStartDateYear] = useState(FlightData?.StartDateYear);
  const [FormattedEndDate, setFormattedEndDate] = useState(
    FlightData?.FormattedEndDate
  );
  const [EndDateMonth, setEndDateMonth] = useState(FlightData?.EndDateMonth);
  const [EndDateYear, setEndDateYear] = useState(FlightData?.EndDateYear);

  const handleWhereFromLocation = (e) => {
    SetWherefromvalue(e.target.value);
  };
  const handleWhereToLocation = (e) => {
    SetWheretoValue(e.target.value);
  };

  let NavBarFromValue = wherefromValue?.split("-");
  let NavBarToValue = wheretoValue?.split("-");
  let NavBarDepartureCity = NavBarFromValue[1]?.split(",")[0].trim();
  let NavBarArrivalCity = NavBarToValue[1]?.split(",")[0].trim();

  const handleNavFlightSearch = () => {
    setSearchNavData({
      source: NavBarFromValue[0],
      destination: NavBarToValue[0],
      dayDeparture: dayDeparture,
      dayArrival: dayArrival,
      FormattedStartDate: FormattedStartDate,
      StartDateMonth: StartDateMonth,
      StartDateYear: StartDateYear,
      FormattedEndDate: FormattedEndDate,
      EndDateMonth: EndDateMonth,
      EndDateYear: EndDateYear,
      DepartureCity: NavBarDepartureCity,
      ArrivalCity: NavBarArrivalCity,
    });

    localStorage.setItem(
      "FlightNavSearch",
      JSON.stringify({
        source: NavBarFromValue[0],
        destination: NavBarToValue[0],
        dayDeparture: dayDeparture,
        dayArrival: dayArrival,
        FormattedStartDate: FormattedStartDate,
        StartDateMonth: StartDateMonth,
        StartDateYear: StartDateYear,
        FormattedEndDate: FormattedEndDate,
        EndDateMonth: EndDateMonth,
        EndDateYear: EndDateYear,
        DepartureCity: NavBarDepartureCity,
        ArrivalCity: NavBarArrivalCity,
      })
    );
    
    window.location.reload();
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
              // setDayDeparture(dayOfstart);
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
