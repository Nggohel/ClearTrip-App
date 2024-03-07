import { NavLink } from "react-router-dom";
import FightLogo from "../../Assests/Images/Fightlogo";
import FillBusLogo from "../../Assests/Images/FillBusLogo";
import Hotel from "../../Assests/Images/FillHotelLogo";
import MytripLogo from "../../Assests/Images/MytripLogo";
import SupportLogo from "../../Assests/Images/SupportLogo";
import "./../../styles/leftSideSection.css";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
function leftSideNavBar() {
  return (
    <>
      <aside>
        <div className="left-aside">
          <ul>
            <li className="nav-list">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
              >
                {({ isActive }) => (
                  <span className="left-navbar">
                    {isActive ? (
                      <FightLogo />
                    ) : (
                      <PiAirplaneTiltLight className="tallIcon" />
                    )}{" "}
                    Flight
                  </span>
                )}
              </NavLink>
            </li>
            {/* <li className="nav-list">
              <NavLink
                to="/https://www.cleartrip.com/bus"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
              >
                {({ isActive }) => (
                  <span className="left-navbar">
                    {isActive ? <Hotel /> : <HiOutlineBuildingOffice2 />} Hotel
                  </span>
                )}
              </NavLink>
            </li> */}
            <li className="nav-list">
              <NavLink
                to="/hotel"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : "pending"
                }
              >
                {({ isActive }) => (
                  <span className="left-navbar">
                    {isActive ? <Hotel /> : <HiOutlineBuildingOffice2 />} Hotel
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default leftSideNavBar;
