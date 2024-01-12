import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightPage from "../Pages/FlightPage";
import FlightReviewItinerary from "./Flights/FlightReviewItinerary";
import SearchFlight from "./Flights/SearchFlight";
import HotelPage from "../Pages/HotelPage";
import HotelSearchPage from "../Pages/HotelSearchPage";
import HotelDetailsPage from "./Hotel/HotelDetailsPage";
import HotelConfirmationPage from "../Pages/HotelConfirmationPage";
import { FlightContextProvider } from "../Hooks/useFlightContext";
function App() {
  return (
    <FlightContextProvider>
      <>
        {/* <LoginPage /> */}
        <Router>
          <Routes>
            <Route path="/" element={<FlightPage />} />
            <Route path="/search" element={<SearchFlight />} />
            <Route
              path="/reviewitinerary"
              element={<FlightReviewItinerary />}
            />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/hotelsearch" element={<HotelSearchPage />} />
            <Route path="/allhoteldetails" element={<HotelDetailsPage />} />
            <Route
              path="/hotelconfirmationpage"
              element={<HotelConfirmationPage />}
            />
          </Routes>
        </Router>
      </>
    </FlightContextProvider>
  );
}

export default App;
