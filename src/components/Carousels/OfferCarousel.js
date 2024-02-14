import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../styles/OfferCarousel.css";
import ICICI from "../../Assests/Images/ICICI";
import AuBank from "../../Assests/BankLogo/AUBank";
import IDFC from "../../Assests/BankLogo/IDFC";
import UPI from "../../Assests/BankLogo/UPI";

//offer - cards in Carousel on Flight HomePage

function OfferCarousel({ icon, offer, bankCard, card }) {
  const [settings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
  });

  return (
    <div style={{ height: "70px", width: "815px", overflow: "hidden" }}>
      <Slider {...settings}>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <AuBank />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">AuBankCC</div>
                  <div className="card-offer">with AuBank Credit Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <IDFC />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">IDFCCC</div>
                  <div className="card-offer">with IDFC Credit Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <UPI />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">UPI</div>
                  <div className="card-offer">with UPI Offers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <ICICI />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">ICICICC</div>
                  <div className="card-offer">with ICICI Credit Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <AuBank />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">AuBankCC</div>
                  <div className="card-offer">with AuBank Credit Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <IDFC />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">IDFCCC</div>
                  <div className="card-offer">with IDFC Credit Cards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <UPI />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">UPI</div>
                  <div className="card-offer">with UPI Offers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="offers-card">
            <div className="offer-card">
              <div className="offer-icon">
                <ICICI />
              </div>
              <div className="offers-data">
                Flat 12% off
                <div className="credit-offers">
                  <div className="bank-card">ICICICC</div>
                  <div className="card-offer">with ICICI Credit Cards</div>
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
