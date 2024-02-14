import { useNavigate } from "react-router-dom";
import "../../styles/FlightReviewItinerary.css";
function BookingSucessfullPage() {
  const navigate = useNavigate();

  let Data = JSON.parse(localStorage.getItem("SearchData"));

  let hoteldata = JSON.parse(localStorage.getItem("SearchHotelData"));
  let hotelName = JSON.parse(localStorage.getItem("hotelName"));

  console.log("hoteldata", hotelName);

  const PaymentRes = JSON.parse(localStorage.getItem("PaymentStatus"));
  // clear the LocalStorage and render to the HomePage
  const handleGobackHome = () => {
    localStorage.removeItem("PaymentStatus");
    localStorage.removeItem("ArrivalId");
    localStorage.removeItem("DepartureId");
    localStorage.removeItem("SearchData");
    localStorage.removeItem("SearchHotelData");
    navigate("/hotel");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "lightgreen",
        }}
      >
        <h2 style={{ padding: "20px" }}>
          <p>
            Your Payment Of Rs : {PaymentRes.amount / 100} Has Been
            Successfull...
          </p>
          {/* <p>
            Your Booking At {hotelName?.name},{hotelName?.location} is
            Confirm....
          </p> */}
        </h2>
        <h3 style={{ textAlign: "center" }}>
          Here your Order ID : {PaymentRes?.orderId}
        </h3>
        <h3 style={{ textAlign: "center" }}>
          Here your Payment ID : {PaymentRes?.paymentId}
        </h3>
        <br></br>
      </div>
      <button
        onClick={handleGobackHome}
        className="continue-payment-btn"
        style={{ marginTop: "10px" }}
      >
        Go Back To Home
      </button>
    </div>
  );
}
export default BookingSucessfullPage;
