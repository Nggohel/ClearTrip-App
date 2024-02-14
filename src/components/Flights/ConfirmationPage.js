import { useNavigate } from "react-router-dom";
import "../../styles/FlightReviewItinerary.css";
function ConfirmationPage() {
  const navigate = useNavigate();
  let Data = JSON.parse(localStorage.getItem("SearchData"));
  const RefNo = localStorage.getItem("ArrivalId");
  const PaymentRes = JSON.parse(localStorage.getItem("PaymentStatus"));

  // clear LocalStorage on click Btn

  const handleGobackHome = () => {
    localStorage.removeItem("PaymentStatus");
    localStorage.removeItem("ArrivalId");
    localStorage.removeItem("DepartureId");
    localStorage.removeItem("SearchData");
    localStorage.removeItem("SearchHotelData");
    navigate("/");
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
          <p>
            Your Booking From : {Data?.DepartureCity} To : {Data?.ArrivalCity}{" "}
            is Confirm....
          </p>
        </h2>
        <h3 style={{ textAlign: "center" }}>
          Here your Order ID : {PaymentRes.orderId}
        </h3>
        <h3 style={{ textAlign: "center" }}>
          Here your Payment ID : {PaymentRes.paymentId}
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
export default ConfirmationPage;
