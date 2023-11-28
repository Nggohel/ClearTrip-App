import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LaptopApp from "./LaptopApp";
import FlightReviewItinerary from "./Flights/FlightReviewItinerary";
import SearchFlight from "./Flights/SearchFlight";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LaptopApp />} />
          <Route path="/search" element={<SearchFlight />} />
          <Route path="/reviewitinerary" element={<FlightReviewItinerary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
