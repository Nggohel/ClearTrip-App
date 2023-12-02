import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const FlightCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [maxDate, setmaxDate] = useState(new Date("2014/02/10"));
  const currentDate = new Date();

  const maxDate = new Date();

  maxDate.setMonth(currentDate.getMonth() + 9);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="EE, MMM d" // Format to display month, day, year, and day of the week
        dropdownMode="select"
        defaultValue={new Date()}
        className="date-picker"
        minDate={new Date()}
        maxDate={maxDate}
      />

      {/* <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        withPortal
      /> */}
    </div>
  );
};

export default FlightCalendar;
