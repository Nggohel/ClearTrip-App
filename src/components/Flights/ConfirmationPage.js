function ConfirmationPage() {
  let Data = JSON.parse(localStorage.getItem("SearchData"));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>
        Your Booking From : {Data?.DepartureCity} To :{Data?.ArrivalCity} is
        Confirm..
      </h1>
    </div>
  );
}
export default ConfirmationPage;
