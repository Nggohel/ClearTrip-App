import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import hotelImg from "../../Assests/HotelOffer/image_of_hotel.jpg";
import "./../../styles/HotelImg.css";

function SingleHotelImage({ ImageUrL }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Url = ImageUrL?.slice(0, 3);
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
        className="singlehotel-all-images"
      >
        {Url ? (
          Url.map((url, index) => (
            <div key={index} className="image-container">
              <a>
                <img
                  className="single-hotel-image"
                  id={`hotelCarousel${index}`}
                  src={url}
                  alt={`singlehotelimage${index}`}
                  loading="lazy"
                />
              </a>
            </div>
          ))
        ) : (
          <div>
            <h2 style={{ textAlign: "center" }}>
              PLease Wait.. Data is Loading
            </h2>
          </div>
        )}
        {/* 
        <div className="image-container">
          <img
            className="single-hotel-image"
            id="hotelCarousel"
            src={hotelImg}
            alt="headerimage"
          />
        </div> */}
      </Carousel>
    </>
  );
}

export default SingleHotelImage;
