// FlightContext.js
import React, { createContext, useState, useContext } from "react";

const FlightContext = createContext();

export const FlightContextProvider = ({ children }) => {
  const [rangeValue, setRangeValue] = useState(3483);
  const [stops, setStops] = useState("");
  const [departuretime, setDeparturetime] = useState("");
  const [duration, setDuration] = useState("");
  const [isApply, setIsApply] = useState(false);

  const contextValue = {
    rangeValue,
    setRangeValue,
    stops,
    setStops,
    departuretime,
    duration,
    setDeparturetime,
    setDuration,
    isApply,
    setIsApply,
  };

  return (
    <FlightContext.Provider value={contextValue}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => useContext(FlightContext);
