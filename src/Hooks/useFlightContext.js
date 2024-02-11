import React, { createContext, useState, useContext } from "react";

const FlightContext = createContext();

export const FlightContextProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(
    JSON.parse(localStorage.getItem("SearchData"))
  );

  // const [searchNavData, setSearchNavData] = useState(
  // );

  const [checkboxValue, setCheckboxValue] = useState({
    stops: "",
    departureTime: "",
    duration: "",
    ticketPrice: 2000,
  });

  const [singleApiDepartureData, setsingleApiDepartureData] = useState();
  const [singleApiArrivalData, setsingleApiArrivalData] = useState();
  const [filteredObject, setFilteredObject] = useState({});

  const departureTimeFormate = (time) => {
    if (typeof time === "string" && time.includes("-")) {
      const [startTime, endTime] = time.split("-");
      const apiDepartureTime = {
        $gte: startTime,
      };
      return apiDepartureTime;
    }
  };

  const arrivalTimeFormate = (time) => {
    if (typeof time === "string" && time.includes("-")) {
      const [startTime, endTime] = time.split("-");
      const apiDepartureTime = {
        $lte: endTime,
      };
      return apiDepartureTime;
    }
  };

  const ticketPriceFormate = (price) => {
    const apiTicketPrice = {};
    if (price === 2000) {
      apiTicketPrice["$lte"] = 6000;
    } else {
      apiTicketPrice["$lte"] = price;
    }
    apiTicketPrice["$gte"] = 2000;

    return apiTicketPrice;
  };

  const handleApplyClick = () => {
    const param = {
      stops: checkboxValue.stops,
      departureTime: departureTimeFormate(checkboxValue.departureTime),
      arrivalTime: arrivalTimeFormate(checkboxValue.departureTime),
      ticketPrice: ticketPriceFormate(checkboxValue.ticketPrice),
      duration: checkboxValue.duration,
    };

    const newFilteredObject = Object.fromEntries(
      Object.entries(param).filter(([key, value]) => value)
    );

    console.log(newFilteredObject, "newFilteredObject");
    setFilteredObject(newFilteredObject);
  };

  const [loader, setloader] = useState(true);

  const contextValue = {
    handleApplyClick,
    checkboxValue,
    setCheckboxValue,
    filteredObject,
    searchData,
    setSearchData,
    singleApiDepartureData,
    setsingleApiDepartureData,
    singleApiArrivalData,
    setsingleApiArrivalData,
    loader,
    setloader,
  };

  return (
    <FlightContext.Provider value={contextValue}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => useContext(FlightContext);
