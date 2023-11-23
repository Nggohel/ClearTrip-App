import ArrowItinerary from "../../Assests/Images/ArrowItinerary";
import AxisLogo from "../../Assests/Images/AxisLogo";
import Rupees from "../../Assests/Images/AxisbankLogo/Rupees";
import Clock from "../../Assests/Images/Clock";
import Dottedline from "../../Assests/Images/Dottedline";
import Flight6E from "../../Assests/Images/Flight6E";
import "../../styles/FlightReviewItinerary.css";
import Seat from "../../Assests/Images/AxisbankLogo/Seat";
import Cancel from "../../Assests/Images/AxisbankLogo/Cancel";
import Dining from "../../Assests/Images/AxisbankLogo/Dining";
function LeftFlightReviewItinerary() {
  return (
    <>
      <div className="review-leftside">
        <div className="heading-itinerary">
          <div className="no-heading">1</div>
          <h2>Review Your Itinerary</h2>
        </div>

        <div className="flight-itinerary-data">
          {/* title */}
          <div className="flight-itinerary-title">
            <div className="flight-location">
              <span className="flight-location-span">Bangalore</span>
              <ArrowItinerary />
              <span className="flight-location-span">Mumbai</span>
            </div>
            <div>Wed,22 Nov 2023</div>
          </div>
          {/* flight details 1*/}
          <div className="flight-review-details">
            <div className="flight-name-details">
              <div>
                <Flight6E />
                <div>
                  <p className="name-details">IndiGo</p>
                </div>
                <div>
                  <p className="name-details">6E-578</p>
                  <p className="name-details">Econmy</p>
                </div>
              </div>
              <div>
                <Dottedline />
              </div>
            </div>
            <div className="flight-time-port-details">
              <div className="flight-port-details">
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  21:05
                </span>
                <span style={{ fontSize: "20px" }}>BLR</span>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Kempegowda International Airport, Bangalore, Terminal 1
                </span>
              </div>
              <div style={{ display: "flex", marginLeft: "5px" }}>
                <Clock />
                <span>1h 10m</span>
              </div>
              <div className="flight-port-details">
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  22:30
                </span>
                <span style={{ fontSize: "20px" }}>IXE</span>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Bajpe, Mangalore, Terminal
                </span>
              </div>
            </div>
          </div>

          {/* header layover */}
          <div className="layover-details">
            <span className="layover-location">
              Layover in Bajpe, Mangalore (IXE)
            </span>
            <span className="layover-time">Short layover 1h 15m</span>
          </div>
          {/* flight details 2 */}
          <div className="flight-review-details">
            <div className="flight-name-details">
              <div>
                <Flight6E />
                <div>
                  <p className="name-details">IndiGo</p>
                </div>
                <div>
                  <p className="name-details">6E-578</p>
                  <p className="name-details">Econmy</p>
                </div>
              </div>
              <div>
                <Dottedline />
              </div>
            </div>
            <div className="flight-time-port-details">
              <div className="flight-port-details">
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  21:05
                </span>
                <span style={{ fontSize: "20px" }}>BLR</span>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Kempegowda International Airport, Bangalore, Terminal 1
                </span>
              </div>
              <div style={{ display: "flex", marginLeft: "5px" }}>
                <Clock />
                <span>1h 10m</span>
              </div>
              <div className="flight-port-details">
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  22:30
                </span>
                <span style={{ fontSize: "20px" }}>IXE</span>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Bajpe, Mangalore, Terminal
                </span>
              </div>
            </div>
          </div>
          {/* flight details 3*/}

          <div className="flight-review-details">
            <div className="flight-name-details">
              <div>
                <Flight6E />
                <div>
                  <p className="name-details">IndiGo</p>
                </div>
                <div>
                  <p className="name-details">6E-578</p>
                  <p className="name-details">Econmy</p>
                </div>
              </div>
              <div>
                <Dottedline />
              </div>
            </div>
            <div className="flight-time-port-details">
              <div className="flight-port-details">
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  21:05
                </span>
                <span style={{ fontSize: "20px" }}>BLR</span>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Kempegowda International Airport, Bangalore, Terminal 1
                </span>
              </div>
              <div style={{ display: "flex", marginLeft: "5px" }}>
                <Clock />
                <span>1h 10m</span>
              </div>
              <div className="flight-port-details">
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  22:30
                </span>
                <span style={{ fontSize: "20px" }}>IXE</span>
                <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Bajpe, Mangalore, Terminal
                </span>
              </div>
            </div>
          </div>

          {/* Axis bank card */}
          <div className="axisbank-card">
            <div className="axisbank-heading">
              <p>Exclusive on Axis Bank credit cards</p>
              <AxisLogo />
            </div>
            <hr></hr>
            <div className="axisbank-offer">
              <div style={{ display: "flex", gap: "70px" }}>
                <div className="axisbank-offer-col-one">
                  <div>
                    <span>
                      <Rupees />
                    </span>
                    <span>No convenience Fee</span>
                  </div>
                  <div>
                    <span>
                      <Seat />
                    </span>
                    <span>Free seat up to ₹700</span>
                  </div>
                </div>
                <div className="axisbank-offer-col">
                  <div>
                    <span>
                      <Cancel />
                    </span>
                    <span>Free cancellation or date change at ₹1</span>
                  </div>
                  <div>
                    <span>
                      <Dining />
                    </span>
                    <span>Free meal up to ₹350</span>
                  </div>
                </div>
              </div>
              <button className="axisbank-btn">Check your eligibility</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftFlightReviewItinerary;
