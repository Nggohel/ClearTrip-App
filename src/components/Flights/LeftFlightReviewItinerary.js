import React, { useEffect, useMemo, useState } from "react";
import ArrowItinerary from "../../Assests/Images/ArrowItinerary";
import AxisLogo from "../../Assests/Images/AxisLogo";
import Rupees from "../../Assests/Images/AxisbankLogo/Rupees";
import Clock from "../../Assests/Images/Clock";
import Dottedline from "../../Assests/Images/Dottedline";
import Flight6E from "../../Assests/Images/Flight6E";
import "../../styles/FlightReviewItinerary.css";
import Seat from "../../Assests/Images/AxisbankLogo/Seat";
import Cancel from "../../Assests/Images/AxisbankLogo/Cancel";
import Dining from "../../Assests/Images/AxisbankLogo/Dining";
import FlightReviewAccordion from "../Accordion/FlightReviewAccordion";
import Departureplan from "../../Assests/Images/Flight/Departureplan";
import Arrivedplan from "../../Assests/Images/Flight/Arrivedplan";
import PaidMeal from "../../Assests/Images/Flight/PaidMeal";
import Laguage from "../../Assests/Images/Flight/Laguage";
import PaidSeat from "../../Assests/Images/Flight/PaidSeat";
import CabinLogo from "../../Assests/Images/Flight/CabinLogo";
import Cancelticket from "../../Assests/Images/Flight/Cancelticket";
import DateChange from "../../Assests/Images/Flight/DateChange";
import mediCancelDTSvg from "../../Assests/Images/mediCancelDTSvg.svg";
import DownArrow from "../../Assests/Images/DownArrow";
import useFetch from "../../Hooks/UseFetch";
import { useFlightContext } from "../../Hooks/useFlightContext";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "../../Data/Url";
import Toaster from "../../utils/Toaster";

