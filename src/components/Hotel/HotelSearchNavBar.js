import { useEffect, useState } from "react";
import "../../styles/HotelSearchPage.css";
import applogo from "../../Assests/Images/AppLogo.png";
import AvtaarLogo from "../../Assests/Images/AvtaarLogo";
import Location from "../../Assests/Location";
import FlightCalendar from "../../components/FlightCalendar";
import MyAccount from "../Flights/MyAccount";
import LoginPage from "../../Pages/LoginPage";
import { useFlightContext } from "../../Hooks/useFlightContext";
import { useLoginContext } from "../../Hooks/LoginContext";

function HotelSearchNavBar({ searchData, btnCss, Apidata, updatedHotelData }) {
  const { loginState, localStorageLoginData } = useLoginContext();
  const StoreCity = JSON.parse(localStorage.getItem("SearchHotelData"));
  // console.log(StoreCity);
  const [searchState, setSearchState] = useState(true);
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [city, setCity] = useState(StoreCity?.source);
  const [btnState, setBtnState] = useState(false);
  const [loginPopup, setLoginPopUp] = useState(false);
  const [logoutPopUp, setLogoutPopUp] = useState(false);

  useEffect(() => {
    setSearchState(searchData);
  }, [searchData]);
  // login and SingUp Page
  const handleLoginAndSignUp = () => {
    setLoginPopUp(true);
  };

  // Showing MyAccount
  const handleMyAccount = () => {
    setLogoutPopUp(true);
  };

  // if Change in City
  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setBtnState(true);
    setCity(newCity);
    localStorage.setItem(
      "SearchHotelData",
      JSON.stringify({
        source: newCity,
        dayCome: dayStart,
      })
    );
  };
  // for Updating
  const handleUpdateBtn = () => {
    updatedHotelData(true);
  };

  return (
    <>
      <div className="navbar">
        <img src={applogo} alt="App Logo" width="100" height="25" />
        {searchState ? (
          <div className="hotel-search-card-data">
            <div className="search-data-one">
              <Location />
              <p className="search-data-para">
                <input
                  type="text"
                  className="choose-person-input"
                  placeholder="City"
                  value={city}
                  list="Location"
                  onChange={handleCityChange}
                />
                <datalist id="Location" style={{}}>
                  <option className="datalist-option" value="Goa" />
                  <option value="Bangalore" />
                  <option value="Kolkata" />
                </datalist>
              </p>
            </div>
            <div className="search-data-second">
              <FlightCalendar
                StartDay={(dayOfstart) => {
                  setDayStart(dayOfstart);
                }}
                EndDay={(dayOfEnd) => {
                  setDayEnd(dayOfEnd);
                }}
              />
            </div>
            <div className="search-data-third">
              <input
                type="text"
                className="choose-person-input"
                placeholder="1 Room, 2 Adults"
                list="room-person-list"
              />
              <datalist id="room-person-list" style={{}}>
                <option className="datalist-option" value="1 Room, 2 Adults" />
                <option value="1 Room, 1 Adults" />
                <option value="2 Room, 4 Adults" />
              </datalist>
            </div>
            {btnState ? (
              <button className="update-btn" onClick={handleUpdateBtn}>
                Update
              </button>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        {loginState && localStorageLoginData?.status == "success" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <div>
              <AvtaarLogo />
            </div>
            <div className="nav-para" onClick={handleMyAccount}>
              My Account
            </div>
          </div>
        ) : (
          <button
            className={`custom-button  ${btnCss}`}
            onClick={handleLoginAndSignUp}
          >
            Login in / sign up
          </button>
        )}
        <MyAccount open={logoutPopUp} openChange={setLogoutPopUp} />
        <LoginPage open={loginPopup} openChange={setLoginPopUp} />
      </div>
    </>
  );
}
export default HotelSearchNavBar;
