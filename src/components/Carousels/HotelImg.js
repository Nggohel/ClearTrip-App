import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./../../styles/HotelImg.css";
import { hotelImgs } from "../../Data/Image";
import { Link } from "react-router-dom";

function HotelImg({ hotel, Index }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Images = hotelImgs[Index];

  // onclick Store Hotel_Id 
  const handleClick = () => {
    localStorage.setItem("selectedHotelId", hotel?._id);
  };

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
        className="hotels-images"
      >
        {Images?.map((image, index) => (
          <Link to={`/allhoteldetails/${hotel?._id}`} onClick={handleClick}>
            <div key={index} className="hotel-img-card">
              <a>
                <img
                  className="hotel-img"
                  id={`hotelCarousel${index}`}
                  src={image}
                  alt={`hotelimage${index}`}
                />
              </a>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
}

export default HotelImg;
