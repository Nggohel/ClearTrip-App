import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./../../styles/MainSection.css";
import Departureplan from "../../Assests/Images/Flight/Departureplan";
import Trasition from "../../Assests/Images/Flight/Trasition";
import { useState } from "react";
import CalenderLogo from "../../Assests/Images/Flight/CalenderLogo";
import FlightCalendar from "../FlightCalendar";
import { useFlightContext } from "../../Hooks/useFlightContext";
import { StateList } from "../../Data/StateList";

function FlightSearchCard({ icon }) {
  const { setSearchData } = useFlightContext();
  const [wherefromValue, SetWherefromvalue] = useState("BLR-Bangalore,In");
  const [wheretoValue, SetWheretoValue] = useState("BOM-Mumbai,In");
  const [dayDeparture, setDayDeparture] = useState("");
  const [dayArrival, setDayArrival] = useState("");
  const [FormattedStartDate, setFormattedStartDate] = useState("");
  const [StartDateMonth, setStartDateMonth] = useState("");
  const [StartDateYear, setStartDateYear] = useState("");
  const [FormattedEndDate, setFormattedEndDate] = useState("");
  const [EndDateMonth, setEndDateMonth] = useState("");
  const [EndDateYear, setEndDateYear] = useState("");

  let FromValue = wherefromValue?.split("-");
  let ToValue = wheretoValue?.split("-");
  let DepartureCity = FromValue[1]?.split(",")[0].trim();
  let ArrivalCity = ToValue[1]?.split(",")[0].trim();

  // set Location Value
  const handleWhereFromLocation = (e) => {
    SetWherefromvalue(e.target.value);
  };
  const handleWhereToLocation = (e) => {
    SetWheretoValue(e.target.value);
  };
  // setingData to LocalStorage
  const handleSearchButton = () => {
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
  };

  // useEffect(() => {
  //   console.log("Context Data:", searchData);

  // }, []);

  return (
    <>
      <div className="middle-section-card">
        <div className="flightsearch-innerdata">
          <form className="search-from">
            <span>{icon}</span>
            <select className="flightsearch-section">
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
                list="AirportList"
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
                list="AirportList"
              />
              <datalist id="AirportList" style={{ marginLeft: "-55px" }}>
                {StateList &&
                  StateList?.map((city, index) => (
                    <option
                      key={index}
                      className="datalist-option"
                      value={`${city.iata_code}-${city.city},IN - ${city.name}`}
                    />
                  ))}
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
                    EndDay={(
                      dayOfEnd,
                      formattedEndDate,
                      endDateMonth,
                      endDateYear
                    ) => {
                      setDayArrival(dayOfEnd);
                      setFormattedEndDate(formattedEndDate);
                      setEndDateMonth(endDateMonth);
                      setEndDateYear(endDateYear);
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to="/flightsearch">
              <button className="search-btn" onClick={handleSearchButton}>
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
