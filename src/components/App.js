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
import LoginPage from "../Pages/LoginPage";
import ConfirmationPage from "./Flights/ConfirmationPage";
import { LoginContextProvider } from "../Hooks/LoginContext";
function App() {
  return (
    <FlightContextProvider>
      <LoginContextProvider>
        <>
          <Router>
            <Routes>
              <Route path="/" element={<FlightPage />} />
              <Route path="/loginpage" element={<LoginPage />} />
              <Route path="/flightsearch" element={<SearchFlight />} />
              <Route
                path="/reviewitinerary"
                element={<FlightReviewItinerary />}
              />
              <Route
                path="/bookingconfirmation"
                element={<ConfirmationPage />}
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
      </LoginContextProvider>
    </FlightContextProvider>
  );
}

export default App;
