import FlightsFilters from "./FlightsFilters";
import SearchFlightData from "./SearchFlightData";
import SearchFlightsNavBar from "./SearchFlightsNavBar";

function SearchFlight() {
  return (
    <>
      <SearchFlightsNavBar />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <FlightsFilters />
        <SearchFlightData />
      </div>
    </>
  );
}
export default SearchFlight;
