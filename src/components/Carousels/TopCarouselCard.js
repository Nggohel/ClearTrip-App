import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./../../Assests/SliderImage/Slider1.webp";
import Slider2 from "./../../Assests/SliderImage/Slider2.webp";
import Slider3 from "./../../Assests/SliderImage/Slider3.webp";
import Slider4 from "./../../Assests/SliderImage/Slider4.webp";
import Slider5 from "./../../Assests/SliderImage/Slider5.webp";
import Slider6 from "./../../Assests/SliderImage/Slider6.webp";
import "./../../styles/TopCarouselCard.css";

function TopCarouselCard() {
  const totalSlides = 5;
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
    <React.Fragment>
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
            <img className="main-img" src={Slider1} alt="headerimage" />
          </a>
        </div>
        <div>
          <img className="" src={Slider2} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider3} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider4} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider5} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider6} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider5} alt="headerimage" />
        </div>
        <div>
          <img className="" src={Slider6} alt="headerimage" />
        </div>
      </Carousel>
    </React.Fragment>
  );
}

export default TopCarouselCard;
