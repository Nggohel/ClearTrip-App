import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import loginpageImg1 from "../../Assests/LoginImag/slider2.webp";
import loginpageImg2 from "../../Assests/LoginImag/slider3.webp";
import "../../styles/LoginCarousel.css";

function LoginCarousel() {
  const totalSlides = 2;
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
        centerSlidePercentage={90}
        emulateTouch={false}
        showIndicators={true}
        selectedItem={currentIndex}
        useKeyboardArrows={true}
        onChange={(index) => setCurrentIndex(index)}
        className="login-carousel"
      >
        <div>
          <a>
            <img
              className="login-carousel-img"
              src={loginpageImg1}
              alt="headerimage"
            />
          </a>
        </div>
        <div>
          <img
            className="login-carousel-img"
            src={loginpageImg2}
            alt="headerimage"
          />
        </div>
      </Carousel>
    </>
  );
}

export default LoginCarousel;
