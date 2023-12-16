import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlightPage from "../Pages/FlightPage";
import FlightReviewItinerary from "./Flights/FlightReviewItinerary";
import SearchFlight from "./Flights/SearchFlight";
import HotelPage from "../Pages/HotelPage";
import HotelSearchPage from "../Pages/HotelSearchPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FlightPage />} />
          <Route path="/search" element={<SearchFlight />} />
          <Route path="/reviewitinerary" element={<FlightReviewItinerary />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/hotelsearch" element={<HotelSearchPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
