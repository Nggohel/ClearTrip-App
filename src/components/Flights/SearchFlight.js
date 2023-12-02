import FlightsFilters from "./FlightsFilters";
import SearchFlightData from "./SearchFlightData";
import SearchFlightsNavBar from "./SearchFlightsNavBar";

function SearchFlight({ searchvalue }) {
  return (
    <>
      <SearchFlightsNavBar />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <FlightsFilters />
        <SearchFlightData searchvalue={searchvalue} />
      </div>
    </>
  );
}
export default SearchFlight;
