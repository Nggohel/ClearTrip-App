import React from "react";
import { Link } from "react-router-dom";
import HotelImg from "../Carousels/HotelImg";
import Ratinglogo from "../../Assests/ratingLogo/Ratinglogo.svg";
import Tooltip from "@mui/material/Tooltip";

function HotelCard({ hotel, index }) {
  return (
    <div className="hotel-cards">
      <div>
        <HotelImg hotel={hotel} Index={index} />
      </div>
      <Link
        to={`/allhoteldetails/${hotel?._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="hotel-details">
          <h4 className="hotel-name">{hotel.name}</h4>
          <div className="hotel-rating-details">
            <img src={Ratinglogo} style={{ height: "12px", width: "18px" }} />
            <h4 className="rating-of-hotel">{hotel.rating}/5</h4>
          </div>
        </div>
        <div className="typeof-hotel">
          <p className="hotel-types">4-star resort · Morjim</p>
          <p className="total-people-rated">253 ratings</p>
        </div>
        <Tooltip
          title={
            <div className="popup-main-container">
              <p className="popup-title">Price breakup</p>
              <div className="popup-container">
                <p className="popup-para">1 room * 1 night</p>
                <p className="popup-value">
                  {Math.floor(
                    hotel.avgCostPerNight + (hotel.avgCostPerNight * 20) / 100
                  )}
                </p>
              </div>
              <div className="popup-container">
                <p className="popup-para">Property discount</p>
                <p className="popup-discount">
                  -{Math.floor((hotel.avgCostPerNight * 20) / 100)}
                </p>
              </div>
              <div id="dotted-line"></div>
              <div className="popup-container">
                <p className="popup-para">Price after discount</p>
                <p className="popup-value">
                  {Math.floor(hotel.avgCostPerNight)}
                </p>
              </div>
            </div>
          }
          arrow
          placement="top"
        >
          <div className="hotel-price-details">
            <div className="hotel-price-tax">
              <h3 className="hotel-price">
                {Math.floor(hotel.avgCostPerNight)}
              </h3>
              <div className="price-tax">
                <p className="hotel-tax">
                  + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                  <span className="per-day-or-night">/ night</span>
                </p>
              </div>
            </div>
            <div className="discount-offers">
              <p className="actul-price">
                {Math.floor(
                  hotel.avgCostPerNight + (hotel.avgCostPerNight * 20) / 100
                )}
              </p>
              <p className="percentage-off">20 % off</p>
              <p className="option-of-bank">+ Additional bank discounts</p>
            </div>
          </div>
        </Tooltip>
      </Link>
    </div>
  );
}

export default function HotelCardsContainer({ hotels, start, end }) {
  const slicedHotels = hotels?.slice(start, end);
  return (
    <div className="hotel-container-cards">
      {slicedHotels &&
        slicedHotels.map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} index={index} />
        ))}
    </div>
  );
}
