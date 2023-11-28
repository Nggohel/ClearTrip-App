import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./../../styles/SecondCarousel.css";

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
          <p className="secondcarousel-card-title">
            IndiGo Low Fare Sale Live!
          </p>
          <p className="secondcarousel-offer-details">
            Get up to 18% off * on Domestic Flight bookings!
          </p>
          <p className="card-coupon">Use Coupon code CTINDIGO</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offer"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p className="secondcarousel-card-title">
            Special Roundtrip Flight Offer!
          </p>
          <p className="secondcarousel-offer-details">
            Get up to ₹1,000 off per passenger on Domestic Roundtrip Flights
          </p>
          <p className="card-coupon">Use Coupon code VACATION</p>
          <a
            href="https://www.cleartrip.com/offers/india/dom-rt-offer"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p className="secondcarousel-card-title">
            International Flight Offer!
          </p>
          <p className="secondcarousel-offer-details">
            Get up to ₹ 25,000 off on International Flights.
          </p>
          <p className="card-coupon">Use Coupon code INTFLY</p>
          <a
            href="https://www.cleartrip.com/offers/india/intair-intfly"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p className="secondcarousel-card-title">Domestic Flight Offer!</p>
          <p className="secondcarousel-offer-details">
            Get up to ₹ 5,000 off on Domestic Flights
          </p>
          <p className="card-coupon">Use Coupon code CTFLY</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offer"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p className="secondcarousel-card-title">
            IndiGo Low Fare Sale Live!
          </p>
          <p className="secondcarousel-offer-details">
            Get up to 18% off * on Domestic Flight bookings!
          </p>
          <p className="card-coupon">Use Coupon code CTINDIGO</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offer"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p className="secondcarousel-card-title">
            Malaysia Airlines Business Class Offer!
          </p>
          <p className="secondcarousel-offer-details">
            Get up to ₹5,000 off on Malaysia Airlines Business Class Bookings!
          </p>
          <p className="card-coupon">Use Coupon code: CTMHBIZ</p>
          <a
            href="https://www.cleartrip.com/offers/india/malaysia-airlines-business-class-offer-ct"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p className="secondcarousel-card-title">
            AirAsia International Flights Offer!
          </p>
          <p className="secondcarousel-offer-details">
            Save up to ₹5,000 and get 50% off baggage* on AirAsia's
            International Flights!
          </p>
          <p className="card-coupon">Use Coupon code CTAIRASIA</p>
          <a
            href="https://www.cleartrip.com/offers/india/ctairasia-international-flights"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
        <div className="rightaside-secondcarousel-card">
          <p className="secondcarousel-card-title">
            Thrilling deal available for Air India Express!
          </p>
          <p className="secondcarousel-offer-details">
            Get up to Rs ₹5,000 off on Air India Express Flights!
          </p>
          <p className="card-coupon">Use Coupon code CTAESPL</p>
          <a
            href="https://www.cleartrip.com/offers/india/indigo-air-dom-offerhttps://www.cleartrip.com/offers/india/air-india-express-spl-offer"
            target="_blank"
          >
            <span className="card-knowmore"> Know more</span>
          </a>
        </div>
      </Carousel>
    </>
  );
}

export default SecondCarousel;
