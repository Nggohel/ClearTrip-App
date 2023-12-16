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
import HotelRightSection from "../components/section/HotelRightSection";
import "../styles/Hotelpage.css";
import AllhotelTrendingPlaces from "../components/Hotel/AllhotelTrendingPlaces";
import AlltopHotelCard from "../components/Hotel/AlltopHotelCard";
import HotelPara from "../components/Hotel/HotelPara";

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
        <div style={{ position: " relative" }}>
          <img src={goa} />

          <div className="place-properties-data">
            <p>Goa</p>
            <p>3051 Properties</p>
          </div>
        </div>
        <div style={{ position: " relative" }}>
          <img src={delhi} />
          <div className="place-properties-data">
            <p>Delhi</p>
            <p>2456 Properties</p>
          </div>
        </div>
        <div style={{ position: " relative" }}>
          <img src={banglore} />
          <div className="place-properties-data">
            <p>Banglore</p>
            <p>2500 Properties</p>
          </div>
        </div>
        <div style={{ position: " relative" }}>
          <img src={varanasi} />
          <div className="place-properties-data">
            <p>Varanasi</p>
            <p>1850 Properties</p>
          </div>
        </div>
        <div style={{ position: " relative" }}>
          <img src={abuDhabi} />
          <div className="place-properties-data">
            <p>AbuDhabi</p>
            <p>305 Properties</p>
          </div>
        </div>
      </div>
      <h1 className="top-hotel-deal">Top hotels with great deals</h1>
      <AlltopHotelCard />
      <h1 className="hotel-trending">Trending getaways!</h1>
      <AllhotelTrendingPlaces />
      <div style={{ height: "60px" }}></div>
      <HotelPara/>
    </>
  );
}
export default HotelPage;
