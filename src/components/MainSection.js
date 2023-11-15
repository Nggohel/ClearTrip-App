import React from "react";
import "./../styles/MainSection.css";
import FlightSearchCard from "./FlightSearchCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Arrow from "../Assests/Images/Arrow";
function MainSection() {
  return (
    <>
      <div className="middle-section">
        <div>
          <h1>Search Flights Here</h1>
          <h2>Enjoy hassle free bookings with Cleartrip</h2>
        </div>
        <FlightSearchCard icon={<FontAwesomeIcon icon={faArrowRight} />} />
        <div>
          {" "}
          <h1 className="popular-search">Popular Search</h1>
          <div className="cards">
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div>
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div>
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div>
            <div className="cards-data">
              <div className="card-innerdata">
                <span>Banglor to Goa</span>
                <br></br>
                <span style={{ color: "gray", fontSize: "12px" }}>
                  wed,8 Nov - Sat, 11 Nov
                </span>
              </div>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
// import React from 'react'

// const DownArrow = () => {
//     return (
//         <div>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//             </svg>
//         </div>
//     )
// }

// export default DownArrow
