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
import BookingSucessfullPage from "./Hotel/BookingSucessfullPage";
function App() {
  return (
    // Using Context Api Here
    <FlightContextProvider>
      <LoginContextProvider>
        <>
          {/* all Routes with Components */}
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
              <Route
                path="/allhoteldetails/:hotelId"
                element={<HotelDetailsPage />}
              />
              <Route
                path="/hotelconfirmationpage/:BookingId"
                element={<HotelConfirmationPage />}
              />
              <Route
                path="/hotelbookingsucessfull"
                element={<BookingSucessfullPage />}
              />
            </Routes>
          </Router>
        </>
      </LoginContextProvider>
    </FlightContextProvider>
  );
}

export default App;
