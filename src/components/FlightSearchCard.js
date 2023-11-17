import "./../styles/MainSection.css";

function FlightSearchCard({ icon }) {
  return (
    <>
      <div className="middle-section-card">
        <div className="flightsearch-innerdata">
          <form>
            <span>{icon}</span>
            <select className="flightsearch-section">
              <option>One way</option>
              <option>Round trip</option>
            </select>
          </form>
          <div className="flightsearch-button">
            <button>Regular fare</button>
            <button>Student fare</button>
            <button>Senior citizen fare</button>
            <button>Armed forces fare</button>
          </div>
          <div className="flightsearch-search"></div>
          <div className="flightsearch-search-calender">
            <div>calender</div>
            <button>Search flights</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FlightSearchCard;
