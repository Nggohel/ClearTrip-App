import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./../styles/FlightsFilters.css";

function FlightsFilters() {
  const [rangeValue, setRangeValue] = useState(3483);

  const handleRangeChange = (event) => {
    setRangeValue(parseInt(event.target.value, 10));
  };
  return (
    <>
      <div className="searchflightpage-leftsection">
        <div>
          <b>169 of 169</b> flights
        </div>
        {/* 1st */}
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
                    value="Non-Stop"
                    className="checkbox-input"
                  />
                  <label htmlFor="non-stop" className="checkbox-label">
                    Non-stop
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="stop1"
                    name="stop"
                    value="Stop"
                  />
                  <label htmlFor="non-stop" className="checkbox-label">
                    1 stop
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id="stop2"
                    name="stop"
                    value="Stop"
                  />
                  <label htmlFor="non-stop" className="checkbox-label">
                    2 stop
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
                    id="evening"
                    name="evening"
                    value="evening"
                    className="checkbox-input"
                  />
                  <label htmlFor="evening" className="checkbox-label">
                    Evening 4 pm- 8 pm
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
                    Night 8pm-Midnight
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* 3 */}
        <div>
          <Accordion defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">
                Departure time from BOM
              </Typography>
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
                    <div className="checkbox-label-gap">
                      <span>Early Morning</span>
                      <span style={{ marginLeft: "15px" }}>Midnight- 8 am</span>
                    </div>
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="morning"
                    name="morning"
                    value="morning"
                    className="checkbox-input"
                  />
                  <label htmlFor="morning" className="checkbox-label">
                    <div className="checkbox-label-gap">
                      <span>Morning</span>
                      <span style={{ marginLeft: "15px" }}>8 am- Noon</span>
                    </div>
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
                    <div className="checkbox-label-gap">
                      <span>AfterNoon</span>
                      <span style={{ marginLeft: "15px" }}>Noon-4pm</span>
                    </div>
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
                    <div className="checkbox-label-gap">
                      <span>Evening</span>
                      <span style={{ marginLeft: "15px" }}>4 pm- 8 pm</span>
                    </div>
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
                    <div className="checkbox-label-gap">
                      <span>Night</span>
                      <span style={{ marginLeft: "15px" }}>8pm-Midnight</span>
                    </div>
                  </label>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>
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
                  Up to {new Intl.NumberFormat("en-IN").format(rangeValue)}
                </label>
                <br></br>
                <input
                  type="range"
                  id="vol"
                  name="vol"
                  min="3483"
                  max="56834"
                  step="1"
                  value={rangeValue}
                  onChange={handleRangeChange}
                  className="range-input"
                />

                <div className="checkbox-label">
                  <span> ₹3,483</span>
                  <span style={{ marginLeft: "115px" }}>₹56,834</span>
                </div>
              </form>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* 5th */}
        <div>
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
        </div>
        {/* 6th */}
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="filters-title">Trip duration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form></form>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* 7th */}
        <div>
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
              <form></form>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default FlightsFilters;
