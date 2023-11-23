import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../styles/OfferCarousel.css";
// import "./../styles/OfferCarousel.css";
function OfferCarousel({ icon, offer, bankCard, card }) {
  const [settings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  });

  return (
    <div style={{ height: "70px", width: "815px" }}>
      <Slider {...settings}>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">{icon}</div>
              <div className="offers-data">
                {offer}
                <div className="credit-offers">
                  <div className="bank-card">{bankCard}</div>
                  <div className="card-offer">{card}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default OfferCarousel;
