import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hotelImg from "../../Assests/HotelOffer/image_of_hotel.jpg";
import "./../../styles/HotelImg.css";

function SingleHotelImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        className="singlehotel-all-images"
      >
        {/* {hotelImageUrl.map((url, index) => (
          <div key={index} className="hotel-img-card">
            <a>
              <img
                className="hotel-img"
                id={`hotelCarousel${index}`}
                src={url}
                alt={`hotelimage${index}`}
                loading="lazy"
              />
            </a>
          </div>
        ))} */}
        <div className="image-container">
          <img
            className="single-hotel-image"
            id="hotelCarousel"
            src={hotelImg}
            alt="headerimage"
          />
        </div>
        <div className="image-container">
          <img
            className="single-hotel-image"
            id="hotelCarousel"
            src={hotelImg}
            alt="headerimage"
          />
        </div>
      </Carousel>
    </>
  );
}

export default SingleHotelImage;
