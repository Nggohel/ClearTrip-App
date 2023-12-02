import OfferCarousel from "../Carousels/OfferCarousel";
import ICICI from "../../Assests/Images/ICICI";
import FinalFlightDataCard from "./FinalFlightDataCard";
import "./../../styles/SearchFlightData.css";

function SearchFlightData({ searchvalue }) {
  return (
    <div>
      <OfferCarousel
        icon={<ICICI />}
        offer={"Flat 12% off"}
        bankCard={"ICICICC"}
        card={"with ICICI Credit Cards"}
      />
      <FinalFlightDataCard searchvalue={searchvalue} />
    </div>
  );
}

export default SearchFlightData;
