import React from "react";
import "../../styles/HotelmainSection.css";
import Banner from "../../Assests/Images/Hotelpage-homeBanner.jpeg";
import HotelSearchCard from "../Hotel/HotelSearchCard";
function HotelmainSection() {
  return (
    <>
      <div className="hotel-middle-section">
        <div>
          <h1>Search Hotels</h1>
          <h2>Enjoy hassle free bookings with Cleartrip</h2>
        </div>
        <HotelSearchCard />
        <div className="hotel-homepage-banner">
          <img
            loading="lazy"
            src={Banner}
            style={{ width: "706px", height: "80px" }}
          />
        </div>
      </div>
    </>
  );
}

export default HotelmainSection;
