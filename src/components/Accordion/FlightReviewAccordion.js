import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./../../styles/FlightReviewItinerary.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FlightReviewAccordion() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="flight-review-accordion">
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Cancellation refund policy</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
        <div className="cancel-details-card">
          <div className="cancle-between">
            <p className="cancle-between-para">Cancel between</p>
            <p className="cancle-between-para">Amount refundable</p>
          </div>
          <div className="canceldetails-inrang-card">
            <div className="canceldetails-inrang-div">
              <div className="canceldetails-time">
                <p className="canceldetails-time-para">07 Jan, 14:00 IST</p>
                <p className="canceldetails-time-para">09 Jan, 14:00 IST</p>
              </div>
              <div className="canceldetails-inrang"></div>
              <div className="">
                <p className="canceldetails-range">No Refund</p>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Date change policy</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails> */}
        <div className="cancel-details-card">
              <div className="cancle-between">
                <p className="cancle-between-para">Cancel between</p>
                <p className="cancle-between-para">Amount refundable</p>
              </div>
              <div className="canceldetails-inrang-card">
                <div className="canceldetails-inrang-div">
                  <div className="canceldetails-time">
                    <p className="canceldetails-time-para">07 Jan, 14:00 IST</p>
                    <p className="canceldetails-time-para">09 Jan, 14:00 IST</p>
                  </div>
                  <div className="canceldetails-inrang"></div>
                  <div className="">
                    <p className="canceldetails-range">No Refund</p>
                  </div>
                </div>
              </div>
            </div>
      </Accordion>
    </div>
  );
}
