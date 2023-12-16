import goa1 from "../../Assests/Images/Trendingplaces/Goa_1.jpg";
import goa2 from "../../Assests/Images/Trendingplaces/Goa_2.jpg";
import goa3 from "../../Assests/Images/Trendingplaces/Goa_3.jpg";
import Ooty1 from "../../Assests/Images/Trendingplaces/Ooty1.jpg";
import Ooty2 from "../../Assests/Images/Trendingplaces/Ooty2.jpg";
import Ooty3 from "../../Assests/Images/Trendingplaces/Ooty3.jpg";
import Manali1 from "../../Assests/Images/Trendingplaces/Manali1.jpg";
import Manali2 from "../../Assests/Images/Trendingplaces/Manali2.jpg";
import Manali3 from "../../Assests/Images/Trendingplaces/Manali3.jpg";
import TrendingPlaces from "./TrendingPlaces";
function AllhotelTrendingPlaces() {
  return (
    <>
      <div style={{ display: "flex", marginLeft: "240px" }}>
        <TrendingPlaces
          img1={goa1}
          img2={goa2}
          img3={goa3}
          head={"Best Hotel In Goa"}
          para={"3051 Properties available"}
        />
        <TrendingPlaces
          img1={Ooty1}
          img2={Ooty2}
          img3={Ooty3}
          head={"Best Hotel In Ooty"}
          para={"510 Properties available"}
        />

        <TrendingPlaces
          img1={Manali1}
          img2={Manali2}
          img3={Manali3}
          head={"Best Hotel In Manali"}
          para={"1198 Properties available"}
        />
      </div>
    </>
  );
}
export default AllhotelTrendingPlaces;
