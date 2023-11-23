import FightLogo from "../../Assests/Images/Fightlogo";
import FillBusLogo from "../../Assests/Images/FillBusLogo";
import Hotel from "../../Assests/Images/FillHotelLogo";
import MytripLogo from "../../Assests/Images/MytripLogo";
import SupportLogo from "../../Assests/Images/SupportLogo";
import "./../../styles/leftSideSection.css";
function leftSideNavBar() {
  return (
    <>
      <aside>
        <div className="left-aside">
          <div className="left-aside-bar">
            <FightLogo />
            <span>Flights</span>
          </div>
          <div className="left-aside-bar">
            <Hotel />
            <span>Hotel</span>
          </div>
          <div className="left-aside-bar">
            <FillBusLogo />
            <span>Bus</span>
          </div>
          <div className="left-aside-bar">
            <MytripLogo />
            <span>Mytrip</span>
          </div>
          <div className="left-aside-bar">
            <SupportLogo />
            <span>Support</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default leftSideNavBar;
