import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../styles/MainSection.css";

const FlightCalendar = ({
  StartDay,
  EndDay,
  FormatedStartDate,
  startDateMonth,
  startDateYear,
}) => {
  const FlightData = JSON.parse(localStorage.getItem("SearchData"));
  // gettting in Formate we want
  const defaultStartDate = new Date(
    `${FlightData?.dayDeparture}, ${FlightData?.StartDateMonth} ${FlightData?.FormattedStartDate} ${FlightData?.StartDateYear}`
  );
  const defaultEndDate = new Date(
    `${FlightData?.dayArrival}, ${FlightData?.EndDateMonth} ${FlightData?.FormattedEndDate} ${FlightData?.EndDateYear}`
  );

  const StoreStartDate = FlightData ? defaultStartDate : new Date();
  const StoreEndDate = FlightData ? defaultEndDate : new Date();

  const [startDate, setStartDate] = useState(StoreStartDate);

  const [endDate, setEndDate] = useState(StoreEndDate);

  const currentDate = new Date();

  const maxDate = new Date();

  maxDate.setMonth(currentDate.getMonth() + 9);

  useEffect(() => {
    const dayOfstart = startDate.toLocaleDateString(undefined, {
      weekday: "short",
    });

    const FormatedstartDate = startDate.toLocaleDateString(undefined, {
      day: "numeric",
    });

    const startDatemonth = startDate.toLocaleDateString(undefined, {
      month: "short",
    });

    const startDateyear = startDate.toLocaleDateString(undefined, {
      year: "numeric",
    });

    // end date

    const dayOfEnd = endDate.toLocaleDateString(undefined, {
      weekday: "short",
    });

    const FormatedendDate = endDate.toLocaleDateString(undefined, {
      day: "numeric",
    });

    const endDatemonth = endDate.toLocaleDateString(undefined, {
      month: "short",
    });

    const endDateyear = endDate.toLocaleDateString(undefined, {
      year: "numeric",
    });

    StartDay(dayOfstart, FormatedstartDate, startDatemonth, startDateyear);

    EndDay(dayOfEnd, FormatedendDate, endDatemonth, endDateyear);
  }, [
    startDate,
    endDate,
    StartDay,
    EndDay,
    FormatedStartDate,
    startDateMonth,
    startDateYear,
  ]);

  return (
    <div className="from-or-to-date">
      <DatePicker
        selected={startDate}
        dateFormat="EE, MMM d"
        onChange={(date) => setStartDate(date)}
        selectsStart
        minDate={startDate}
        className="from-or-to-datepicker"
      />

      <svg width="1" height="36" viewBox="0 0 1 36" fill="none">
        <line
          x1="0.5"
          y1="2.18557e-8"
          x2="0.499998"
          y2="36"
          stroke="#E6E6E6"
        ></line>
      </svg>

      <DatePicker
        selected={endDate}
        dateFormat="EE, MMM d"
        onChange={(date) => setEndDate(date)}
        selectsEnd
        minDate={startDate}
        maxDate={maxDate}
        className="from-or-to-datepicker"
      />
    </div>
  );
};

export default FlightCalendar;
