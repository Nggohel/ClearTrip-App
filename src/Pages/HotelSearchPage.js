import HotelSearchNavBar from "../components/Hotel/HotelSearchNavBar";
import search_logo from "../Assests/Images/Hotel-filterLogo/search_logo.svg";
import moreoption from "../Assests/Images/Hotel-filterLogo/more_option_logo.svg";
import Hoteloffer1 from "../Assests/HotelOffer/Hoteloffer_1.svg";
import Hoteloffer2 from "../Assests/HotelOffer/Hoteloffer_2.svg";
import Hoteloffer3 from "../Assests/HotelOffer/Hoteloffer_3.svg";
import Hoteloffer4 from "../Assests/HotelOffer/Hoteloffer_4.svg";
import Hoteloffer5 from "../Assests/HotelOffer/Hoteloffer_5.svg";
import Ratinglogo from "../Assests/ratingLogo/Ratinglogo.svg";
import HotelImg from "../components/Carousels/HotelImg";
import "../styles/HotelSearchPage.css";
import DealofthedayCarousel from "../components/Hotel/DealofthedayCarousel";
import { Link } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

import MultiSelect from "../utils/MultiSelect";

function HotelSearchPage() {
  // const [optionSelected, setSelected] = useState(null);
  const [optionSelected1, setSelected1] = useState([]);
  const [optionSelected2, setSelected2] = useState([]);
  const [optionSelected3, setSelected3] = useState([]);
  const [optionSelected4, setSelected4] = useState([]);
  const [optionSelected5, setSelected5] = useState([]);
  const [optionSelected6, setSelected6] = useState([]);

  const options = [
    { value: 0, label: "Recommended" },
    { value: 1, label: "Top-rated" },
    { value: 2, label: "Price: High to Low" },
    { value: 3, label: "Price: Low to High" },
  ];

  const dealOption = [
    { value: 0, label: "Top-5" },
    { value: 1, label: "Top-4" },
    { value: 2, label: "Top-3" },
  ];

  const StarCategoryOption = [
    { value: 0, label: "5-star" },
    { value: 1, label: "4-star" },
    { value: 2, label: "3-star" },
  ];

  const GuestratingOption = [
    { value: 0, label: "4.5 & above" },
    { value: 1, label: "4 & above" },
    { value: 2, label: "3.5 & above" },
    { value: 3, label: "3 & above" },
  ];
  const localityOption = [
    { value: 0, label: "Vasco Da Gama" },
    { value: 1, label: "Baga" },
    { value: 2, label: "Vagator" },
    { value: 3, label: "Anjuna" },
  ];
  const priceOption = [
    { value: 0, label: "500 - 1000" },
    { value: 1, label: "1000 - 2000" },
    { value: 2, label: "2000 - 3000" },
    { value: 3, label: "3000 - 4000" },
    { value: 4, label: "4000 - 5000" },
  ];

  const [explorebestdeals, setexplorebestdeals] = useState(true);
  const [dealoftheday, setdealoftheday] = useState(true);
  const [isSortBy, setIssortBy] = useState(false);

  const storedHotelLocation = JSON.parse(
    localStorage.getItem("SearchHotelData")
  );

  // console.log(stored HotelLocation.source);

  const { data, isLoading, isError } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":
    "${storedHotelLocation.source}"}`,
    "GET"
  );

  // console.log("Hotel", data);

  //  handleChange for filters value
  const handleChange1 = (selected) => {
    setSelected1(selected);
    console.log("Selected values for MultiSelect 1:", optionSelected1);
  };

  const handleChange2 = (selected) => {
    setSelected2(selected);
    console.log("Deal", selected);
  };

  const handleChange3 = (selected) => {
    setSelected3(selected);
    console.log("star", selected);
  };

  const handleChange4 = (selected) => {
    setSelected4(selected);
  };

  const handleChange5 = (selected) => {
    setSelected5(selected);
  };

  const handleChange6 = (selected) => {
    setSelected6(selected);
  };

  // optional chaning

  console.log(optionSelected3);

  return (
    <>
      <nav>
        <HotelSearchNavBar searchData={true} />

        {/* hotel Offer Component  */}

        <div className="hotel-offer">
          <div className="hotel-offer-one">
            <div className="hotel-offers">
              <img
                src={Hoteloffer1}
                style={{ height: "33px", width: "32px" }}
              />
              <p className="hotel-offers-para-main">
                <span>Jackpot deals</span>
                <p className="hotel-offers-para-sec">25% & above</p>
              </p>
            </div>
          </div>
          <div className="hotel-offer-second">
            <div className="hotel-offers">
              <img
                src={Hoteloffer2}
                style={{ height: "33px", width: "32px" }}
              />
              <p className="hotel-offers-para-main">
                <span>Bestseller hotels</span>
                <p className="hotel-offers-para-sec">10% - 25% off</p>
              </p>
            </div>
          </div>
          <div className="hotel-offer-third">
            <div className="hotel-offers">
              <img
                src={Hoteloffer3}
                style={{ height: "33px", width: "32px" }}
              />
              <p className="hotel-offers-para-main">
                <span>Best budget deal</span>
                <p className="hotel-offers-para-sec">Min 20% off</p>
              </p>
            </div>
          </div>
          <div className="hotel-offer-four">
            <div className="hotel-offers">
              <img
                src={Hoteloffer4}
                style={{ height: "33px", width: "32px" }}
              />
              <p className="hotel-offers-para-main">
                <span>Premium hotels</span>
                <p className="hotel-offers-para-sec">Min 10% off</p>
              </p>
            </div>
          </div>
          <div className="hotel-offer-five">
            <div className="hotel-offers">
              <img
                src={Hoteloffer5}
                style={{ height: "33px", width: "32px" }}
              />
              <p className="hotel-offers-para-main">
                <span>Deal of the day</span>
                <p className="hotel-offers-para-sec">5% & above</p>
              </p>
            </div>
          </div>
        </div>
        {/* make comp of hotel filter */}
        <div className="hotel-filters">
          <div className="hotel-filters-title">
            <p className="hotel-filters-para">All filters</p>
          </div>
          <div className="hotel-filters-cards">
            <div className="filters-cards">
              <div>
                <MultiSelect
                  key="example_id"
                  options={options}
                  onChange={handleChange1}
                  value={optionSelected1}
                  isSelectAll={true}
                  menuPlacement={"bottom"}
                  placeholder="Sort by: Recommended"
                />
              </div>

              <div>
                <MultiSelect
                  key="example"
                  options={dealOption}
                  onChange={handleChange2}
                  value={optionSelected2}
                  isSelectAll={true}
                  menuPlacement={"bottom"}
                  placeholder="Deals"
                />
              </div>
              <div>
                <MultiSelect
                  key="example_id"
                  options={StarCategoryOption}
                  onChange={handleChange3}
                  value={optionSelected3}
                  isSelectAll={true}
                  menuPlacement={"bottom"}
                  placeholder="Star category"
                />
              </div>

              <div>
                <MultiSelect
                  key="example_id"
                  options={GuestratingOption}
                  onChange={handleChange4}
                  value={optionSelected4}
                  isSelectAll={true}
                  menuPlacement={"bottom"}
                  placeholder="Guest rating"
                />
              </div>

              <div>
                <MultiSelect
                  key="example_id"
                  options={localityOption}
                  onChange={handleChange5}
                  value={optionSelected5}
                  isSelectAll={true}
                  menuPlacement={"bottom"}
                  placeholder="Locality"
                />
              </div>
              <div>
                <MultiSelect
                  key="example_id"
                  options={priceOption}
                  onChange={handleChange6}
                  value={optionSelected6}
                  isSelectAll={true}
                  menuPlacement={"bottom"}
                  placeholder="Price"
                />
              </div>
            </div>
          </div>
          <div className="filter-search">
            <img src={search_logo} style={{ height: "24px", width: "24px" }} />
            <input type="text" className="hotel-filter-search-input" />
            <img src={moreoption} style={{ height: "16px", width: "16px" }} />
          </div>
        </div>
      </nav>

      <hr className="hotel-search-line"></hr>
      <main>
        {/* cards total */}
        <div className="total-hotel-title">
          <p>
            <b>1731 </b>
            <span
              style={{
                color: "rgb(160, 160, 160)",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              of 1731 hotels in Goa
            </span>
          </p>
        </div>

        {/* search hotel data cards(map laga hua he ayha)  */}

        <div className="hotel-container-cards">
          {data?.hotels &&
            data?.hotels.slice(0, 8).map((hotel, index) => (
              <div className="hotel-cards" key={index}>
                <div>
                  <HotelImg hotelImageUrl={hotel?.images} />
                </div>
                <Link
                  to="/allhoteldetails"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="hotel-details">
                    <h4 className="hotel-name">{hotel.name}</h4>
                    <div className="hotel-rating-details">
                      <img
                        src={Ratinglogo}
                        style={{ height: "12px", width: "18px" }}
                      />
                      <h4 className="rating-of-hotel">4.5/5</h4>
                    </div>
                  </div>
                  <div className="typeof-hotel">
                    <p className="hotel-types">4-star resort · Morjim</p>
                    <p className="total-people-rated">253 ratings</p>
                  </div>
                  <div className="hotel-price-details">
                    <div className="price-tax">
                      <h3 className="hotel-price">
                        {hotel.rooms[0]?.costDetails.baseCost}
                      </h3>
                      <p className="hotel-tax">
                        + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                      </p>
                      <p className="per-day-or-night">/ night</p>
                    </div>
                    <div className="discount-offers">
                      <p className="actul-price">
                        {hotel.rooms[0]?.costPerNight}
                      </p>
                      <p className="percentage-off">
                        {hotel.rooms[0]?.costDetails.discount} % off
                      </p>
                      <p className="option-of-bank">
                        + Additional bank discounts
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <div style={{ height: "30px", width: "100%" }}></div>

        {/* explore best deals */}
        {explorebestdeals ? (
          <div className="explore-deal-container">
            <div className="explore-deal-basecontainer">
              <h3 className="explore-deal-title">Explore best deals</h3>
              <div className="explore-deal-offers">
                <div className="hotel-offer">
                  <div className="hotel-offer-one">
                    <div className="hotel-offers">
                      <img
                        src={Hoteloffer1}
                        style={{ height: "33px", width: "32px" }}
                      />
                      <p className="hotel-offers-para-main">
                        <span>Jackpot deals</span>
                        <p className="hotel-offers-para-sec">25% & above</p>
                      </p>
                    </div>
                  </div>
                  <div className="hotel-offer-second">
                    <div className="hotel-offers">
                      <img
                        src={Hoteloffer2}
                        style={{ height: "33px", width: "32px" }}
                      />
                      <p className="hotel-offers-para-main">
                        <span>Bestseller hotels</span>
                        <p className="hotel-offers-para-sec">10% - 25% off</p>
                      </p>
                    </div>
                  </div>
                  <div className="hotel-offer-third">
                    <div className="hotel-offers">
                      <img
                        src={Hoteloffer3}
                        style={{ height: "33px", width: "32px" }}
                      />
                      <p className="hotel-offers-para-main">
                        <span>Best budget deal</span>
                        <p className="hotel-offers-para-sec">Min 20% off</p>
                      </p>
                    </div>
                  </div>
                  <div className="hotel-offer-four">
                    <div className="hotel-offers">
                      <img
                        src={Hoteloffer4}
                        style={{ height: "33px", width: "32px" }}
                      />
                      <p className="hotel-offers-para-main">
                        <span>Premium hotels</span>
                        <p className="hotel-offers-para-sec">Min 10% off</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="explore-deal-carousel">
                <DealofthedayCarousel data={data?.hotels} slidesToShow={4} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div style={{ height: "30px", width: "100%" }}></div>

        {/* Second Api call */}
        <div className="hotel-container-cards">
          {data?.hotels &&
            data?.hotels.slice(8, 16).map((hotel, index) => (
              <div className="hotel-cards" key={index}>
                <div>
                  <HotelImg hotelImageUrl={hotel?.images} />
                </div>
                <Link
                  to="/allhoteldetails"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="hotel-details">
                    <h4 className="hotel-name">{hotel.name}</h4>
                    <div className="hotel-rating-details">
                      <img
                        src={Ratinglogo}
                        style={{ height: "12px", width: "18px" }}
                      />
                      <h4 className="rating-of-hotel">4.5/5</h4>
                    </div>
                  </div>
                  <div className="typeof-hotel">
                    <p className="hotel-types">4-star resort · Morjim</p>
                    <p className="total-people-rated">253 ratings</p>
                  </div>
                  <div className="hotel-price-details">
                    <div className="price-tax">
                      <h3 className="hotel-price">
                        {hotel.rooms[0]?.costDetails.baseCost}
                      </h3>
                      <p className="hotel-tax">
                        + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                      </p>
                      <p className="per-day-or-night">/ night</p>
                    </div>
                    <div className="discount-offers">
                      <p className="actul-price">
                        {hotel.rooms[0]?.costPerNight}
                      </p>
                      <p className="percentage-off">
                        {hotel.rooms[0]?.costDetails.discount} % off
                      </p>
                      <p className="option-of-bank">
                        + Additional bank discounts
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <div style={{ height: "30px", width: "100%" }}></div>

        {/* deal of the day */}
        {dealoftheday ? (
          <div className="deal-of-day-container">
            <div className="deal-of-day-details">
              <div className="deal-of-day-title">
                <div className="deal-of-day-logo">
                  <img
                    src={Hoteloffer5}
                    style={{ height: "56px", width: "56px" }}
                  />
                </div>
                <div className="dealoftheday-title-container">
                  <h2 className="title-dealofthe-day">Deal</h2>
                  <h2 className="title-dealofthe-day">of the day</h2>
                </div>
                <div className="dealoftheday-btn-container">
                  <button className="btn-dealoftheday">View all</button>
                </div>
              </div>
              <div className="deal-of-day-carousels">
                <DealofthedayCarousel slidesToShow={3} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div style={{ height: "30px", width: "100%" }}></div>

        {/* Third Api call*/}
        <div className="hotel-container-cards">
          {data?.hotels &&
            data?.hotels.slice(16).map((hotel, index) => (
              <div className="hotel-cards" key={index}>
                <div>
                  <HotelImg hotelImageUrl={hotel?.images} />
                </div>
                <Link
                  to="/allhoteldetails"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="hotel-details">
                    <h4 className="hotel-name">{hotel.name}</h4>
                    <div className="hotel-rating-details">
                      <img
                        src={Ratinglogo}
                        style={{ height: "12px", width: "18px" }}
                      />
                      <h4 className="rating-of-hotel">4.5/5</h4>
                    </div>
                  </div>
                  <div className="typeof-hotel">
                    <p className="hotel-types">4-star resort · Morjim</p>
                    <p className="total-people-rated">253 ratings</p>
                  </div>
                  <div className="hotel-price-details">
                    <div className="price-tax">
                      <h3 className="hotel-price">
                        {hotel.rooms[0]?.costDetails.baseCost}
                      </h3>
                      <p className="hotel-tax">
                        + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                      </p>
                      <p className="per-day-or-night">/ night</p>
                    </div>
                    <div className="discount-offers">
                      <p className="actul-price">
                        {hotel.rooms[0]?.costPerNight}
                      </p>
                      <p className="percentage-off">
                        {hotel.rooms[0]?.costDetails.discount} % off
                      </p>
                      <p className="option-of-bank">
                        + Additional bank discounts
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <div style={{ height: "20px", width: "100%" }}></div>
      </main>

      {/* {isSortBy ? <ReactMultiSelect /> : ""} */}
      <Footer />
    </>
  );
}
export default HotelSearchPage;
