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
        <div>
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    </>
  );
}

export default SecondCarousel;
