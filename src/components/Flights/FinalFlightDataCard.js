import { useNavigate } from "react-router-dom";
import SearchFlightLogo from "../../Assests/Images/SearchFlightLogo";
import "./../../styles/FinalFlightDataCard.css";
import { useState } from "react";
import useFetch from "../../Hooks/UseFetch";
import Uparrow from "../../Assests/Uparrow";

function FinalFlightDataCard({ checkboxValues, rangeValue }) {
  console.log("checkboxValues", checkboxValues);
  console.log("checkboxValues", rangeValue);
  const navigate = useNavigate();
  const searchData = JSON.parse(localStorage.getItem("SearchData"));

  const {
    data: departuredata,
    isLoading,
    isError,
  } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search=
    {"source":"${searchData.source}","destination":"${searchData.destination}"}
    &day=${searchData.dayDeparture}`,
    "GET"
  );

  const {
    data: arrivalData,
    isLoading: arrivalIsLoading,
    isError: arrivalIsError,
  } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search=
    {"source":"${searchData.destination}","destination":"${searchData.source}"}
    &day=${searchData.dayArrival}`,
    "GET"
  );

  // console.log("arrivalData", arrivalData.flights);
  // console.log("Depaturedata", data.flights);

  const [leftClick, setLeftClick] = useState(false);
  const [rightClick, setRightClick] = useState(false);
  const [isDepatureFlightData, setisDepatureFlightData] = useState(null);
  const [isArrivalFlightData, setisArrivalFlightData] = useState(null);
  const [leftside, setLeftside] = useState("card-active");

  const handleBookFlight = () => {
    navigate("/reviewitinerary");
  };

  const handleLeftFlightClick = (e, flight) => {
    e.stopPropagation();

    document.querySelectorAll(".left-flight-data").forEach((el) => {
      el.classList.remove("card-active");
    });

    e.currentTarget.classList.add("card-active");

    setLeftClick(true);
    setisDepatureFlightData(flight);
  };

  const handleRightFlightClick = (e, flight) => {
    e.stopPropagation();

    document.querySelectorAll(".right-flight-data").forEach((el) => {
      el.classList.remove("card-active");
    });

    e.currentTarget.classList.add("card-active");

    setRightClick(true);
    setisArrivalFlightData(flight);
  };

  return (
    <>
      <div className="flightsdata">
        <div className="final-flight-data">
          {leftClick ? (
            <div className="left">
              <div className="left-div logo">
                <span>
                  <SearchFlightLogo />
                </span>
                <span className="flight-id">
                  {isDepatureFlightData.flightID.split("-")[0]}
                </span>
              </div>
              <div className="left-div flight-time">
                <span>{isDepatureFlightData.departureTime}</span>
                <span className="place">{isDepatureFlightData.source}</span>
              </div>
              <div className="left-div">
                <span className="flight-duration">
                  {isDepatureFlightData.duration} hr
                </span>
                <hr></hr>
                <span className="flight-stop">
                  {isDepatureFlightData.stops} stop
                </span>
              </div>
              <div className="left-div flight-time">
                <span>{isDepatureFlightData.arrivalTime}</span>
                <span className="place">
                  {isDepatureFlightData.destination}
                </span>
              </div>
            </div>
          ) : (
            departuredata?.flights &&
            departuredata?.flights.length > 0 && (
              <div>
                <div className="left">
                  <div className="left-div logo">
                    <span>
                      <SearchFlightLogo />
                    </span>
                    <span className="flight-id">
                      {departuredata.flights[0].flightID.split("-")[0]}
                    </span>
                  </div>
                  <div className="left-div flight-time">
                    <span>{departuredata.flights[0].departureTime}</span>
                    <span className="place">
                      {departuredata.flights[0].source}
                    </span>
                  </div>
                  <div className="left-div">
                    <span className="flight-duration">
                      {departuredata.flights[0].duration} hr
                    </span>
                    <hr></hr>
                    <span className="flight-stop">
                      {departuredata.flights[0].stops} stop
                    </span>
                  </div>
                  <div className="left-div flight-time">
                    <span>{departuredata.flights[0].arrivalTime}</span>
                    <span className="place">
                      {departuredata.flights[0].destination}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}

          {/* <div className="right"> */}

          {rightClick ? (
            <div className="right">
              <div className="right-div logo">
                <span>
                  <SearchFlightLogo />
                </span>
                <span className="flight-id">
                  {isArrivalFlightData.flightID.split("-")[0]}
                </span>
              </div>
              <div className="right-div flight-time">
                <span>{isArrivalFlightData.departureTime}</span>
                <span className="place">{isArrivalFlightData.source}</span>
              </div>
              <div className="right-div">
                <span className="flight-duration">
                  {isArrivalFlightData.duration} hr
                </span>
                <hr></hr>
                <span className="flight-stop">
                  {isArrivalFlightData.stops} stop
                </span>
              </div>
              <div className="right-div flight-time">
                <span>{isArrivalFlightData.arrivalTime}</span>
                <span className="place">{isArrivalFlightData.destination}</span>
              </div>
            </div>
          ) : (
            arrivalData?.flights &&
            arrivalData?.flights.length > 0 && (
              <div>
                <div className="right">
                  <div className="right-div logo">
                    <span>
                      <SearchFlightLogo />
                    </span>
                    <span className="flight-id">
                      {arrivalData.flights[0].flightID.split("-")[0]}
                    </span>
                  </div>
                  <div className="right-div flight-time">
                    <span>{arrivalData.flights[0].departureTime}</span>
                    <span className="place">
                      {arrivalData.flights[0].source}
                    </span>
                  </div>
                  <div className="right-div">
                    <span className="flight-duration">
                      {arrivalData.flights[0].duration} hr
                    </span>
                    <hr></hr>
                    <span className="flight-stop">
                      {arrivalData.flights[0].stops} stop
                    </span>
                  </div>
                  <div className="right-div flight-time">
                    <span>{arrivalData.flights[0].arrivalTime}</span>
                    <span className="place">
                      {arrivalData.flights[0].destination}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}

          <div className="flight-price left-div">
            {leftClick && rightClick ? (
              <span>
                {isArrivalFlightData.ticketPrice +
                  isDepatureFlightData.ticketPrice}
              </span>
            ) : (
              departuredata?.flights &&
              arrivalData?.flights && (
                <span>
                  {arrivalData.flights[0].ticketPrice +
                    departuredata.flights[0].ticketPrice}
                </span>
              )
            )}
            <span
              style={{ color: "#51b12e", fontWeight: "600", fontSize: "10px" }}
            >
              Get ₹462 off with CTDOM
            </span>
          </div>
          <button className="flight-finaldata-btn" onClick={handleBookFlight}>
            Book now
          </button>
        </div>

        {/* </div> */}

        <div className="full-flights-details">
          <a>Flights details</a>
        </div>
      </div>
      <div className="flight-headings">
        <div className="flight-heading">
          <div className="left-flightsheadings">
            <span>Airlines</span>
            <span>Departure</span>
            <span>Duration</span>
          </div>
          <div className="right-flightsheadings">
            Price
            <Uparrow />
          </div>
        </div>
        <div className="flight-heading">
          <div className="left-flightsheadings">
            <span>Airlines</span>
            <span>Departure</span>
            <span>Duration</span>
          </div>
          <div className="right-flightsheadings">
            Price
            <Uparrow />
          </div>
        </div>
      </div>

      {/*Api fetch flightcard */}

      <div className="flight-data">
        <div className="leftside-flight-data">
          {departuredata?.flights &&
            departuredata?.flights.map((flight, index) => (
              <div
                key={index}
                className={
                  index == 0
                    ? "left-flight-data card-active"
                    : "left-flight-data"
                }
                onClick={(e) => {
                  handleLeftFlightClick(e, flight);
                }}
              >
                <div className="logo">
                  <SearchFlightLogo />
                  <p className="flight-id">{flight.flightID.split("-")[0]}</p>
                </div>
                <div className="middle-flight-data">
                  <div className="source-and-time">
                    <span className="flight-time">{flight.departureTime}</span>
                    <span className="place">{flight.source}</span>
                  </div>
                  <div>
                    <span className="flight-duration">
                      {flight.duration}hr 00m
                    </span>
                    <hr></hr>
                    <span className="flight-stop">{flight.stops} stop</span>
                  </div>
                  <div className="arrival-and-time">
                    <span className="flight-time">{flight.arrivalTime}</span>
                    <span className="place">{flight.destination}</span>
                  </div>
                </div>
                <div className="flight-price">₹{flight.ticketPrice}</div>
              </div>
            ))}
        </div>

        {/* rightSide */}
        <div className="rightside-flight-data">
          {arrivalData?.flights &&
            arrivalData?.flights.map((flight, index) => (
              <div
                className={
                  index == 0
                    ? "right-flight-data card-active"
                    : "right-flight-data"
                }
                id="right-data"
                key={index}
                onClick={(e) => {
                  handleRightFlightClick(e, flight);
                }}
              >
                <div className="logo">
                  <SearchFlightLogo />
                  <p className="flight-id">{flight.flightID.split("-")[0]}</p>
                </div>
                <div className="middle-flight-data">
                  <div className="source-and-time">
                    <span className="flight-time">{flight.departureTime}</span>
                    <span className="place">{flight.source}</span>
                  </div>
                  <div>
                    <span className="flight-duration">
                      {flight.duration}hr 00m
                    </span>
                    <hr></hr>
                    <span className="flight-stop">{flight.stops} stop</span>
                  </div>
                  <div className="arrival-and-time">
                    <span className="flight-time">{flight.arrivalTime}</span>
                    <span className="place">{flight.destination}</span>
                  </div>
                </div>
                <div className="flight-price">₹{flight.ticketPrice}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default FinalFlightDataCard;
