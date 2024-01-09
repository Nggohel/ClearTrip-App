import HotelSearchNavBar from "../components/Hotel/HotelSearchNavBar";
import "../styles/HotelConfirmationPage.css";
import cfmImg1 from "../Assests/Images/Rooms/image-1.jpg";
import RightFlightReviewItinerary from "../components/Flights/RightFlightReviewItinerary";

function HotelConfirmationPage() {
  return (
    <>
      <HotelSearchNavBar searchData={false} btnCss="btnCss" />
      <hr></hr>
      <div className="hotelconfirmation-main-container">
      <div>
        <div className="heading-itinerary">
          <div className="no-heading">1</div>
          <h2>Review Your Itinerary</h2>
        </div>

        <div className="hotelconfirmation-Container">
          <div className="confirmation-title-card">
            <div style={{ display: "flex" }}>
              <div className="confirmation-title">
                <p className="confirmation-title-para">
                  4-star hotel in Calangute
                </p>
                <h3 className="confirmation-title-name">
                  BloomSuites Calangute
                </h3>
                {/* rating logo baki he  */}
                <div></div>
              </div>
              <div className="confirmation-hotel-img-div">
                <img src={cfmImg1} className="confirmation-hotel-img"></img>
              </div>
            </div>
          </div>
          <div className="partation-card">
            <div className="partation-one"></div>
            <div className="partation-left"></div>
            <div className="partation-right"></div>
          </div>
          <div className="confirmation-bottomcard">
            <div className="confirmation-bottom">
              <div className="bottom-first-part">
                <div className="hotel-checkin">
                  <p className="hotel-checkin-para">Check-in</p>
                  <h2 className="hotel-checkin-date">09 Jan</h2>
                  <p className="hotel-checkin-para">Tue, 02 PM</p>
                </div>
                <div className="total-nights">
                  <p className="total-nights-para">1 night</p>
                </div>
                <div className="hotel-checkout">
                  <p className="hotel-checkin-para">Check-out</p>
                  <h2 className="hotel-checkin-date">10 Jan</h2>
                  <p className="hotel-checkin-para">Tue, 02 PM</p>
                </div>
              </div>
              <div className="bottom-sec-part"></div>
              <div className="bottom-third-part">
                <div className="total-guest-room">
                  <p className="hotel-checkin-para">Rooms & Guests</p>
                  <h2 className="hotel-checkin-date">1 Room, 2 Guests</h2>
                  <p className="hotel-checkin-para">2 adults</p>
                </div>
                <div className="total-guest-room-details">
                  <p className="totalguest-room-details-para">Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="confirm-roomdetails">
          <h1 className="confirm-room-title">Superior Twin Room</h1>
          <div className="confirm-room-card">
            <div className="confirm-room-imgs">
              <img src={cfmImg1} className="confirmroom-img"></img>
            </div>
            <div className="confirm-room-details">
              <p className="slected-confirmroom">Room Only</p>
              <p className="moredetails-confirmroom">See room details</p>
            </div>
          </div>
        </div>
        <div className="partation-line"></div>
        <div className="cancellation-container">
          <h2 className="confirmpage-cancellation-title">
            Cancellation policy
          </h2>
          <p className="confirmpage-cancellation-para">
            This special discounted rate is non-refundable. If you choose to
            cancel this booking, you will not be refunded any of the payment.
          </p>
          <div className="cancel-details-card">
            <div className="cancle-between">
              <p className="cancle-between-para">Cancel between</p>
              <p className="cancle-between-para">Amount refundable</p>
            </div>
            <div className="canceldetails-inrang-card">
              <div className="canceldetails-inrang-div">
                <div className="canceldetails-time">
                  <p className="canceldetails-time-para">07 Jan, 14:00 IST</p>
                  <p className="canceldetails-time-para">09 Jan, 14:00 IST</p>
                </div>
                <div className="canceldetails-inrang"></div>
                <div className="">
                  <p className="canceldetails-range">No Refund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partation-line"></div>
        <div className="booking-container">
          <h2 className="booking-container-title">Booking policy</h2>
          <div className="booking-details">
            <p className="booking-details-para">
              Guests below 18 years of age allowed
            </p>
          </div>
          <div className="booking-seemore">
            <p className="booking-seemore-para">See more</p>
          </div>
        </div>
        {/* guest-list */}
        <div className="heading-itinerary">
          <div className="no-heading">2</div>
          <h2>Guest details</h2>
        </div>
        <div className="naming">
          <div className="name-titles">
            <div className="name-title">
              <p className="name-title-para">Mr.</p>
            </div>
            <div className="name-title">
              <p className="name-title-para">Mrs.</p>
            </div>
            <div className="name-title">
              <p className="name-title-para">Ms.</p>
            </div>
          </div>
          <div className="confirm-name-details">
            <div className="confirm-firstname">
              <input
                className="firstname-input"
                placeholder="First name"
              ></input>
            </div>
            <div className="confirm-lastname">
              <input
                className="firstname-input"
                placeholder="Last name"
              ></input>
            </div>
          </div>
        </div>
        <div className="booking-email-container">
          <p className="booking-email-para">
            Booking details will be sent to this number and email address
          </p>
          <div className="confirm-email">
            <input
              className="email-input"
              placeholder="Enter email here"
            ></input>
          </div>
        </div>
        <div className="other-guests-container">
          <h2 className="other-guests-title">Other guests</h2>
          <p className="other-guests-para">
            You may be required to show name of all guests for Visa purpose
          </p>
          <button className="other-guests-btn">Add new guest</button>
        </div>

        <button className="ctn-payment-btn">Continue to payment</button>
      </div>
      <RightFlightReviewItinerary/>
      </div>
    </>
  );
}
export default HotelConfirmationPage;
