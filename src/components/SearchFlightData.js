import OfferCarousel from "./OfferCarousel";
import ICICI from "../Assests/Images/ICICI";
import FinalFlightDataCard from "./FinalFlightDataCard";
import "./../styles/SearchFlightData.css";
function SearchFlightData() {
  return (
    <div>
      <OfferCarousel
        icon={<ICICI />}
        offer={"Flat 12% off"}
        bankCard={"ICICICC"}
        card={"with ICICI Credit Cards"}
      />
      <FinalFlightDataCard />
      {/* <div className="flight-headings">
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
      <div className="flight-data">
        <div className="left-flight-data">
          <div></div>
          <div></div>
          <div>Price</div>
        </div>
        <div className="right-flight-data">
          <div></div>
          <div></div>
          <div>Price</div>
        </div>
      </div> */}
    </div>
  );
}

export default SearchFlightData;
