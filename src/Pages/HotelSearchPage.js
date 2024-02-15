import { useEffect, useState, lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
import Footer from "../components/Footer";
import MultiSelect from "../utils/MultiSelect";
import ExploreDealCarousel from "../components/Hotel/ExploreDealCarousel";
import Skeleton from "@mui/material/Skeleton";
const HotelCardsContainer = lazy(() => import("../components/Hotel/HotelCard"));

function HotelSearchPage() {

  const [sortBy, setsortBy] = useState(0);
  const [filter, setfilter] = useState("");
  const [ratingFilter, setratingFilter] = useState("");

  const [updateHotel, setUpdateHotel] = useState(false);

  // const SortData = async (value) => {

  //   console.log("api data", SortedPriceData);
  // };

  const [explorebestdeals, setexplorebestdeals] = useState(true);
  const [dealoftheday, setdealoftheday] = useState(true);
  const [isSortBy, setIssortBy] = useState(false);

  const storedHotelLocation = JSON.parse(
    localStorage.getItem("SearchHotelData")
  );

  const {
    data,
    isLoading: dataLoading,
    isError,
  } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":
    "${storedHotelLocation?.source}"}`,
    "GET"
  );

  //  handleChange for Sorted value

  const handleChange = (event) => {
    if (ratingFilter != "" || filter != "") {
      setfilter("");
      setratingFilter("");
    }
    setsortBy(event.target.value);
  };

  const fetchSortedData = async (sortBy) => {
    let urlWithSort = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":
      "${storedHotelLocation?.source}"}`;

    if (sortBy == "toprated") {
      urlWithSort += `&sort={"rating":-1}`;
    } else {
      urlWithSort += `&sort={"avgCostPerNight":${sortBy}}`;
    }
    fetchData(urlWithSort, "GET");
  };

  const {
    data: SortedPriceData,
    fetchData,
    isLoading: sortedDataLoading,
  } = useFetch();

  useEffect(() => {
    fetchSortedData(sortBy);
  }, [sortBy]);

  const handleFilterChange = (event) => {
    if (ratingFilter != "") {
      setratingFilter("");
    }
    setfilter(event.target.value);
  };
  const handleFilterRatingChange = (event) => {
    if (filter != "") {
      setfilter("");
    }
    setratingFilter(event.target.value);
  };

  // Rating and Price filter

  const fetchfilterData = async (filter, ratingFilter) => {
    let urlWithFilter = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":
      "${storedHotelLocation.source}"}`;

    if (filter == 10) {
      urlWithFilter += `&filter={"avgCostPerNight":{ "$lte": 2500, "$gte": 0 }}`;
    } else if (filter == 20) {
      urlWithFilter += `&filter={"avgCostPerNight":{ "$lte": 5000, "$gte": 2500 }}`;
    } else if (filter == 30) {
      urlWithFilter += `&filter={"avgCostPerNight":{ "$lte": 10000, "$gte": 5000 }}`;
    } else if (ratingFilter == 5) {
      urlWithFilter += `&filter={"rating":{ "$lte": 5, "$gte": 4.5 }}`;
    } else if (ratingFilter == 4) {
      urlWithFilter += `&filter={"rating":{ "$lte": 5, "$gte": 4 }}`;
    } else if (ratingFilter == 3) {
      urlWithFilter += `&filter={"rating":{ "$lte": 5, "$gte": 3.5 }}`;
    } else if (ratingFilter == 2) {
      urlWithFilter += `&filter={"rating":{ "$lte": 5, "$gte": 3 }}`;
    } else {
      urlWithFilter += `&filter={"avgCostPerNight":{ "$lte": 10000, "$gte": 0 },"rating":{ "$lte": 5, "$gte":0 }}`;
    }

    fetchData(urlWithFilter, "GET");
  };
// function calling 
  useEffect(() => {
    fetchfilterData(filter, ratingFilter);
  }, [filter, ratingFilter]);

  useEffect(() => {
    if (updateHotel) {
      fetchfilterData(filter, ratingFilter);
      setUpdateHotel(false);
    }
  }, [updateHotel]);

  // console.log("apidata", SortedPriceData);

  return (
    <>
      <nav>
        <HotelSearchNavBar
          updatedHotelData={setUpdateHotel}
          searchData={true}
          Apidata={SortedPriceData}
        />

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
              {/* sortBy */}

              <FormControl>
                <InputLabel id="demo-simple-select-label">SortBy</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortBy}
                  label="sortBy"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Recommended</MenuItem>
                  <MenuItem value={"toprated"}>Top-rated</MenuItem>
                  <MenuItem value={1}>Price: Low to High</MenuItem>
                  <MenuItem value={-1}>Price: High to Low</MenuItem>
                </Select>
              </FormControl>

              {/* filter */}
              <FormControl>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="Price"
                  onChange={handleFilterChange}
                >
                  <MenuItem value={10}>0 - 2500</MenuItem>
                  <MenuItem value={20}>2500 - 5,000</MenuItem>
                  <MenuItem value={30}>5,000 - 10,000</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ratingFilter}
                  label="Rating"
                  onChange={handleFilterRatingChange}
                >
                  <MenuItem value={5}>4.5 & above</MenuItem>
                  <MenuItem value={4}>4 & above</MenuItem>
                  <MenuItem value={3}>3.5 & above</MenuItem>
                  <MenuItem value={2}>3 & above</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          {/* <div className="filter-search">
            <img src={search_logo} style={{ height: "24px", width: "24px" }} />
            <input type="text" className="hotel-filter-search-input" />
            <img src={moreoption} style={{ height: "16px", width: "16px" }} />
          </div> */}
        </div>
      </nav>

      <hr className="hotel-search-line"></hr>
      <main>
        {/* cards total */}
        <div className="total-hotel-title">
          <p>
            <b>{SortedPriceData?.hotels.length} </b>
            <span
              style={{
                color: "rgb(160, 160, 160)",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              of {SortedPriceData?.hotels.length} hotels in{" "}
              {SortedPriceData?.hotels[0]?.location}
            </span>
          </p>
        </div>

        {/* search hotel data cards(map laga hua he ayha)  */}

        <Suspense fallback={<div>Please Wait.. isLoading...</div>}>
          <HotelCardsContainer
            hotels={SortedPriceData?.hotels}
            start={0}
            end={8}
          />
        </Suspense>

        {/* <div className="hotel-container-cards">
          {SortedPriceData?.hotels &&
            SortedPriceData.hotels.slice(0, 8).map((hotel, index) => (
              <div className="hotel-cards" key={index}>
                <div>
                  <HotelImg
                    hotelImageUrl={hotel?.images}
                    Index={index}
                    sortedDataLoading={sortedDataLoading}
                  />
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
                      <h4 className="rating-of-hotel">{hotel.rating}/5</h4>
                    </div>
                  </div>
                  <div className="typeof-hotel">
                    <p className="hotel-types">4-star resort · Morjim</p>
                    <p className="total-people-rated">253 ratings</p>
                  </div>
                  <div className="hotel-price-details">
                    <div className="price-tax">
                      <h3 className="hotel-price">
                        {Math.floor(hotel.avgCostPerNight)}
                      </h3>
                      <p className="hotel-tax">
                        + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                      </p>
                      <p className="per-day-or-night">/ night</p>
                    </div>
                    <div className="discount-offers">
                      <p className="actul-price">
                        {Math.floor(
                          hotel.avgCostPerNight +
                            (hotel.avgCostPerNight * 20) / 100
                        )}
                      </p>
                      <p className="percentage-off">20 % off</p>
                      <p className="option-of-bank">
                        + Additional bank discounts
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div> */}

        <div style={{ height: "30px", width: "100%" }}></div>

        {/* explore best deals */}
        {/* {explorebestdeals ? (
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
                <ExploreDealCarousel data={data?.hotels} slidesToShow={4} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )} */}

        <div style={{ height: "30px", width: "100%" }}></div>

        {/* Second Api call */}
        {/* <div className="hotel-container-cards">
          {SortedPriceData?.hotels &&
            SortedPriceData?.hotels.slice(8, 16).map((hotel, index) => (
              <div className="hotel-cards" key={index}>
                <div>
                  <HotelImg hotelImageUrl={hotel?.images} Index={index + 8} />
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
                      <h4 className="rating-of-hotel">{hotel.rating}/5</h4>
                    </div>
                  </div>
                  <div className="typeof-hotel">
                    <p className="hotel-types">4-star resort · Morjim</p>
                    <p className="total-people-rated">253 ratings</p>
                  </div>
                  <div className="hotel-price-details">
                    <div className="price-tax">
                      <h3 className="hotel-price">
                        {Math.floor(hotel.avgCostPerNight)}
                      </h3>
                      <p className="hotel-tax">
                        + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                      </p>
                      <p className="per-day-or-night">/ night</p>
                    </div>
                    <div className="discount-offers">
                      <p className="actul-price">
                        {Math.floor(
                          hotel.avgCostPerNight +
                            (hotel.avgCostPerNight * 20) / 100
                        )}
                      </p>
                      <p className="percentage-off">20 % off</p>
                      <p className="option-of-bank">
                        + Additional bank discounts
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div> */}
        <Suspense fallback={<div>Please..Wait..isLoading....</div>}>
          <HotelCardsContainer
            hotels={SortedPriceData?.hotels}
            start={8}
            end={16}
          />
        </Suspense>
        <div style={{ height: "30px", width: "100%" }}></div>

        {/* deal of the day */}
        {/* {dealoftheday ? (
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
        )} */}

        <div style={{ height: "30px", width: "100%" }}></div>

        {/* Third Api call*/}
        {/* <div className="hotel-container-cards">
          {SortedPriceData?.hotels &&
            SortedPriceData?.hotels.slice(16).map((hotel, index) => (
              <div className="hotel-cards" key={index}>
                <div>
                  <HotelImg hotelImageUrl={hotel?.images} Index={index} />
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
                      <h4 className="rating-of-hotel">{hotel.rating}/5</h4>
                    </div>
                  </div>
                  <div className="typeof-hotel">
                    <p className="hotel-types">4-star resort · Morjim</p>
                    <p className="total-people-rated">253 ratings</p>
                  </div>
                  <div className="hotel-price-details">
                    <div className="price-tax">
                      <h3 className="hotel-price">
                        {Math.floor(hotel.avgCostPerNight)}
                      </h3>
                      <p className="hotel-tax">
                        + {hotel.rooms[0]?.costDetails.taxesAndFees} tax
                      </p>
                      <p className="per-day-or-night">/ night</p>
                    </div>
                    <div className="discount-offers">
                      <p className="actul-price">
                        {Math.floor(
                          hotel.avgCostPerNight +
                            (hotel.avgCostPerNight * 20) / 100
                        )}
                      </p>
                      <p className="percentage-off">20 % off</p>
                      <p className="option-of-bank">
                        + Additional bank discounts
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div> */}
        <Suspense fallback={<div>Please..Wait..isLoading....</div>}>
          <HotelCardsContainer
            hotels={SortedPriceData?.hotels}
            start={16}
            end={20}
          />
        </Suspense>

        <div style={{ height: "20px", width: "100%" }}></div>
      </main>

      <Footer />
    </>
  );
}
export default HotelSearchPage;
