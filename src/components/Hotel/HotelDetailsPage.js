import HotelSearchNavBar from "./HotelSearchNavBar";
import "../../styles/HotelDetails.css";
import Ratinglogo from "../../Assests/ratingLogo/Ratinglogo.svg";
import fullratinglogo from "../../Assests/ratingLogo/fullrating.svg";
import Halfratinglogo from "../../Assests/ratingLogo/Halfratinglogo.svg";
import expand_logo from "../../Assests/Images/expand_logo.svg";
import { Fastfood, Wifi } from "@mui/icons-material";
function HotelDetailsPage() {
  return (
    <>
      <div>
        <HotelSearchNavBar />
        <div className="all-details-container">
          <section className="general">
            <div className="general-container">
              <div>
                <h3 className="hotel-name">
                  Planet Hollywood Beach Resort Goa
                </h3>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}></div>
                <p className="hotel-details-para">
                  5-star Hotel · Utorda South Goa, Goa
                </p>
              </div>
              <div style={{ marginTop: "8px", marginBottom: "8px" }}></div>
              <div style={{ display: "flex" }}>
                <h2 className="hotel-details-rating">4.5/5</h2>
                <div className="hoteldetails-rating-details">
                  <img
                    src={Ratinglogo}
                    style={{ height: "16px", width: "25px" }}
                  />
                  <img
                    src={fullratinglogo}
                    style={{ height: "16px", width: "16px", marginLeft: "4px" }}
                  />
                  <img
                    src={fullratinglogo}
                    style={{ height: "16px", width: "16px" }}
                  />
                  <img
                    src={fullratinglogo}
                    style={{ height: "16px", width: "16px" }}
                  />
                  <img
                    src={fullratinglogo}
                    style={{ height: "16px", width: "16px" }}
                  />
                  <img
                    src={Halfratinglogo}
                    style={{ height: "16px", width: "16px" }}
                  />
                </div>
                <div className="total-customer-rating">
                  <p className="total-review">(2,092 reviews)</p>
                  <img
                    src={expand_logo}
                    style={{ height: "24px", width: "24px" }}
                  />
                </div>
                <div
                  style={{ paddingBottom: "12px", paddingTop: "12px" }}
                ></div>
              </div>
              <div className="extra-details">
                <div className="food-details">
                  <div className="left-food-details">
                    <Fastfood />

                    <p className="left-food-details-p">
                      Free breakfast on select plans
                    </p>
                    <div style={{ marginBottom: "4px" }}></div>
                    <p className="left-food-details-p2">
                      Some plans include free breakfast
                    </p>
                  </div>
                </div>
                <div className="food-details"></div>
              </div>
            </div>
          </section>
          <hr style={{ width: "624px" }}></hr>
          <section className="amenities">
            <div className="amenities-container">
              <h1 className="amenities-title">Amenities</h1>
              <div className="typesof-amenities">
                <div className="type-amenities">
                  <span className="amenities-logo"><Wifi /></span>
                  <p className="amenities-name">WiFi services</p>
                </div>
                <div className="type-amenities">
                  <p className="amenities-name">WiFi services</p>
                </div>
                <div className="type-amenities">
                  <p className="amenities-name">WiFi services</p>
                </div>
                <div className="type-amenities">
                  <p className="amenities-name">WiFi services</p>
                </div>
                <div className="type-amenities">
                  <p className="amenities-name">WiFi services</p>
                </div>
                <div className="type-amenities">
                  <p className="amenities-name">WiFi services</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default HotelDetailsPage;