function LeftFlightReviewItinerary() {
  const {
    searchData,
    singleApiDepartureData,
    setsingleApiDepartureData,
    singleApiArrivalData,
    setsingleApiArrivalData,
    loader,
    setloader,
  } = useFlightContext();

  const getLoginAndsingUpData = JSON.parse(
    localStorage.getItem("signup&loginData")
  );

  const MobileNo = JSON.parse(sessionStorage.getItem("MobileNo"));

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const arrivalId = localStorage.getItem("ArrivalId");
  const DepartureId = localStorage.getItem("DepartureId");
  const [toaster, setToaster] = useState({
    status: "",
    message: "",
  });
  // const [showForm, setShowForm] = useState(false);
  const [showpayment, setShowPayment] = useState(false);

  // getting Data
  const { data: singleDepartureData } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/flight/${DepartureId}`,
    "GET"
  );

  const { data: singleArrivalData } = useFetch(
    `https://academics.newtonschool.co/api/v1/bookingportals/flight/${arrivalId}`,
    "GET"
  );

  useEffect(() => {
    setsingleApiDepartureData(singleDepartureData);
    setsingleApiArrivalData(singleArrivalData);
  }, [singleDepartureData, singleArrivalData]);

  // console.log(singleDepartureData, "singleDepartureData");

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
  }, [getLoginAndsingUpData]);

  // handleChangeName
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  //EmailChange
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //PasswordChange
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const derivedValue = useMemo(() => {
    return toaster;
  }, [name, email, password]);
  // for PaymentBtn
  const handleConfirmation = () => {
    if (name == "" || email == "" || password == "") {
      setToaster({
        status: "warning",
        message: "Please Fill The Required Fields",
      });
    } else {
      setShowPayment(true);
    }
  };
  // for PaymentData
  const handlePayment = async (e) => {
    setloader(false);
    const amount =
      (singleDepartureData?.ticketPrice + singleArrivalData?.ticketPrice) * 100;

    const currency = "INR";

    const receiptId = arrivalId;

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

    // if (response) {
    //   <Skeleton variant="rectangular" width={210} height={118} />;
    // }

    const order = await response.json();
    if (order !== null || order !== "") {
      setloader(true);
    }
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

          navigate("/bookingconfirmation");
        }
      },
      prefill: {
        name: name, //your customer's name
        email: "Ngsolution@gmail.com",
        contact: MobileNo, //Provide the customer's phone number for better conversion rates
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

  return (
    <>
      <div className="main-leftside-div">
        {/* heading-itinerary */}
        <div className="review-leftside">
          <div className="heading-itinerary">
            <div className="no-heading">1</div>
            <h2>Review Your Itinerary</h2>
          </div>

          <div className="flight-itinerary-data">
            {/* title */}
            <div className="flight-itinerary-title">
              <div className="flight-location">
                <span className="flight-location-span">
                  {searchData?.DepartureCity}
                </span>
                <ArrowItinerary />
                <span className="flight-location-span">
                  {searchData?.ArrivalCity}
                </span>
              </div>
              <div>
                {searchData?.dayDeparture} ,{searchData?.FormattedStartDate}{" "}
                {searchData?.StartDateMonth} {searchData?.StartDateYear}
              </div>
            </div>
            {/* flight details 1*/}
            <div className="flight-review-details">
              <div className="flight-name-details">
                <div>
                  <Flight6E />
                  <div>
                    <p className="name-details">IndiGo</p>
                  </div>
                  <div>
                    <p className="name-details">6E-578</p>
                    <p className="name-details">Econmy</p>
                  </div>
                </div>
                <div>
                  <Dottedline />
                </div>
              </div>
              <div className="flight-time-port-details">
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {singleDepartureData?.departureTime}
                  </span>
                  <span style={{ fontSize: "20px" }}>
                    {singleDepartureData?.source}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    International Airport,{searchData?.DepartureCity}, Terminal
                    1
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "5px",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Clock />
                  <span>{singleDepartureData?.duration} Hr</span>
                </div>
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {singleDepartureData?.arrivalTime}
                  </span>
                  <span style={{ fontSize: "20px" }}>
                    {singleDepartureData?.destination}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    {searchData?.ArrivalCity}, Terminal
                  </span>
                </div>
              </div>
            </div>

            {/* header layover */}
            <div className="layover-details">
              <span className="layover-location">No Layover</span>
              <span className="layover-time">Short layover 0h 00m</span>
            </div>

            {/* flight details 2 */}
            {/* <div className="flight-review-details">
              <div className="flight-name-details">
                <div>
                  <Flight6E />
                  <div>
                    <p className="name-details">IndiGo</p>
                  </div>
                  <div>
                    <p className="name-details">6E-578</p>
                    <p className="name-details">Econmy</p>
                  </div>
                </div>
                <div>
                  <Dottedline />
                </div>
              </div>
              <div className="flight-time-port-details">
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    21:05
                  </span>
                  <span style={{ fontSize: "20px" }}>BLR</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Kempegowda International Airport, Bangalore, Terminal 1
                  </span>
                </div>
                <div style={{ display: "flex", marginLeft: "5px" }}>
                  <Clock />
                  <span>1h 10m</span>
                </div>
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    22:30
                  </span>
                  <span style={{ fontSize: "20px" }}>IXE</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Bajpe, Mangalore, Terminal
                  </span>
                </div>
              </div>
            </div> */}
            {/* flight details 3*/}

            <div className="flight-review-details">
              <div className="flight-name-details">
                <div>
                  <Flight6E />
                  <div>
                    <p className="name-details">IndiGo</p>
                  </div>
                  <div>
                    <p className="name-details">6E-578</p>
                    <p className="name-details">Econmy</p>
                  </div>
                </div>
                <div>
                  <Dottedline />
                </div>
              </div>
              <div className="flight-time-port-details">
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {singleArrivalData?.departureTime}
                  </span>
                  <span style={{ fontSize: "20px" }}>
                    {singleArrivalData?.source}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    International Airport,{searchData?.ArrivalCity}, Terminal 1
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "5px",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Clock />
                  <span>{singleArrivalData?.duration} Hr</span>
                </div>
                <div className="flight-port-details">
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    {singleArrivalData?.arrivalTime}
                  </span>
                  <span style={{ fontSize: "20px" }}>
                    {singleArrivalData?.destination}
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                    {searchData?.DepartureCity}, Terminal
                  </span>
                </div>
              </div>
            </div>

            {/* Axis bank card */}
            <div className="axisbank-card">
              <div className="axisbank-heading">
                <p>Exclusive on Axis Bank credit cards</p>
                <AxisLogo />
              </div>
              <hr></hr>
              <div className="axisbank-offer">
                <div style={{ display: "flex", gap: "70px" }}>
                  <div className="axisbank-offer-col-one">
                    <div className="travelling-guidedata-col">
                      <span>
                        <Rupees />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        No convenience Fee
                      </span>
                    </div>
                    <div className="travelling-guidedata-col">
                      <span>
                        <Seat />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        Free seat up to ₹700
                      </span>
                    </div>
                  </div>
                  <div className="axisbank-offer-col">
                    <div className="travelling-guidedata-col">
                      <span>
                        <Cancel />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        Free cancellation or date change at ₹1
                      </span>
                    </div>
                    <div className="travelling-guidedata-col">
                      <span>
                        <Dining />
                      </span>
                      <span style={{ fontSize: "12px" }}>
                        Free meal up to ₹350
                      </span>
                    </div>
                  </div>
                </div>
                <button className="axisbank-btn">Check your eligibility</button>
              </div>
            </div>

            {/* Accordion */}
            <div>
              <div className="aboveaccordion-title">
                <div className="flight-depature-details">
                  <div>
                    <Departureplan />
                  </div>
                  <div className="port-name">
                    <div>BLR</div>
                    <div>→</div>
                    <div>BOM</div>
                  </div>
                  <div>: Standard fare</div>
                </div>
                <div className="flight-arried-details">
                  <div>
                    <Arrivedplan />
                  </div>
                  <div className="port-name">
                    <div>BOM</div>
                    <div>→</div>
                    <div>BLR</div>
                  </div>
                  <div>: Standard fare</div>
                </div>
              </div>
              <div className="travelling-guidedata-card">
                <div className="travelling-guidedata">
                  <div>
                    <div className="travelling-guidedata-col">
                      <Cancelticket />
                      <div className="travelling-guidedata-text">
                        Cancellation fee starts from ₹3,900
                      </div>
                    </div>
                    <div className="travelling-guidedata-col">
                      <DateChange />
                      <div className="travelling-guidedata-text">
                        Date change allowed from ₹3,650
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="travelling-guidedata-col">
                      <CabinLogo />
                      <div className="travelling-guidedata-text">
                        Cabin/person: 7kg
                      </div>
                    </div>
                    <div className="travelling-guidedata-col">
                      <PaidMeal />
                      <div className="travelling-guidedata-text">Paid meal</div>
                    </div>
                  </div>
                  <div>
                    <div className="travelling-guidedata-col">
                      <Laguage />
                      <div className="travelling-guidedata-text">
                        Check-in/person: 15kg(1 Piece)
                      </div>
                    </div>
                    <div className="travelling-guidedata-col">
                      <PaidSeat />
                      <div className="travelling-guidedata-text">Paid seat</div>
                    </div>
                  </div>
                </div>
              </div>
              <FlightReviewAccordion />
            </div>

            {/* HR */}

            <hr
              style={{
                width: "791px",
                marginLeft: "7.5rem",
                height: "0.5px",
              }}
            ></hr>

            {/* Medical */}

            <div className="refund">
              <div className="refund-inner">
                <div className="refund-inner-first">
                  <p style={{ fontSize: "16px", fontWeight: "500" }}>
                    This booking is covered by
                    <img src={mediCancelDTSvg} />
                  </p>
                  <p>
                    <span className="free">Free</span>
                    <span className="price">₹199</span>
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    display: "flex",
                  }}
                >
                  <p>
                    Get a full refund on flight and hotel bookings for medical
                    reasons, only on Cleartrip.
                  </p>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#0f6bff",
                      cursor: "pointer",
                    }}
                  >
                    Learn More
                  </span>
                </p>
              </div>
              <div className="claimed-text">
                <p>
                  <span className="claimed-text-span">
                    2.5k travellers availed in last one month
                  </span>
                </p>
              </div>
            </div>

            {/* btn */}
            {/* <div className="continue">
              <button className="continue-btn" onClick={handleContinueClick}>
                Continue
              </button>
            </div> */}
          </div>
        </div>

        {/* 2 */}

        {/* {showForm && ( */}
        <div className="review-leftside">
          <div className="heading-itinerary">
            <div className="no-heading">2</div>
            <div>
              <h2>Add Contact details</h2>
              <p style={{ fontSize: "12px" }}>
                E-tickets will be sent to this email address
              </p>
            </div>
          </div>
          <div className="additional-info-form">
            <label htmlFor="phoneNumber">Name:</label>
            <div className="mobile-card">
              <input
                type="text"
                id="phoneNumber"
                className="mobile-number"
                placeholder="Full Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="email-card">
              <label htmlFor="name">Email address</label>
              <input
                type="email"
                id="email"
                name="name"
                className="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {getLoginAndsingUpData?.data.email ||
            getLoginAndsingUpData?.data?.user?.email ? (
              ""
            ) : (
              <div className="password-card">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  id="password"
                  name="name"
                  className="email"
                  placeholder="Password Here"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            )}
          </div>
          {showpayment ? (
            <div className="continue-payment">
              <Link to="/flightsearch">
                <button className="continue-btn">Cancel</button>
              </Link>
              {/* <Link to="/bookingconfirmation"> */}
              <button className="continue-payment-btn" onClick={handlePayment}>
                Continue to Payment
              </button>
              {/* </Link> */}
            </div>
          ) : (
            <>
              <div className="continue-second">
                <button
                  id="contin-btn"
                  className="continue-btn"
                  onClick={handleConfirmation}
                >
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {toaster.status == "fail" || toaster.status == "warning" ? (
        <Toaster status={toaster.status} message={toaster.message} />
      ) : (
        ""
      )}
    </>
  );
}

export default LeftFlightReviewItinerary;
