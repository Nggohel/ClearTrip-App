import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./../styles/SecondCarousel.css";

function SecondCarousel() {
  return (
    <>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100}
        emulateTouch={false}
        showIndicators={true}
        useKeyboardArrows={true}
        className="rightaside-secondcarousel"
      >
        <div className="rightaside-secondcarousel-card">
          <p>IndiGo Low Fare Sale Live!</p>
          <p>Get up to 18% off * on Domestic Flight bookings!</p>
          <p>Use Coupon code CTINDIGO</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offer"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p>Special Roundtrip Flight Offer!</p>
          <p>
            Get up to ₹1,000 off per passenger on Domestic Roundtrip Flights
          </p>
          <p>Use Coupon code VACATION</p>
          <a
            href="https://www.cleartrip.com/offers/india/dom-rt-offer"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p>International Flight Offer!</p>
          <p>Get up to ₹ 25,000 off on International Flights.</p>
          <p>Use Coupon code INTFLY</p>
          <a
            href="https://www.cleartrip.com/offers/india/intair-intfly"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p>Domestic Flight Offer!</p>
          <p>Get up to ₹ 5,000 off on Domestic Flights</p>
          <p>Use Coupon code CTFLY</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offer"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p>IndiGo Low Fare Sale Live!</p>
          <p>Get up to 18% off * on Domestic Flight bookings!</p>
          <p>Use Coupon code CTINDIGO</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offer"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p>Malaysia Airlines Business Class Offer!</p>
          <p>
            Get up to ₹5,000 off on Malaysia Airlines Business Class Bookings!
          </p>
          <p>Use Coupon code: CTMHBIZ</p>
          <a
            href="https://www.cleartrip.com/offers/india/malaysia-airlines-business-class-offer-ct"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p>AirAsia International Flights Offer!</p>
          <p>
            Save up to ₹5,000 and get 50% off baggage* on AirAsia's
            International Flights!
          </p>
          <p>Use Coupon code CTAIRASIA</p>
          <a
            href="https://www.cleartrip.com/offers/india/ctairasia-international-flights"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p>Thrilling deal available for Air India Express!</p>
          <p>Get up to Rs ₹5,000 off on Air India Express Flights!</p>
          <p>Use Coupon code CTAESPL</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offerhttps://www.cleartrip.com/offers/india/air-india-express-spl-offer"
            target="_blank"
          >
            <span> Know more</span>
          </a>
        </div>
      </Carousel>
    </>
  );
}

export default SecondCarousel;
