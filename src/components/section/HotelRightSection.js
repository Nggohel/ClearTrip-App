import HotelOffer from "../Carousels/HotelOffer";
import SecondCarousel from "../Carousels/SecondCarousel";
import TopCarouselCard from "../Carousels/TopCarouselCard";
import "./../../styles/RightSideSection.css";

function HotelRightSection() {
  return (
    <>
      <div className="hotel-rightaside-sesction">
        <HotelOffer />
        <div className="hotel-rightaside-sesction-offers">
          <h3>MoreOffers</h3>
          <a>viewall</a>
        </div>
        <SecondCarousel />
      </div>
    </>
  );
}

export default HotelRightSection;
