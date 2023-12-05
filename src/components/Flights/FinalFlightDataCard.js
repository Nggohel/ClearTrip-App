import { useNavigate } from "react-router-dom";
import SearchFlightLogo from "../../Assests/Images/SearchFlightLogo";
import "./../../styles/FinalFlightDataCard.css";
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/UseFetch";
function FinalFlightDataCard() {
  const navigate = useNavigate();
  const {
    data: flightsData,
    isLoading,
    isError,
    setUrl: setFlightsUrl,
    request: fetchFlightsData,
  } = useFetch("");

  // const [flightsData, setFlightsData] = useState([]);
  const [leftClick, setLeftClick] = useState(false);
  const [SelectFlightData, setSelectFlightData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set the URL for fetching flights data
    const searchData = JSON.parse(localStorage.getItem("SearchData"));
    const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${searchData.source}","destination":"${searchData.destination}"}&day=${searchData.day}`;

    // Pass headers as part of the options
    const options = {
      headers: {
        projectID: "d0hy5azls1gu",
      },
    };

    setFlightsUrl(url);
    fetchFlightsData(options);
  }, []);
  // fetchFlightsData

  const handleBookFlight = () => {
    navigate("/reviewitinerary");
  };

  console.log("flightsData:", flightsData?.data.flights);

  // const flightsData = getData.data.flights;
  // let data = JSON.parse(localStorage.getItem("SearchData"));

  // console.log(data);

  // const getData = async () => {
  //   const url = `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${data.source}","destination":"${data.destination}"}&day=${data.day}`;
  //   try {
  //     const response = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         projectID: "d0hy5azls1gu",
  //       },
  //     });
  //     const json = await response.json();
  //     const getflightData = json.data.flights;
  //     setFlightsData(getflightData);
  //     console.log(flightsData);
  //     // return json;
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const handleLeftFlightClick = (flight) => {
    setLeftClick(true);
    setSelectFlightData(flight);
  };

  console.log(SelectFlightData);
  console.log(data);

  return (
    <>
      <div className="flightsdata">
        <div className="final-flight-data">
          {leftClick && (
            <div className="left">
              <div className="left-div logo">
                <span>
                  <SearchFlightLogo />
                </span>
                <span className="flight-id">
                  {SelectFlightData.flightID.split("-")[0]}
                </span>
              </div>
              <div className="left-div flight-time">
                <span>{SelectFlightData.departureTime}</span>
                <span>{SelectFlightData.source}</span>
              </div>
              <div className="left-div">
                <span className="flight-duration">
                  {SelectFlightData.duration} hr
                </span>
                <hr></hr>
                <span className="flight-stop">
                  {SelectFlightData.stops} stop
                </span>
              </div>
              <div className="left-div flight-time">
                <span>{SelectFlightData.arrivalTime}</span>
                <span>{SelectFlightData.destination}</span>
              </div>
            </div>
          )}

          {/* <div className="left">
            <div className="left-div">
                <span>logo</span>
                <span>logoname</span>
              </div>
              <div className="left-div">
                <span>time</span>
                <span>place</span>
              </div>
              <div className="left-div">
                <span>time</span>
                <hr></hr>
                <span>place</span>
              </div>
              <div className="left-div">
                <span>time</span>
                <span>place</span>
              </div>
            </div> */}

          {/* <div className="right"> */}

          <div className="left">
            <div className="left-div">
              <span>logo</span>
              <span>logoname</span>
            </div>
            <div className="left-div">
              <span>time</span>
              <span>place</span>
            </div>
            <div className="left-div">
              <span>time</span>
              <hr></hr>
              <span>place</span>
            </div>
            <div className="left-div">
              <span>time</span>
              <span>place</span>
            </div>
          </div>
          <div className="flight-price left-div">
            <span>price</span>
            <span>offerData</span>
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
          <div className="right-flightsheadings">Price</div>
        </div>
        <div className="flight-heading">
          <div className="left-flightsheadings">
            <span>Airlines</span>
            <span>Departure</span>
            <span>Duration</span>
          </div>
          <div className="right-flightsheadings">Price</div>
        </div>
      </div>

      {/* flightcard */}

      {flightsData?.data.flights.map((flight, index) => (
        <div key={index} className="flight-data">
          <div
            className="left-flight-data"
            onClick={() => {
              handleLeftFlightClick(flight);
            }}
          >
            <div className="logo">
              <SearchFlightLogo />
              <p className="flight-id">{flight.flightID.split("-")[0]}</p>
            </div>
            <div className="middle-flight-data">
              <span className="flight-time">{flight.departureTime}</span>
              <div>
                <span className="flight-duration">{flight.duration}hr 00m</span>
                <hr></hr>
                <span className="flight-stop">{flight.stops}stop</span>
              </div>
              <span className="flight-time">{flight.arrivalTime}</span>
            </div>
            <div className="flight-price">₹{flight.ticketPrice}</div>
          </div>
          <div className="right-flight-data">
            <div className="logo">
              <SearchFlightLogo />
              <p className="flight-id">{flight.flightID.split("-")[0]}</p>
            </div>
            <div className="middle-flight-data">
              <span className="flight-time">{flight.departureTime}</span>
              <div>
                <span className="flight-duration">{flight.duration}hr 00m</span>
                <hr></hr>
                <span className="flight-stop">{flight.stops}stop</span>
              </div>
              <span className="flight-time">{flight.arrivalTime}</span>
            </div>
            <div className="flight-price">₹{flight.ticketPrice}</div>
          </div>
        </div>
      ))}
    </>
  );
}
export default FinalFlightDataCard;
