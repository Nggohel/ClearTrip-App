import SecondCarousel from "./SecondCarousel";
import TopCarouselCard from "./TopCarouselCard";
import "./../styles/RightSideSection.css";

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
