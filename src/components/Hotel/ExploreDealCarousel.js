import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/HotelSearchPage.css";
// import HotelCards from "./HotelCards";
// import hotelImage from "../../Assests/HotelOffer/image_of_hotel.jpg";
import Ratinglogo from "../../Assests/ratingLogo/Ratinglogo.svg";
import { Link } from "react-router-dom";

function ExploreDealCarousel({ slidesToShow, data }) {
  //   console.log("ExploreDealCarousel::::", data[0].images[0]);
  const [settings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-20px",
    slidesToShow: slidesToShow,
  });

  return (
    <div style={{ height: "360px", width: "1160px", overflow: "hidden" }}>
      <Slider {...settings}>
        {/* <div>
          <button
            style={{ height: "300px", width: "70px", background: "white" }}
          >
            view all
          </button>
        </div> */}
        {data &&
          data?.slice(11).map((hotel, index) => (
            <div className="hotel-deal-cards" key={index}>
              <div>
                <img
                  className="hotel-img"
                  src={data[index].images[0]}
                  alt="headerimage"
                />
              </div>
              <Link
                to="/allhoteldetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="hotel-details">
                  <h4 className="hotel-name">{hotel.name}</h4>
                  <div className="hotel-rating-details">
                    <img
                      src={Ratinglogo}
                      style={{ height: "12px", width: "18px" }}
                    />
                    <h4 className="rating-of-hotel">4.5/5</h4>
                  </div>
                </div>
                <div className="typeof-hotel">
                  <p className="hotel-types">4-star resort · Morjim</p>
                  <p className="total-people-rated">253 ratings</p>
                </div>
                <div className="hotel-price-details">
                  <div className="price-tax">
                    <h3 className="hotel-price">
                      {hotel.rooms[0]?.costDetails.baseCost}
                    </h3>
                    <p className="hotel-tax">
                      + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                    </p>
                    <p className="per-day-or-night">/ night</p>
                    <div className="discount-offers">
                      <p className="actul-price">
                        {hotel.rooms[0]?.costPerNight}
                      </p>
                      <p className="percentage-off">
                        {hotel.rooms[0]?.costDetails.discount} % off
                      </p>
                      <p className="option-of-bank">
                        + Additional bank discounts
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
}
export default ExploreDealCarousel;
