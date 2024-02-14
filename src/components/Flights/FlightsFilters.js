import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./../../styles/FlightsFilters.css";
import { useFlightContext } from "../../Hooks/useFlightContext";

function FlightsFilters() {
  const [isBtn, setIsBtn] = useState(false);
  const { handleApplyClick, checkboxValue, setCheckboxValue } =
    useFlightContext();

  useEffect(() => {
    handleBtn(checkboxValue);
  }, [checkboxValue]);  
  // GettingCheckValue
  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setCheckboxValue((prevValues) => ({
      ...prevValues,

      [name]: checked ? value : "",
    }));
  };

  // console.log("checkboxValue:", checkboxValue);
  // for RangeChange
  const handleRangeChange = (event) => {
    const { name, value } = event.target;

    setCheckboxValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // handleBtn(checkboxValue);
  };

  //for Btn

  function handleBtn(obj) {
    if (
      obj.stops != "" ||
      obj.departureTime != "" ||
      obj.duration != "" ||
      obj.ticketPrice != 2000
    ) {
      setIsBtn(true);
    } else {
      setIsBtn(false);
    }
  }

  return (
    <>
      <div className="searchflightpage-leftsection">
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <p>
            <b>Flights Filter</b>
          </p>
          {isBtn && (
            <button className="filter-btn" onClick={handleApplyClick}>
              Apply
            </button>
          )}
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
                {["0", "1", "2"].map((item, index) => (
                  <div className="checkbox-container" key={index}>
                    <input
                      type="checkbox"
                      name="stops"
                      className="checkbox-input"
                      value={item}
                      checked={checkboxValue.stops === item ? true : false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="non-stop" className="checkbox-label">
                      {item}-stop
                    </label>
                  </div>
                ))}
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
                Departure Time & Arrival Time
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form>
                {[
                  { Morning: "06:00-12:00" },
                  { Afternoon: "12:00-16:00" },
                  { Evening: "16:00-20:00" },
                  { Night: "20:00-06:00" },
                ].map((item, index) => {
                  const key = Object.keys(item)[0];
                  const value = item[key];

                  return (
                    <div className="checkbox-container" key={index}>
                      <input
                        type="checkbox"
                        value={value}
                        name="departureTime"
                        className="checkbox-input"
                        checked={
                          checkboxValue.departureTime === value ? true : false
                        }
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor={key.toLowerCase()}
                        className="checkbox-label"
                      >
                        {key} {value}
                      </label>
                    </div>
                  );
                })}
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
                  Up to
                  {new Intl.NumberFormat("en-IN").format(
                    parseInt(checkboxValue.ticketPrice, 10)
                  )}
                </label>
                <br></br>
                <input
                  type="range"
                  name="ticketPrice"
                  min="2000"
                  max="6000"
                  value={checkboxValue.ticketPrice}
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
                {["1", "2", "3", "4"].map((item, index) => (
                  <div className="checkbox-container" key={index}>
                    <input
                      type="checkbox"
                      id="duration-1"
                      name="duration"
                      value={item}
                      className="checkbox-input"
                      checked={checkboxValue.duration === item ? true : false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="duration-1" className="checkbox-label">
                      {item} Hr
                    </label>
                  </div>
                ))}
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
