import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotelCards from "./HotelCards";
import hotelImage from "../../Assests/HotelOffer/image_of_hotel.jpg";
import Ratinglogo from "../../Assests/ratingLogo/Ratinglogo.svg";

function DealofthedayCarousel({ slidesToShow, data }) {
  console.log("DealofthedayCarousel", data);
  const [settings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: slidesToShow,
  });

  return (
    <div style={{ height: "auto", width: "1190px", overflow: "hidden" }}>
      <Slider {...settings}>
        {data &&
          data.slice(8, 11).map((hotel, index) => (
            <div className="hotel-deal-cards">
              <div>
                <img className="hotel-img" src={hotelImage} alt="headerimage" />
              </div>
              <div className="hotel-details">
                <h4 className="hotel-name">Lemon Tree Hotel Candolim, Goa</h4>
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
                  <h3 className="hotel-price">8,478</h3>
                  <p className="hotel-tax"> + ₹1,454 tax</p>
                  <p className="per-day-or-night">/ night</p>
                </div>
                <div className="discount-offers">
                  <p className="actul-price">₹9,903</p>
                  <p className="percentage-off">14% off</p>
                  <p className="option-of-bank">+ Additional bank discounts</p>
                </div>
              </div>
            </div>
          ))}

        <div>
          <button
            style={{ height: "300px", width: "70px", background: "white" }}
          >
            view all
          </button>
        </div>
        <div>
          <HotelCards />
        </div>
        <div>
          <HotelCards />
        </div>
      </Slider>
    </div>
  );
}
export default DealofthedayCarousel;
