import LaptopApp from "./LaptopApp";
// import SearchFlightsNavBar from "./SearchFlightsNavBar";
import SearchFlightsNavBar from "./Flights/SearchFlightsNavBar";
import FlightsFilters from "./Flights/FlightsFilters";
import SearchFlightData from "./Flights/SearchFlightData";
import FlightReviewItinerary from "./Flights/FlightReviewItinerary";

function App() {
  return (
    <>
      {/* <LaptopApp /> */}
      {/* <SearchFlightsNavBar /> */}
      {/* <div style={{ display: "flex", marginTop: "20px" }}>
        <FlightsFilters />
        <SearchFlightData />
      </div> */}
      <FlightReviewItinerary />
    </>
  );
}

export default App;
