import NavBar from "../components/NavBar";
import HotelmainSection from "../components/section/HotelmainSection";
import LeftSideSection from "../components/section/leftSideNavBar";
import hotelOffer1 from "../Assests/Images/Hoteloffer/hotel_offer_1.webp";
import hotelOffer2 from "../Assests/Images/Hoteloffer/hotel_offer_2.webp";
import hotelOffer3 from "../Assests/Images/Hoteloffer/hotel_offer_3.webp";
import goa from "../Assests/Images/goa.jpg";
import delhi from "../Assests/Images/delhi.jpg";
import banglore from "../Assests/Images/bangalore.webp";
import varanasi from "../Assests/Images/varanasi.jpg";
import abuDhabi from "../Assests/Images/abuDhabi.jpg";
import "../styles/Hotelpage.css";
import HotelRightSection from "../components/section/HotelRightSection";

function HotelPage() {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftSideSection />
        <HotelmainSection />
        <HotelRightSection />
      </div>
      <div className="hotelpage-offerimg">
        <img src={hotelOffer1} />
        <img src={hotelOffer2} />
        <img src={hotelOffer3} />
      </div>
      <h2 className="popular-destination">Popular destination</h2>
      <div className="flightpage-popular-destination">
        <img src={goa} />
        <img src={delhi} />
        <img src={banglore} />
        <img src={varanasi} />
        <img src={abuDhabi} />
      </div>
    </>
  );
}
export default HotelPage;
