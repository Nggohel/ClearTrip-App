import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../styles/MainSection.css";

const FlightCalendar = ({ StartDay, EndDay }) => {
  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const currentDate = new Date();

  const maxDate = new Date();
  maxDate.setMonth(currentDate.getMonth() + 9);

  useEffect(() => {
    const dayOfstart = startDate.toLocaleDateString(undefined, {
      weekday: "short",
    });
    const dayOfEnd = endDate.toLocaleDateString(undefined, {
      weekday: "short",
    });

    StartDay(dayOfstart);
    EndDay(dayOfEnd);
  }, [startDate, endDate, EndDay, EndDay]);

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
