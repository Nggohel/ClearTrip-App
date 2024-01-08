import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../Assests/Images/Rooms/image-1.jpg";
import img2 from "../../Assests/Images/Rooms/image-2.jpg";
import img3 from "../../Assests/Images/Rooms/image-3S.jpg";
// import "./../../styles/TopCarouselCard.css";

function RoomImageCarousel() {
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
        className=""
      >
        <div>
          <a>
            <img className="main-img" src={img1} alt="headerimage" />
          </a>
        </div>
        <div>
          <img className="" src={img2} alt="headerimage" />
        </div>
        <div>
          <img className="" src={img3} alt="headerimage" />
        </div>
      </Carousel>
    </>
  );
}

export default RoomImageCarousel;
