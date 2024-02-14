import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hotelSlider2 from "./../../Assests/SliderImage/hotelSlider2.webp";
import hotelSlider1 from "./../../Assests/SliderImage/hotelSlider1.webp";
import hotelSlider3 from "./../../Assests/SliderImage/hotelSlider3.webp";
import hotelSlider4 from "./../../Assests/SliderImage/hotelSlider4.webp";
import hotelSlider5 from "./../../Assests/SliderImage/hotelSlider5.webp";
import hotelSlider6 from "./../../Assests/SliderImage/hotelSlider6.webp";
import hotelSlider7 from "./../../Assests/SliderImage/hotelSlider7.webp";
import hotelSlider8 from "./../../Assests/SliderImage/hotelSlider8.webp";
import hotelSlider9 from "./../../Assests/SliderImage/hotelSlider9.jpg";
import "./../../styles/TopCarouselCard.css";

function HotelOffer() {
  const totalSlides = 9;
  const interval = 3000;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slides change with TimeInterval

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [totalSlides, interval]);

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
        selectedItem={currentIndex}
        useKeyboardArrows={true}
        onChange={(index) => setCurrentIndex(index)}
        className="rightaside-carousel"
      >
        <div>
          <a>
            <img className="main-img" src={hotelSlider1} alt="headerimage" />
          </a>
        </div>
        <div>
          <img className="" src={hotelSlider2} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider3} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider4} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider5} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider6} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider5} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider6} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider7} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider8} alt="headerimage" />
        </div>
        <div>
          <img className="" src={hotelSlider9} alt="headerimage" />
        </div>
      </Carousel>
    </>
  );
}

export default HotelOffer;
