import { useNavigate } from "react-router-dom";
import SearchFlightLogo from "../../Assests/Images/SearchFlightLogo";
import "./../../styles/FinalFlightDataCard.css";
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/UseFetch";
import Uparrow from "../../Assests/Uparrow";
import { useFlightContext } from "../../Hooks/useFlightContext";

function FinalFlightDataCard() {
  const { filteredObject, checkboxValue, searchData } = useFlightContext();

  // console.log(searchNavData, "NavBar Data");

  // const Source = searchNavData?.source || searchData?.source;
  // const Destination = searchNavData?.destination || searchData?.destination;
  // const DayDeparture = searchNavData?.dayDeparture || ;
  // const Source = searchData?.source || searchNavData?.source;
  // const Source = searchData?.source || searchNavData?.source;

  const [DepartureFilterData, setdepartureFilterData] = useState();
  const [arrivalFilterData, setArrivalFilterData] = useState(null);

  const [leftClick, setLeftClick] = useState(false);
  const [rightClick, setRightClick] = useState(false);
  const [isDepatureFlightData, setisDepatureFlightData] = useState(null);
  const [isArrivalFlightData, setisArrivalFlightData] = useState(null);
  const [leftside, setLeftside] = useState("card-active");

  // console.log(checkboxValue, "checkboxValue");
  // Object.entries(checkboxValue)
  // above part converts the checkboxValue object into an array of [key, value] pairs.
  //.filter(([key, value]) => value (remove entries where the value is falsy (empty string, null, undefined, false, 0))
  // Object.fromEntries(): Finally, this part converts the filtered array of [key, value] pairs back into an object

  console.log("String", JSON.stringify(filteredObject));

  const navigate = useNavigate();

  // getting Data searchData

  const {
    data: departuredata,
    isLoading,
    isError,
  } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search=
    {"source":"${searchData?.source}","destination":"${searchData?.destination}"}
    &day=${searchData?.dayDeparture}`,
    "GET"
  );
  
  // console.log("coming Data", departuredata);

  const {
    data: arrivalData,
    isLoading: arrivalIsLoading,
    isError: arrivalIsError,
  } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search=
    {"source":"${searchData?.destination}","destination":"${searchData?.source}"}
    &day=${searchData?.dayArrival}`,
    "GET"
  );

  // getting DepartureData filteredObject

  const fetchDepartureData = async () => {
    try {
      if (filteredObject && Object.keys(filteredObject).length > 0) {
        const DepartureapiUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${
          searchData.source
        }","destination":"${searchData.destination}"}&day=${
          searchData.dayDeparture
        }&filter=${JSON.stringify(filteredObject)}`;

        const response = await fetch(DepartureapiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            projectID: "d0hy5azls1gu",
          },
        });

        const result = await response.json();
        setdepartureFilterData(result.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log(DepartureFilterData, "departureFilterData");

  // getting ArrivalData filteredObject

  const fetchArrivalData = async () => {
    try {
      if (filteredObject && Object.keys(filteredObject).length > 0) {
        const ArrivalapiUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${
          searchData.destination
        }","destination":"${searchData.source}"}&day=${
          searchData.dayDeparture
        }&filter=${JSON.stringify(filteredObject)}`;

        const response = await fetch(ArrivalapiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            projectID: "d0hy5azls1gu",
          },
        });

        const result = await response.json();
        setArrivalFilterData(result.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  // calling Function Here
  useEffect(() => {
    fetchDepartureData();
    fetchArrivalData();
  }, [filteredObject]);

  // Showing Current Card Active Uisng both Function
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

  // navigate to Booking Deatails Page

  const handleBookFlight = () => {
    const departureId = leftClick
      ? isDepatureFlightData._id
      : departuredata?.flights[0]._id;

    const arrivalId = rightClick
      ? isArrivalFlightData._id
      : arrivalData?.flights[0]._id;

    localStorage.setItem("ArrivalId", arrivalId);
    localStorage.setItem("DepartureId", departureId);

    navigate("/reviewitinerary");
  };

  // if Data Not Found that time we use that

  const handleResetFilter = () => {
    window.location.reload();
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
                  {isDepatureFlightData?.flightID?.split("-")[0]}
                </span>
              </div>
              <div className="left-div flight-time">
                <span>{isDepatureFlightData?.departureTime}</span>
                <span className="place">{isDepatureFlightData?.source}</span>
              </div>
              <div className="left-div">
                <span className="flight-duration">
                  {isDepatureFlightData?.duration} hr
                </span>
                <hr></hr>
                <span className="flight-stop">
                  {isDepatureFlightData?.stops} stop
                </span>
              </div>
              <div className="left-div flight-time">
                <span>{isDepatureFlightData?.arrivalTime}</span>
                <span className="place">
                  {isDepatureFlightData?.destination}
                </span>
              </div>
            </div>
          ) : DepartureFilterData == null ||
            DepartureFilterData?.flights.length > 0 ? (
            <div>
              <div className="left">
                <div className="left-div logo">
                  <span>
                    <SearchFlightLogo />
                  </span>
                  <span className="flight-id">
                    {departuredata?.flights[0]?.flightID?.split("-")[0]}
                  </span>
                </div>
                <div className="left-div flight-time">
                  <span>{departuredata?.flights[0]?.departureTime}</span>
                  <span className="place">
                    {departuredata?.flights[0]?.source}
                  </span>
                </div>
                <div className="left-div">
                  <span className="flight-duration">
                    {departuredata?.flights[0]?.duration} hr
                  </span>
                  <hr></hr>
                  <span className="flight-stop">
                    {departuredata?.flights[0]?.stops} stop
                  </span>
                </div>
                <div className="left-div flight-time">
                  <span>{departuredata?.flights[0]?.arrivalTime}</span>
                  <span className="place">
                    {departuredata?.flights[0]?.destination}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="notfound-container">
              <h3 className="notfound-title">We couldn't find flights</h3>
            </div>
          )}

          {/*"right" click  */}

          {rightClick ? (
            <div className="right">
              <div className="right-div logo">
                <span>
                  <SearchFlightLogo />
                </span>
                <span className="flight-id">
                  {isArrivalFlightData?.flightID?.split("-")[0]}
                </span>
              </div>
              <div className="right-div flight-time">
                <span>{isArrivalFlightData?.departureTime}</span>
                <span className="place">{isArrivalFlightData?.source}</span>
              </div>
              <div className="right-div">
                <span className="flight-duration">
                  {isArrivalFlightData?.duration} hr
                </span>
                <hr></hr>
                <span className="flight-stop">
                  {isArrivalFlightData?.stops} stop
                </span>
              </div>
              <div className="right-div flight-time">
                <span>{isArrivalFlightData?.arrivalTime}</span>
                <span className="place">
                  {isArrivalFlightData?.destination}
                </span>
              </div>
            </div>
          ) : arrivalFilterData == null ||
            arrivalFilterData?.flights.length > 0 ? (
            <div>
              <div className="right">
                <div className="right-div logo">
                  <span>
                    <SearchFlightLogo />
                  </span>
                  <span className="flight-id">
                    {arrivalData?.flights[0]?.flightID?.split("-")[0]}
                  </span>
                </div>
                <div className="right-div flight-time">
                  <span>{arrivalData?.flights[0]?.departureTime}</span>
                  <span className="place">
                    {arrivalData?.flights[0]?.source}
                  </span>
                </div>
                <div className="right-div">
                  <span className="flight-duration">
                    {arrivalData?.flights[0]?.duration} hr
                  </span>
                  <hr></hr>
                  <span className="flight-stop">
                    {arrivalData?.flights[0]?.stops} stop
                  </span>
                </div>
                <div className="right-div flight-time">
                  <span>{arrivalData?.flights[0]?.arrivalTime}</span>
                  <span className="place">
                    {arrivalData?.flights[0]?.destination}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="notfound-container">
              <h3 className="notfound-title">We couldn't find flights</h3>
            </div>
          )}

          <div className="flight-price left-div">
            {leftClick && rightClick ? (
              <span>
                {isArrivalFlightData?.ticketPrice +
                  isDepatureFlightData?.ticketPrice}
              </span>
            ) : (
              departuredata?.flights &&
              arrivalData?.flights && (
                <span>
                  {arrivalData.flights[0]?.ticketPrice +
                    departuredata.flights[0]?.ticketPrice}
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
          </div>
          <div className="left-flightsheadings">
            <span>Departure Time</span>
            <span>Duration</span>
            <span>Arrival Time</span>
          </div>
          <div className="right-flightsheadings">
            Price
            <Uparrow />
          </div>
        </div>
        <div className="flight-heading">
          <div className="left-flightsheadings">
            <span>Airlines</span>
          </div>
          <div className="left-flightsheadings">
            <span>Departure Time</span>
            <span>Duration</span>
            <span>Arrival Time</span>
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
          {(filteredObject && Object.keys(filteredObject).length == 0) ||
          (checkboxValue.stops == "" &&
            checkboxValue.duration == "" &&
            checkboxValue.departureTime == "" &&
            checkboxValue.ticketPrice == 2000 &&
            departuredata?.flights) ? (
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
                  <p className="flight-id">{flight?.flightID?.split("-")[0]}</p>
                </div>
                <div className="middle-flight-data">
                  <div className="source-and-time">
                    <span className="flight-time">{flight?.departureTime}</span>
                    <span className="place">{flight?.source}</span>
                  </div>
                  <div>
                    <span className="flight-duration">
                      {flight?.duration}hr 00m
                    </span>
                    <hr></hr>
                    <span className="flight-stop">{flight?.stops} stop</span>
                  </div>
                  <div className="arrival-and-time">
                    <span className="flight-time">{flight?.arrivalTime}</span>
                    <span className="place">{flight?.destination}</span>
                  </div>
                </div>
                <div className="flight-price">₹{flight?.ticketPrice}</div>
              </div>
            ))
          ) : DepartureFilterData == null ||
            DepartureFilterData.flights.length == 0 ? (
            <div className="notfound-container">
              <h3 className="notfound-title">
                We couldn't find flights to match your filters
              </h3>
              <p className="notfound-para">
                Please reset your filters to see flights
              </p>
              <button className="notfound-btn" onClick={handleResetFilter}>
                Reset Filters
              </button>
            </div>
          ) : (
            DepartureFilterData?.flights.map((filteredFlight, index) => (
              <div
                key={index}
                className={
                  index == 0
                    ? "left-flight-data card-active"
                    : "left-flight-data"
                }
                onClick={(e) => {
                  handleLeftFlightClick(e, filteredFlight);
                }}
              >
                <div className="logo">
                  <SearchFlightLogo />
                  <p className="flight-id">
                    {filteredFlight?.flightID?.split("-")[0]}
                  </p>
                </div>
                <div className="middle-flight-data">
                  <div className="source-and-time">
                    <span className="flight-time">
                      {filteredFlight?.departureTime}
                    </span>
                    <span className="place">{filteredFlight?.source}</span>
                  </div>
                  <div>
                    <span className="flight-duration">
                      {filteredFlight?.duration}hr 00m
                    </span>
                    <hr></hr>
                    <span className="flight-stop">
                      {filteredFlight?.stops} stop
                    </span>
                  </div>
                  <div className="arrival-and-time">
                    <span className="flight-time">
                      {filteredFlight?.arrivalTime}
                    </span>
                    <span className="place">{filteredFlight?.destination}</span>
                  </div>
                </div>
                <div className="flight-price">
                  ₹{filteredFlight?.ticketPrice}
                </div>
              </div>
            ))
          )}
        </div>

        {/* rightSide */}
        <div className="rightside-flight-data">
          {(filteredObject && Object.keys(filteredObject).length == 0) ||
          (checkboxValue.stops == "" &&
            checkboxValue.duration == "" &&
            checkboxValue.departureTime == "" &&
            checkboxValue.ticketPrice == 2000 &&
            arrivalData?.flights) ? (
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
                  <p className="flight-id">{flight?.flightID?.split("-")[0]}</p>
                </div>
                <div className="middle-flight-data">
                  <div className="source-and-time">
                    <span className="flight-time">{flight?.departureTime}</span>
                    <span className="place">{flight?.source}</span>
                  </div>
                  <div>
                    <span className="flight-duration">
                      {flight?.duration}hr 00m
                    </span>
                    <hr></hr>
                    <span className="flight-stop">{flight?.stops} stop</span>
                  </div>
                  <div className="arrival-and-time">
                    <span className="flight-time">{flight?.arrivalTime}</span>
                    <span className="place">{flight?.destination}</span>
                  </div>
                </div>
                <div className="flight-price">₹{flight?.ticketPrice}</div>
              </div>
            ))
          ) : arrivalFilterData == null ||
            arrivalFilterData.flights.length == 0 ? (
            <div className="notfound-container">
              <h3 className="notfound-title">
                We couldn't find flights to match your filters
              </h3>
              <p className="notfound-para">
                Please reset your filters to see flights
              </p>
              <button className="notfound-btn" onClick={handleResetFilter}>
                Reset Filters
              </button>
            </div>
          ) : (
            arrivalFilterData?.flights.map((filteredFlight, index) => (
              <div
                className={
                  index == 0
                    ? "right-flight-data card-active"
                    : "right-flight-data"
                }
                id="right-data"
                key={index}
                onClick={(e) => {
                  handleRightFlightClick(e, filteredFlight);
                }}
              >
                <div className="logo">
                  <SearchFlightLogo />
                  <p className="flight-id">
                    {filteredFlight?.flightID?.split("-")[0]}
                  </p>
                </div>
                <div className="middle-flight-data">
                  <div className="source-and-time">
                    <span className="flight-time">
                      {filteredFlight?.departureTime}
                    </span>
                    <span className="place">{filteredFlight?.source}</span>
                  </div>
                  <div>
                    <span className="flight-duration">
                      {filteredFlight?.duration}hr 00m
                    </span>
                    <hr></hr>
                    <span className="flight-stop">
                      {filteredFlight?.stops} stop
                    </span>
                  </div>
                  <div className="arrival-and-time">
                    <span className="flight-time">
                      {filteredFlight?.arrivalTime}
                    </span>
                    <span className="place">{filteredFlight?.destination}</span>
                  </div>
                </div>
                <div className="flight-price">
                  ₹{filteredFlight?.ticketPrice}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default FinalFlightDataCard;
