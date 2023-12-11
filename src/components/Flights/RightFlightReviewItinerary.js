import emilogo from "../../Assests/Images/emilogo.svg";
function RightFlightReviewItinerary() {
  return (
    <>
      <aside className="aside">
        <div className="main-rightside-div">
          <div className="billing-data">
            <div>
              <p className="avaliable-seat">3 seat left</p>
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
                ₹8,481
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
                <p className="otherexpense-details">Base fare (1 traveller)</p>
                <p className="otherexpense-price">₹5,934</p>
              </div>
              <div className="otherexpense-data">
                <p className="otherexpense-details">Taxes and fees</p>
                <p className="otherexpense-price">₹2,934</p>
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
      </aside>
    </>
  );
}

export default RightFlightReviewItinerary;
