import emilogo from "../../Assests/Images/emilogo.svg";
import ICICI from "../../Assests/Images/ICICI";
import Offer from "../../Assests/Images/CT_offer.png";
import HDFC from "../../Assests/Images/HDFC.svg";
import Citi from "../../Assests/Images/Citi.svg";
import { useFlightContext } from "../../Hooks/useFlightContext";
function RightFlightReviewItinerary() {
  const { singleApiDepartureData, singleApiArrivalData } = useFlightContext();
  return (
    <>
      <aside>
        <div className="aside">
          <div className="main-rightside-div">
            <div className="billing-data">
              <div>
                <p className="avaliable-seat">
                  {singleApiDepartureData?.availableSeats} seat left
                </p>
              </div>
              <div className="bill-price">
                <div style={{ fontSize: "16px", lineHeight: "20px" }}>
                  Total Price
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    lineHeight: "28px",
                    fontWeight: "700",
                  }}
                >
                  {singleApiDepartureData?.ticketPrice +
                    singleApiArrivalData?.ticketPrice}
                </div>
              </div>
              <div>
                <p className="number-of-person">1 adult</p>
                <div></div>
              </div>
            </div>
            <div className="other-expense">
              <div style={{ padding: "0px 16px 16px 16px" }}>
                <div className="line">
                  <hr></hr>
                </div>
                <div className="otherexpense-data">
                  <p className="otherexpense-details">
                    Base fare (1 traveller)
                  </p>
                  <p className="otherexpense-price">
                    ₹{" "}
                    {singleApiDepartureData?.ticketPrice +
                      singleApiArrivalData?.ticketPrice -
                      1934}
                  </p>
                </div>
                <div className="otherexpense-data">
                  <p className="otherexpense-details">Taxes and fees</p>
                  <p className="otherexpense-price">₹1,934</p>
                </div>
                <div className="otherexpense-data">
                  <p className="otherexpense-details">Add ons</p>
                  <p className="otherexpense-price">Free</p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="emi">
              <div style={{ display: "flex" }}>
                <img src={emilogo} />
                <div className="emi-details">
                  <div className="emi-offer">Pay in 6 interest free EMIs</div>
                  <div style={{ display: "flex" }}>
                    <div className="monthlty-price">at ₹1,414/month</div>
                    <div className="all-plans">View plans</div>
                  </div>
                  <div>
                    <p className="credit-card-data">with your credit card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-offer-div">
            <div className="offer-title-div">
              <h4 className="offer-title">Apply coupon or gift card</h4>
            </div>
            <form>
              <form style={{ width: "100%" }}>
                <div className="coupon-card">
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      placeholder="Coupon/Gift card"
                      value=""
                      className="coupon-card-input"
                    />
                  </div>
                  <button className="coupon-apply">Apply</button>
                </div>
              </form>
            </form>
            {/* main */}
            <div className="coupon-details-cards">
              <div className="coupon-details-card">
                <div className="coupon-button-active">All offers</div>
                <div className="coupon-button">Bank offers</div>
              </div>
              <div className="banks-offers-card">
                <ul style={{ width: "100%" }}>
                  <li className="banks-offers-list">
                    <div className="offer-div">
                      <div className="ticket">
                        <ICICI />
                        <div className="coupons-div">
                          <div className="coupons">ICICICC</div>
                        </div>
                        <div className="semi-circle-top"></div>
                        <div className="semi-circle-bottom"></div>
                      </div>
                      <span className="coupons-apply-btn">Apply</span>
                    </div>
                    <p className="coupons-off-percentage">Flat 12% off</p>
                    <p className="coupons-moredata">
                      Applicable on all ICICI Credit Cards excluding Amazon
                      ICI...
                      <span className="know-more">Know more</span>
                    </p>
                    <div>
                      <div className="dotted-line"></div>
                    </div>
                  </li>
                  <li className="banks-offers-list">
                    <div className="offer-div">
                      <div className="ticket">
                        <img
                          src={Offer}
                          style={{ height: "24px", width: "24px" }}
                        />
                        <div className="coupons-div">
                          <div className="coupons">CTDOM</div>
                        </div>
                        <div className="semi-circle-top"></div>
                        <div className="semi-circle-bottom"></div>
                      </div>
                      <span className="coupons-apply-btn">Apply</span>
                    </div>
                    <p className="coupons-off-percentage">Flat 500 off</p>
                    <p className="coupons-moredata">
                      Applicable on all payments modes
                      <span className="know-more">Know more</span>
                    </p>
                    <div>
                      <div className="dotted-line"></div>
                    </div>
                  </li>
                  <li className="banks-offers-list">
                    <div className="offer-div">
                      <div className="ticket">
                        <img
                          src={HDFC}
                          style={{ height: "24px", width: "24px" }}
                        />
                        <div className="coupons-div">
                          <div className="coupons">HDFCEMI</div>
                        </div>
                        <div className="semi-circle-top"></div>
                        <div className="semi-circle-bottom"></div>
                      </div>
                      <span className="coupons-apply-btn">Apply</span>
                    </div>
                    <p className="coupons-off-percentage">
                      Get up to ₹ 1,000 off + 3 Months NCEMI
                    </p>
                    <p className="coupons-moredata">
                      Applicable on HDFC Credit Card EMI
                      <span className="know-more">Know more</span>
                    </p>
                    <div>
                      <div className="dotted-line"></div>
                    </div>
                  </li>
                  <li className="banks-offers-list">
                    <div className="offer-div">
                      <div className="ticket">
                        <img
                          src={Citi}
                          style={{ height: "24px", width: "24px" }}
                        />
                        <div className="coupons-div">
                          <div className="coupons">CTDOM</div>
                        </div>
                        <div className="semi-circle-top"></div>
                        <div className="semi-circle-bottom"></div>
                      </div>
                      <span className="coupons-apply-btn">Apply</span>
                    </div>
                    <p className="coupons-off-percentage">Flat 12% off</p>
                    <p className="coupons-moredata">
                      Applicable on Citi Credit & Debit Cards
                      <span className="know-more">Know more</span>
                    </p>
                  </li>
                </ul>
                <div>
                  <div className="dotted-line"></div>
                  <p className="view-alloffer">View all →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default RightFlightReviewItinerary;
