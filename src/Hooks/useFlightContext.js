import React, { createContext, useState, useContext } from "react";

const FlightContext = createContext();

export const FlightContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(
    JSON.parse(localStorage.getItem("SearchData"))
  );
  const [checkboxValue, setCheckboxValue] = useState({
    stops: "",
    departureTime: "",
    duration: "",
    ticketPrice: 2000,
  });

  const [departureId, setDepartureId] = useState(null);
  const [arrivalId, setArrivalId] = useState(null);

  const [filteredObject, setFilteredObject] = useState({});

  const departureTimeFormate = (time) => {
    if (typeof time === "string" && time.includes("-")) {
      const [startTime, endTime] = time.split("-");
      const apiDepartureTime = {
        $lte: endTime,
        $gte: startTime,
      };
      return apiDepartureTime;
    }
  };

  const ticketPriceFormate = (price) => {
    const apiTicketPrice = {
      $lte: 6000,
      $gte: price,
    };
    return apiTicketPrice;
  };

  const handleApplyClick = () => {
    const param = {
      stops: checkboxValue.stops,
      departureTime: departureTimeFormate(checkboxValue.departureTime),
      ticketPrice: ticketPriceFormate(checkboxValue.ticketPrice),
      duration: checkboxValue.duration,
    };

    const newFilteredObject = Object.fromEntries(
      Object.entries(param).filter(([key, value]) => value)
    );

    setFilteredObject(newFilteredObject);
  };

  const contextValue = {
    handleApplyClick,
    checkboxValue,
    setCheckboxValue,
    filteredObject,
    departureId,
    arrivalId,
    setDepartureId,
    setArrivalId,
    searchData,
  };

  return (
    <FlightContext.Provider value={contextValue}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => useContext(FlightContext);
