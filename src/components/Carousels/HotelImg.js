import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hotelImg from "../../Assests/HotelOffer/image_of_hotel.jpg";
import "./../../styles/HotelImg.css";

function HotelImg() {
  const totalSlides = 9;
  const interval = 3000;

  const [currentIndex, setCurrentIndex] = useState(0);

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
        // onChange={(index) => setCurrentIndex(index)}
        className="hotels-images"
        
      >
        <div>
          <a>
            <img className="hotel-img" id="hotelCarousel" src={hotelImg} alt="headerimage" />
          </a>
        </div>
        <div>
          <img className="" id="hotelCarousel"  src={hotelImg} alt="headerimage" />
        </div>
        <div>
          <img className="" id="hotelCarousel"  src={hotelImg} alt="headerimage" />
        </div>
        <div>
          <img className=""  id="hotelCarousel" src={hotelImg} alt="headerimage" />
        </div>
      </Carousel>
    </>
  );
}

export default HotelImg;
