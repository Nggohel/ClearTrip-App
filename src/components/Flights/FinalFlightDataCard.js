import { useNavigate } from "react-router-dom";
import "./../../styles/FinalFlightDataCard.css";
function FinalFlightDataCard() {
  const navigate = useNavigate();

  const handleBookFlight = () => {
    navigate("/reviewitinerary");
  };

  return (
    <>
      <div className="flightsdata">
        <div className="final-flight-data">
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

      <div className="flight-data">
        <div className="left-flight-data">
          <div>
            <span>logo</span>
            <br />
            <span>logoname</span>
          </div>
          <div className="middle-flight-data">
            <span>time</span>
            <div>
              <span>duration</span>
              <hr></hr>
              <span>stop</span>
            </div>
            <span>time</span>
          </div>
          <div>Price</div>
        </div>
        <div className="right-flight-data">
          <div>
            <span>logo</span>
            <br />
            <span>logoname</span>
          </div>
          <div className="middle-flight-data">
            <span>time</span>
            <div>
              <span>duration</span>
              <hr></hr>
              <span>stop</span>
            </div>
            <span>time</span>
          </div>
          <div>Price</div>
        </div>
      </div>
    </>
  );
}
export default FinalFlightDataCard;
