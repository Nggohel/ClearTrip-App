import LaptopApp from "./LaptopApp";
import SearchFlightsNavBar from "./SearchFlightsNavBar";
import FlightsFilters from "./FlightsFilters";
import SearchFlightData from "./SearchFlightData";
function App() {
  return (
    <>
      {/* <LaptopApp /> */}
      <SearchFlightsNavBar />
      <div style={{ display: "flex", marginTop: "20px" }}>
        <FlightsFilters />
        <SearchFlightData />
      </div>
    </>
  );
}

export default App;
