import SecondCarousel from "../Carousels/SecondCarousel";
import TopCarouselCard from "../Carousels/TopCarouselCard";
import "./../../styles/RightSideSection.css";

function RightSideSection() {
  return (
    <>
      <div className="rightaside-sesction">
        <TopCarouselCard />
        <div className="rightaside-sesction-offers">
          <h3>MoreOffers</h3>
          <a>viewall</a>
        </div>
        <SecondCarousel />
      </div>
    </>
  );
}

export default RightSideSection;
