import TophotelCard from "./TophotelCard";
import greatdealimg1 from "../../Assests/hotelgreatdeal_1.webp";
import greatdealimg2 from "../../Assests/hotelgreatdeal_2.webp";
import greatdealimg3 from "../../Assests/hotelgreatdeal_3.webp";
import greatdealimg4 from "../../Assests/hotelgreatdeal_4.webp";
import greatdealimg5 from "../../Assests/hotelgreatdeal_5.jpeg";
import greatdealimg6 from "../../Assests/hotelgreatdeal_6.jpeg";
import greatdealimg7 from "../../Assests/hotelgreatdeal_7.jpg";
import greatdealimg8 from "../../Assests/hotelgreatdeal_8.jpg";
import greatdealimg9 from "../../Assests/hotelgreatdeal_9.jpg";
import Halfratinglogo from "../../Assests/ratingLogo/Halfratinglogo.svg";
import Fullratinglogo from "../../Assests/ratingLogo/fullrating.svg";
import Ratinglogo from "../../Assests/ratingLogo/Ratinglogo.svg";
function AlltopHotelCard() {
  return (
    <>
      <div className="hotels-great-deals-cards">
        <TophotelCard
          hotelimg={greatdealimg1}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Ramada Plaza Agra"}
          city={"Agra"}
        />
        <TophotelCard
          hotelimg={greatdealimg2}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Ramee Royal Reso..."}
          city={"Udaipur"}
        />
        <TophotelCard
          hotelimg={greatdealimg3}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Dodas Palace by S..."}
          city={"Jaipur"}
        />
        <TophotelCard
          hotelimg={greatdealimg4}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"The Park Hyderab.."}
          city={"Hydrabad"}
        />
        <TophotelCard
          hotelimg={greatdealimg5}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Tranquility Cotta..."}
          city={"Goa"}
        />
        <TophotelCard
          hotelimg={greatdealimg6}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Resorte Marinha D..."}
          city={"Goa"}
        />
        <TophotelCard
          hotelimg={greatdealimg7}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Sayaji Hotel Vado.."}
          city={"Vadodara"}
        />
        <TophotelCard
          hotelimg={greatdealimg8}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Zone By The Park Kolkata"}
          city={"Koltaka"}
        />
        <TophotelCard
          hotelimg={greatdealimg9}
          ratinglogo={Ratinglogo}
          rating1={Fullratinglogo}
          rating2={Fullratinglogo}
          rating3={Fullratinglogo}
          rating4={Fullratinglogo}
          rating5={Halfratinglogo}
          head={"Kiruba Castle"}
          city={"Chennai"}
        />
      </div>
    </>
  );
}
export default AlltopHotelCard;
