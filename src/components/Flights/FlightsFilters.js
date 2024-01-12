import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./../../styles/FlightsFilters.css";
import { useFlightContext } from "../../Hooks/useFlightContext";
function FlightsFilters({}) {
  const {
    rangeValue,
    stops,
    isApply,
    departuretime,
    duration,
    setRangeValue,
    setStops,
    setDeparturetime,
    setDuration,
    setIsApply,
  } = useFlightContext();

  // const [rangeValue, setRangeValue] = useState(3483);

  // const [stops, setStops] = useState({
  //   "non-stop": "",
  //   "stop-one": "",
  //   "stop-two": "",
  //   "departuretime-earlymorning": false,
  //   "departuretime-morning": false,
  //   "departuretime-afternoon": false,
  //   "departuretime-evening": false,
  //   "departuretime-night": false,
  //   "arrivaltime-earlymorning": false,
  //   "arrivaltime-morning": false,
  //   "arrivaltime-afternoon": false,
  //   "arrivaltime-evening": false,
  //   "arrivaltime-night": false,
  //   "duration-hr": false,
  //   "layover-duration": false,
  // });

  // const handleCheckboxChange = (event) => {
  //   const { id, checked } = event.target;
  //   console.log(id);
  //   // console.log(value);
  //   setStops((prevValues) => ({
  //     ...prevValues,
  //     [id]: checked,
  //   }));
  // };

  const handleCheckboxChange = (value) => {
    // const { id, value, checked } = event.target;

    setStops(value === stops ? null : value);

    // setStops((prevValues) => ({
    //   // Log the values in prevValues

    //   // ...prevValues,
    //   // [id]: checked ? value : "",

    // }));
  };
  const handleDepartureTimeChange = (value) => {
    setDeparturetime(value === departuretime ? null : value);
  };
  const handleDurationChange = (value) => {
    setDuration(value === duration ? null : value);
  };
  // const handleRangeChange = (event) => {
  //   setRangeValue(parseInt(event.target.value, 10));
  // };

  const handleRangeChange = (event) => {
    const newRangeValue = parseInt(event.target.value, 10);
    console.log("New Range Value:", newRangeValue);
    setRangeValue(newRangeValue);
  };

  const handleApplyClick = () => {
    setIsApply(true);
  };

  return (
    <>
      <div className="searchflightpage-leftsection">
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <p>
            <b>Flights Filter</b>
          </p>
          <button className="filter-btn" onClick={handleApplyClick}>
            Apply
          </button>
        </div>

        {/* 1st stops */}

        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Stops</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="non-stop"
                    name="non-stop"
                    className="checkbox-input"
                    value="0"
                    checked={stops === "0"}
                    onChange={() => handleCheckboxChange("0")}
                  />
                  <label htmlFor="non-stop" className="checkbox-label">
                    0-stop
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="stop-one"
                    name="non-stop"
                    value="1"
                    checked={stops === "1"}
                    onChange={() => handleCheckboxChange("1")}
                  />
                  <label htmlFor="stop-one" className="checkbox-label">
                    1-stop
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="stop-two"
                    name="non-stop"
                    value="2"
                    checked={stops === "2"}
                    onChange={() => handleCheckboxChange("2")}
                  />
                  <label htmlFor="stop-two" className="checkbox-label">
                    2-stop
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 2nd */}

        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">
                Departure time from BLR
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="departuretime-morning"
                    name="morning"
                    value="06:00-12:00"
                    className="checkbox-input"
                    checked={departuretime === "06:00-12:00"}
                    onChange={() => handleDepartureTimeChange("06:00-12:00")}
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    Morning 06:00-12:00
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="departuretime-afternoon"
                    name="afternoon"
                    value="12:00-16:00"
                    className="checkbox-input"
                    checked={departuretime === "12:00-16:00"}
                    onChange={() => handleDepartureTimeChange("12:00-16:00")}
                  />
                  <label htmlFor="afternoon" className="checkbox-label">
                    Afternoon 12:00-16:00
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="departuretime-evening"
                    name="evening"
                    value="16:00-20:00"
                    className="checkbox-input"
                    checked={departuretime === "16:00-20:00"}
                    onChange={() => handleDepartureTimeChange("16:00-20:00")}
                  />
                  <label htmlFor="evening" className="checkbox-label">
                    Evening 16:00-20:00
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="departuretime-night"
                    name="night"
                    value="20:00-06:00"
                    checked={departuretime === "20:00-06:00"}
                    onChange={() => handleDepartureTimeChange("20:00-06:00")}
                  />
                  <label htmlFor="night" className="checkbox-label">
                    Night 20:00-06:00
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 3 */}

        {/* <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">
                Arrival time To BOM
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="arrivaltime-earlymorning"
                    name="arrivaltime-earlymorning"
                    value="24:00-8:00"
                    className="checkbox-input"
                    checked={checkboxValues["arrivaltime-earlymorning"]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="earlymorning" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Early Morning</span>
                      <span style={{ marginLeft: "15px" }}>24:00-8:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="arrivaltime-morning"
                    name="arrivaltime-morning"
                    value="08:00-12:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Morning</span>
                      <span style={{ marginLeft: "15px" }}>08:00-12:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="arrivaltime-afternoon"
                    name="arrivaltime-afternoon"
                    value="12:00-16:00"
                  />
                  <label htmlFor="afternoon" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>AfterNoon</span>
                      <span style={{ marginLeft: "15px" }}>12:00-16:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="arrivaltime-evening"
                    name="arrivaltime-evening"
                    value="16:00-20:00"
                    className="checkbox-input"
                  />
                  <label htmlFor="evening" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Evening</span>
                      <span style={{ marginLeft: "15px" }}>16:00-20:00</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="arrivaltime-night"
                    name="arrivaltime-night"
                    value="08:00-24:00"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Night</span>
                      <span style={{ marginLeft: "15px" }}>08:00-24:00</span>
                    </div>
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div> */}

        {/* 4th */}
        {/* <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">One-way price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <label htmlFor="vol" className="range-title">
                  Up to {new Intl.NumberFormat("en-IN").format(rangeValue)}
                </label>
                <br></br>
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="3000"
                  max="6,834"
                  step="1"
                  value={rangeValue}
                  onChange={handleRangeChange}
                  className="range-input"
                />

                <div className="checkbox-label">
                  <span>₹ 3000</span>
                  <span style={{ marginLeft: "115px" }}>₹6,834</span>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div> */}

        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">One-way price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <label htmlFor="vol" className="range-title">
                  Up to {new Intl.NumberFormat("en-IN").format(rangeValue)}
                </label>
                <br></br>
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="2000"
                  max="6000"
                  step="1"
                  value={rangeValue}
                  onChange={handleRangeChange}
                  className="range-input"
                />

                <div className="checkbox-label">
                  <span> ₹2000</span>
                  <span style={{ marginLeft: "115px" }}>₹6000</span>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 5th */}

        {/* <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Airlines</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="earlymorning"
                    name="earlymorning"
                    value="earlymorning"
                    className="checkbox-input"
                  />
                  <label htmlFor="earlymorning" className="checkbox-label">
                    Show multi-airline itineraries
                  </label>
                </div>
                <hr />
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="morning"
                    name="morning"
                    value="morning"
                    className="checkbox-input"
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    Air India
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="afternoon"
                    name="afternoon"
                    value="afternoon"
                  />
                  <label htmlFor="afternoon" className="checkbox-label">
                    Air India Express
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="evening"
                    name="evening"
                    value="evening"
                    className="checkbox-input"
                  />
                  <label htmlFor="evening" className="checkbox-label">
                    Akasa Air
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    IndiGo
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    SpiceJet
                  </label>
                </div>

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    Star Air
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="night"
                    name="night"
                    value="night"
                  />
                  <label htmlFor="night" className="checkbox-label">
                    Vistara
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div> */}

        {/* 6th */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Trip duration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-1"
                    name="duration"
                    value="1"
                    className="checkbox-input"
                    checked={duration === "1"}
                    onChange={() => handleDurationChange("1")}
                  />
                  <label htmlFor="duration-1" className="checkbox-label">
                    1 Hr
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-2"
                    name="duration"
                    value="2"
                    className="checkbox-input"
                    checked={duration === "2"}
                    onChange={() => handleDurationChange("2")}
                  />
                  <label htmlFor="duration-2" className="checkbox-label">
                    2 Hr
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-3"
                    name="duration"
                    value="3"
                    className="checkbox-input"
                    checked={duration === "3"}
                    onChange={() => handleDurationChange("3")}
                  />
                  <label htmlFor="duration-3" className="checkbox-label">
                    3 Hr
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="duration-4"
                    name="duration"
                    value="4"
                    className="checkbox-input"
                    checked={duration === "4"}
                    onChange={() => handleDurationChange("4")}
                  />
                  <label htmlFor="duration-4" className="checkbox-label">
                    4 Hr
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* 7th */}
        {/* <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">
                Layover duration
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="layover-duration"
                    name="layover-duration"
                    value="1"
                    className="checkbox-input"
                    checked={checkboxValues["layover-duration"]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="layover-duration" className="checkbox-label">
                    1 Hr
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div> */}
      </div>
    </>
  );
}

export default FlightsFilters;
