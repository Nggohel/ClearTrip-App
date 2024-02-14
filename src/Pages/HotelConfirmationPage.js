import HotelSearchNavBar from "../components/Hotel/HotelSearchNavBar";
import "../styles/HotelConfirmationPage.css";
import cfmImg1 from "../Assests/Images/Rooms/image-1.jpg";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import { useEffect, useState } from "react";
import { Url } from "../Data/Url";
import FinalHotelPriceCard from "../components/Hotel/FinalHotelPriceCard";
import { useNavigate } from "react-router-dom";

function HotelConfirmationPage() {
  const { BookingId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const getLoginAndsingUpData = JSON.parse(
    localStorage.getItem("signup&loginData")
  );

  const RoomPrice = localStorage.getItem("RoomBookingData");
  const MobileNo = JSON.parse(sessionStorage.getItem("MobileNo"));
  // use for name ,email getLoginAndsingUpData
  useEffect(() => {
    if (getLoginAndsingUpData != null) {
      setName(
        getLoginAndsingUpData?.data.name ||
          getLoginAndsingUpData?.data?.user?.name
      );
      setEmail(
        getLoginAndsingUpData?.data.email ||
          getLoginAndsingUpData?.data?.user?.email
      );
    }
  }, [name, email]);
  // input change in Name
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // input change in Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // input change in password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const amount =
    (parseFloat(RoomPrice) +
      (parseFloat(RoomPrice) * 4) / 100 -
      (parseFloat(RoomPrice) * 3) / 100) *
    100;
  const receiptId = BookingId;
  const currency = "INR";

  console.log(amount);
  // payment function for Final Value Payment
  const handlePayment = async (e) => {
    const response = await fetch(`${Url.Payment_Api}/order`, {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_SJWXgAHBZeNPoG", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "NGsolution", //your business name
      description: "Payment For Booking",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(`${Url.Payment_Api}/order/validate`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
        if (jsonRes?.msg == "success") {
          jsonRes.amount = amount;
          localStorage.setItem("PaymentStatus", JSON.stringify(jsonRes));

          navigate("/hotelbookingsucessfull");
        }
      },
      prefill: {
        name: name, //your customer's name
        email: "Ngsolution@gmail.com",
        contact: MobileNo,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#ff7d26",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  const { data: HotelConfirmationData } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${BookingId}`,
    "GET"
  );

  useEffect(() => {
    if (HotelConfirmationData) {
      localStorage.setItem(
        "hotelName",
        JSON.stringify({
          name: HotelConfirmationData?.name,
          location: HotelConfirmationData?.location,
        })
      );
    }
  }, []);

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
                    {HotelConfirmationData?.rating}-star hotel in{" "}
                    {HotelConfirmationData?.location}
                  </p>
                  <h3 className="confirmation-title-name">
                    {HotelConfirmationData?.name}
                  </h3>
                  {/* rating logo baki he  */}
                  <div></div>
                </div>
                <div className="confirmation-hotel-img-div">
                  <img
                    src={HotelConfirmationData?.images[0]}
                    className="confirmation-hotel-img"
                  ></img>
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
                  {/* <div className="total-guest-room-details">
                    <p className="totalguest-room-details-para">Details</p>
                  </div> */}
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
                {/* <p className="moredetails-confirmroom">See room details</p> */}
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
          {/* <div className="booking-container">
            <h2 className="booking-container-title">Booking policy</h2>
            <div className="booking-details">
              <p className="booking-details-para">
                Guests below 18 years of age allowed
              </p>
            </div>
            <div className="booking-seemore">
              <p className="booking-seemore-para">See more</p>
            </div>
          </div> */}
          {/* guest-list  and check userLogin or not */}
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
                  type="text"
                  className="Name-input"
                  placeholder="First name"
                  value={name}
                  onChange={handleNameChange}
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
                value={email}
                onChange={handleEmailChange}
              ></input>
            </div>
          </div>
          {name && email != null ? (
            ""
          ) : (
            <div className="booking-email-container">
              <div className="confirm-firstname">
                <input
                  type="password"
                  className="firstname-input"
                  placeholder="Password Here"
                  onChange={handlePasswordChange}
                ></input>
              </div>
            </div>
          )}

          <button className="ctn-payment-btn" onClick={handlePayment}>
            Continue to payment
          </button>
        </div>
        <FinalHotelPriceCard />
      </div>
    </>
  );
}
export default HotelConfirmationPage;
