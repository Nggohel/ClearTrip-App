import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/MainSection.css";
import FlightSearchCard from "./../Flights/FlightSearchCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Arrow from "../../Assests/Images/Arrow";
import { useFlightContext } from "../../Hooks/useFlightContext";

function MainSection() {
  const { setSearchData } = useFlightContext();
  const handleFlightSearch = () => {
    // setSearchData({
    //   source: "BLR",
    //   destination: "CUU",
    //   dayDeparture: "Mon",
    //   dayArrival: "Mon",
    //   DepartureCity: "Bangalore",
    //   ArrivalCity: "Mumbai",
    // });
    // localStorage.setItem(
    //   "SearchData",
    //   JSON.stringify({
    //     source: BLR,
    //     destination: CUU,
    //     dayDeparture: Mon,
    //     dayArrival: Mon,
    //     DepartureCity: Bangalore,
    //     ArrivalCity: Mumbai,
    //   })
    // );
  };

  return (
    <>
      <div className="middle-section">
        <div>
          <h1>Search Flights Here</h1>
          <h2>Enjoy hassle free bookings with Cleartrip</h2>
        </div>
        <FlightSearchCard icon={<FontAwesomeIcon icon={faArrowRight} />} />
        <div>
          <h1 className="popular-search">Popular Search</h1>
          <div className="cards">
            {/* <Link to="/flightsearch"> */}
            <div className="cards-data" onClick={handleFlightSearch}>
              <div className="card-innerdata">
                <span>Bangalore to Mumbai</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  Next Week
                </span>
              </div>
              <Arrow />
            </div>
            {/* </Link> */}
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Bangalore to Delhi</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  Next Week
                </span>
              </div>
              <Arrow />
            </div>
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Bangalore to Goa </span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  Next Week
                </span>
              </div>
              <Arrow />
            </div>
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Mumbai to Bangalore</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  Next Week
                </span>
              </div>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
