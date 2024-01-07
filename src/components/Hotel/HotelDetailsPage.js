import React, { useState } from "react";
import HotelSearchNavBar from "./HotelSearchNavBar";
import "../../styles/HotelDetails.css";
import Ratinglogo from "../../Assests/ratingLogo/Ratinglogo.svg";
import fullratinglogo from "../../Assests/ratingLogo/fullrating.svg";
import Halfratinglogo from "../../Assests/ratingLogo/Halfratinglogo.svg";
import expand_logo from "../../Assests/Images/expand_logo.svg";
import { BreakfastDining, Fastfood, Wifi } from "@mui/icons-material";
import SingleHotelImage from "../Carousels/SingleHotelImage";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Star from "../../Assests/ratingLogo/starLogo";
import CircleRating1 from "../../Assests/ratingLogo/CircleRating1";
import CircleRating2 from "../../Assests/ratingLogo/CircleRating2";
import moreoption from "../../Assests/Images/Hotel-filterLogo/more_option_logo.svg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function HotelDetailsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ position: "fixed" }}>
        <HotelSearchNavBar />
        {/* 
        <hr style={{ marginTop: "12px", marginBottom: "10px" }}></hr> */}

        <Box
          sx={{
            width: "100%",
            marginLeft: "30px",
            marginTop: "20px",
          }}
        >
          <Box
            className="tab-titles"
            sx={{ borderBottom: 1, borderColor: "black" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              scrollButtons="auto"
            >
              <Tab label="General" href="#general" />
              <Tab label="Amenities" href="#amenities" />
              <Tab label="Rules" href="#rules" />
              <Tab label="About" href="#about" />
              <Tab label="Location" href="#location" />
              <Tab label="Reviews" href="#reviews" />
              <Tab label="Rooms" href="#availablerooms" />
            </Tabs>

            {/* all tab container of hotel details */}

            <div
              className="all-details-container"
              style={{ overflowY: "scroll", height: "100vh" }}
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="leftside-container">
                  <section id="general" className="general">
                    <div className="general-container">
                      <div>
                        <h3 className="hotel-name">
                          Planet Hollywood Beach Resort Goa
                        </h3>
                        <div
                          style={{ marginTop: "4px", marginBottom: "4px" }}
                        ></div>
                        <p className="hotel-details-para">
                          5-star Hotel · Utorda South Goa, Goa
                        </p>
                      </div>
                      <div
                        style={{ marginTop: "8px", marginBottom: "8px" }}
                      ></div>
                      <div style={{ display: "flex" }}>
                        <h2 className="hotel-details-rating">4.5/5</h2>
                        <div className="hoteldetails-rating-details">
                          <img
                            src={Ratinglogo}
                            style={{ height: "16px", width: "25px" }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{
                              height: "16px",
                              width: "16px",
                              marginLeft: "4px",
                            }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <img
                            src={Halfratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                        </div>
                        <div className="total-customer-rating">
                          <p className="total-reviews">(2,092 reviews)</p>
                          <img
                            src={expand_logo}
                            style={{ height: "24px", width: "24px" }}
                          />
                        </div>
                        <div
                          style={{ paddingBottom: "12px", paddingTop: "12px" }}
                        ></div>
                      </div>
                      <div className="extra-details">
                        <div className="food-details">
                          <div className="left-food-details">
                            <div>
                              <Fastfood />
                            </div>
                            <div>
                              <p className="left-food-details-p">
                                Free breakfast on select plans
                              </p>
                              <div style={{ marginBottom: "4px" }}></div>
                              <p className="left-food-details-p2">
                                Some plans include free breakfast
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="food-details"></div>
                      </div>
                    </div>
                  </section>
                  <hr style={{ width: "624px" }}></hr>
                  <section id="amenities" className="amenities">
                    <div className="amenities-container">
                      <h1 className="amenities-title">Amenities</h1>
                      <div className="typesof-amenities">
                        <div className="type-amenities">
                          <span className="amenities-logo">
                            <Wifi />
                          </span>
                          <p className="amenities-name">WiFi services</p>
                        </div>
                        <div className="type-amenities">
                          <p className="amenities-name">WiFi services</p>
                        </div>
                        <div className="type-amenities">
                          <p className="amenities-name">WiFi services</p>
                        </div>
                        <div className="type-amenities">
                          <p className="amenities-name">WiFi services</p>
                        </div>
                        <div className="type-amenities">
                          <p className="amenities-name">WiFi services</p>
                        </div>
                        <div className="type-amenities">
                          <p className="amenities-name">WiFi services</p>
                        </div>
                      </div>
                      <button className="see-all-amenities">
                        <h4 className="amenities-btn-title">
                          See all amenities
                        </h4>
                      </button>
                    </div>
                    <div
                      style={{ marginTop: "32px", marginBottom: "32px" }}
                    ></div>
                  </section>
                  <hr style={{ width: "624px" }}></hr>

                  <section id="rules" className="property-rules">
                    <div className="property-rules-container">
                      <h1 className="propertyrules-title"> Property rules</h1>
                      <div className="total-propertyrules">
                        <div className="property-rule">
                          <p className="rule">
                            Check-in: After 02:00 PM, Check-out: 11:00 AM
                          </p>
                        </div>
                        <div className="property-rule">
                          <p className="rule">
                            Check-in: After 02:00 PM, Check-out: 11:00 AM
                          </p>
                        </div>
                        <div className="property-rule">
                          <p className="rule">
                            Check-in: After 02:00 PM, Check-out: 11:00 AM
                          </p>
                        </div>
                        <div className="property-rule">
                          <p className="rule">
                            Check-in: After 02:00 PM, Check-out: 11:00 AM
                          </p>
                        </div>
                        <div className="property-rule">
                          <p className="rule">
                            Check-in: After 02:00 PM, Check-out: 11:00 AM
                          </p>
                        </div>
                      </div>
                      <button className="see-all-propertyrules">
                        <h4 className="propertyrules-btn-title">
                          See all amenities
                        </h4>
                      </button>
                    </div>
                    <div
                      style={{ marginTop: "32px", marginBottom: "32px" }}
                    ></div>
                  </section>

                  <hr style={{ width: "624px" }}></hr>

                  <section id="about" className="about-property">
                    <div className="about-property-container">
                      <h1 className="aboutproperty-title"> About property</h1>
                      <p className="aboutproperty-para">
                        Regenta Central Imperial Candolim, Goa, is a beautiful
                        and affordable property spread in 56770 Sq. ft nestled
                        amidst the hub centre of the beach city. Occupying a
                        prime location, this venue becomes easily accessible via
                        public and private transportation. Drop-in for a quick
                        weekend getaway, corporate retreat, or impromptu family
                        get-togethers and experience a memorable event. It is
                        ideal for hosting your business meetings, conferences,
                        seminars, corporate engagements, luncheons, hi-teas, in
                        addition to social affairs. Regenta Central Imperial
                        Candolim, Goa, offers luxurious rooms for accommodation
                        for guests who arrive from different cities. It can
                        comfortably accommodate a small gathering for your
                        functions. The banquet has an on-site team of decorators
                        who take care of all your requests and deliver them
                        effortlessly. Relish upon delicious vegetarian and
                        non-vegetarian cuisines curated by the in-house chefs'
                        team present here. Hold your memorable events at Regenta
                        Central Imperial Candolim, Goa, to make them an
                        everlasting success
                      </p>
                      <button className="aboutproperty-btn">
                        <h4 className="btn-contain">Read more</h4>
                      </button>
                    </div>
                  </section>
                </div>
                <div className="rightside-container">
                  <section id="images" className="hotel-images">
                    <SingleHotelImage />
                  </section>

                  <section id="rooms" className="rooms">
                    <div className="rooms-container">
                      <div style={{ display: "flex" }}>
                        <div className="rooms-price-details">
                          <div className="room-details">
                            <h2 className="room-cost">₹11,292</h2>
                            <p className="room-tax">+ ₹2,139 tax</p>
                            <p className="room-pernight">/ night</p>
                          </div>
                          <div className="room-other-details">
                            <h2 className="room-actul-cost">₹13,984</h2>
                            <p className="room-offer-data">19% off</p>
                            <p className="room-emi-option">
                              No cost EMI from ₹4,477
                            </p>
                          </div>
                        </div>

                        <div className="btn-room">
                          <button className="room-button">
                            <h4 className="btn-title">Select room</h4>
                          </button>
                        </div>
                      </div>
                      <div className="btn-border"></div>
                      <div className="rooms-inculde">
                        <div className="rooms-inculde-container">
                          <div className="rooms-inculde-container-icon">
                            <Fastfood />
                          </div>
                          <div className="rooms-inculde-container-data">
                            <p className="rooms-inculde-container-para">
                              Breakfast included
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <section id="location" className="location">
                <div className="location-container">
                  <h1 className="location-title">Location</h1>
                  <div className="location-map"></div>
                </div>
              </section>
              {/* reviewa */}
              <section id="reviews" className="reviews">
                <div className="reviews-rating-container">
                  <h1 className="reviews-title">Ratings & reviews</h1>
                  <div className="rating-container">
                    {/*have to make below code component  */}
                    <div className="range-ratings">
                      <div>
                        <div className="all-rating">
                          <h2 className="all-rating-title">4.5/5</h2>
                          <p className="total-rating">(5,731 reviews)</p>
                        </div>
                        <div className="rating-circle">
                          <img
                            src={Ratinglogo}
                            style={{ height: "16px", width: "25px" }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{
                              height: "16px",
                              width: "16px",
                              marginLeft: "4px",
                            }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <img
                            src={fullratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                          <img
                            src={Halfratinglogo}
                            style={{ height: "16px", width: "16px" }}
                          />
                        </div>
                      </div>
                      <div style={{ marginLeft: "48px" }}>
                        <div className="rating-range-contanier">
                          <div className="range-contanier">
                            <p className="ratingnumber five">5</p>
                            <Star />
                            <div style={{ marginLeft: "16px" }}></div>
                            <div className="range">
                              <div className="inner-range"></div>
                            </div>
                          </div>
                          <p className="ratingnumber">3.4k</p>
                        </div>
                        <div className="rating-range-contanier">
                          <div className="range-contanier">
                            <p className="ratingnumber five">4</p>
                            <Star />
                            <div style={{ marginLeft: "16px" }}></div>
                            <div className="range">
                              <div className="inner-range"></div>
                            </div>
                          </div>
                          <p className="ratingnumber">1.0k</p>
                        </div>
                        <div className="rating-range-contanier">
                          <div className="range-contanier">
                            <p className="ratingnumber five">3</p>
                            <Star />
                            <div style={{ marginLeft: "16px" }}></div>
                            <div className="range">
                              <div className="inner-range"></div>
                            </div>
                          </div>
                          <p className="ratingnumber">435</p>
                        </div>
                        <div className="rating-range-contanier">
                          <div className="range-contanier">
                            <p className="ratingnumber five">2</p>
                            <Star />
                            <div style={{ marginLeft: "16px" }}></div>
                            <div className="range">
                              <div className="inner-range"></div>
                            </div>
                          </div>
                          <p className="ratingnumber">190</p>
                        </div>
                        <div className="rating-range-contanier">
                          <div className="range-contanier">
                            <p className="ratingnumber five">1</p>
                            <Star />
                            <div style={{ marginLeft: "16px" }}></div>
                            <div className="range">
                              <div className="inner-range"></div>
                            </div>
                          </div>
                          <p className="ratingnumber">263</p>
                        </div>
                      </div>
                    </div>
                    {/*have to make below code component  */}
                    <div className="inrounded-rating">
                      <div className="circles-of-rating">
                        <div className="circle">
                          <CircleRating1 />
                          <p className="circle-para">Location</p>
                        </div>
                        <div className="circle">
                          <CircleRating2 />
                          <p className="circle-para">Rooms</p>
                        </div>
                        <div className="circle">
                          <CircleRating2 />
                          <p className="circle-para">Service</p>
                        </div>
                        <div className="circle">
                          <CircleRating2 />
                          <p className="circle-para">Value</p>
                        </div>
                        <div className="circle">
                          <CircleRating2 />
                          <p className="circle-para">Hygiene</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingTop: "48px" }}></div>
                  <div className="reviews-container">
                    <div className="" style={{ width: "588px" }}>
                      <h3 className="customerreview-title">
                        Amazing Hospitality. Spacious Rooms.{" "}
                      </h3>
                      <div className="customer-rating">
                        <img
                          src={Ratinglogo}
                          style={{ height: "16px", width: "25px" }}
                        />
                        <h4 className="" style={{ color: "rgb(26, 26, 26)" }}>
                          5/5
                        </h4>
                        <p className="rating-dot">·</p>
                        <p className="rating-dot">Raman B on Jan 02, 2024</p>
                      </div>
                      <p className="customer-written-para">
                        Top notch hospitality. Spacious Rooms. Great dine in
                        options, especially breakfast options. Hotel Lobby is
                        super nice. Location is very near to the airport and
                        well connected. Views from the rooftop is really nice.
                        Fitness Center, Steam, Sauna, Swimming Pool all
                        available and are well maintained.
                      </p>
                      <div>
                        <p className="read-more-review">Read More</p>
                      </div>
                    </div>
                    <div className="" style={{ width: "588px" }}>
                      <h3 className="customerreview-title">Great experience</h3>
                      <div className="customer-rating">
                        <img
                          src={Ratinglogo}
                          style={{ height: "16px", width: "25px" }}
                        />
                        <h4 className="" style={{ color: "rgb(26, 26, 26)" }}>
                          4/5
                        </h4>
                        <p className="rating-dot">·</p>
                        <p className="rating-dot">
                          Wanderer52240681147 on Jan 01, 2024
                        </p>
                      </div>
                      <p className="customer-written-para">
                        Top notch hospitality. Spacious Rooms. Great dine in
                        options, especially breakfast options. Hotel Lobby is
                        super nice. Location is very near to the airport and
                        well connected. Views from the rooftop is really nice.
                        Fitness Center, Steam, Sauna, Swimming Pool all
                        available and are well maintained.
                      </p>
                      <div>
                        <p className="read-more-review">Read More</p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      border: "1px dashed rgb(230, 230, 230)",
                      marginBottom: "32px",
                      marginTop: "32px",
                    }}
                  ></div>
                </div>
              </section>

              {/* avalible Rooms */}
              <section id="availablerooms">
                <div className="available-rooms">
                  <h1 className="avail-rooms-title">Rooms available</h1>
                  <div className="avail-rooms-filters">
                    <div className="avail-rooms-filter">
                      <div className="avail-rooms-type">
                        <div className="types-filter">
                          <p className="avail-rooms-types">1 room type</p>
                          <img
                            src={moreoption}
                            style={{ height: "16px", width: "16px" }}
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          width: "1px",
                          height: "24px",
                          marginRight: "24px",
                          marginLeft: "24px",
                          backgroundColor: "#e6e6e6",
                          borderBottom: "24px solid rgb(243, 243, 243);",
                        }}
                      ></div>
                      <h3 className="filter-by">Filter rooms by</h3>
                      <div className="availrooms-filter-one">
                        <div className="freecancellation-div">
                          <p className="freecancellation-para">
                            Free cancellation
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}
export default HotelDetailsPage;
