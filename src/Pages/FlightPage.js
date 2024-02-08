import NavBar from "../components/NavBar";
import LeftSideSection from "../components/section/leftSideNavBar";
import RightSideSection from "../components/section/RightSideSection";
import MainSection from "../components/section/MainSection";
import Offer1 from "../Assests/Images/Offer1.webp";
import Offer2 from "../Assests/Images/Offer2.webp";
import Offer3 from "../Assests/Images/Offer3.webp";
import DataImage from "../Assests/Images/DataImage.webp";
import goa from "../Assests/Images/goa.jpg";
import delhi from "../Assests/Images/delhi.jpg";
import banglore from "../Assests/Images/bangalore.webp";
import varanasi from "../Assests/Images/varanasi.jpg";
import abuDhabi from "../Assests/Images/abuDhabi.jpg";
import "./../styles/FlightPage.css";
import Footer from "../components/Footer";
import LoginPage from "../Pages/LoginPage";
import { useState } from "react";
function FlightPage() {
  const [open, setOpen] = useState(true);
  const checkLogin = JSON.parse(localStorage.getItem("signup&loginData"));
  // console.log("checkLogin", checkLogin);
  return (
    <>
      {checkLogin?.status ? "" : <LoginPage open={open} openChange={setOpen} />}
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftSideSection />
        <MainSection />
        <RightSideSection />
      </div>
      <div className="flightpage-offerimg">
        <img src={Offer1} />
        <img src={Offer2} />
        <img src={Offer3} />
      </div>
      <div className="flightpage-adfor-download">
        <img src={DataImage} />
      </div>
      <h2 className="popular-destination">Popular destination</h2>
      <div className="flightpage-popular-destination">
        <a href="https://www.cleartrip.com/hotels/results?city=Goa&state=Goa&country=IN&dest_code=37264&adults1=2&children1=0&num_rooms=1&adults=2&childs=0&chk_in=09/02/2024&chk_out=10/02/2024">
          <img src={goa} />
        </a>
        <a href="https://www.cleartrip.com/hotels/results?city=New+Delhi&state=Delhi&country=IN&area=&poi=&hotelId=&hotelName=&SearchTag=&dest_code=35485&chk_in=09/02/2024&chk_out=10/02/2024&adults1=2&children1=0&num_rooms=1">
          <img src={delhi} />
        </a>

        <a href="https://www.cleartrip.com/hotels/results?city=Bangalore&state=Karnataka&country=IN&area=&poi=&hotelId=&hotelName=&SearchTag=&dest_code=32550&chk_in=09/02/2024&chk_out=10/02/2024&adults1=2&children1=0&num_rooms=1">
          <img src={banglore} />
        </a>
        <a href="https://www.cleartrip.com/hotels/results?city=varanasi&state=Uttar+Pradesh&country=IN&area=&poi=&hotelId=&hotelName=&SearchTag=&dest_code=32550&chk_in=09/02/2024&chk_out=10/02/2024&adults1=2&children1=0&num_rooms=1">
          <img src={varanasi} />
        </a>
        <a href="https://www.cleartrip.com/hotels/results?city=varanasi&state=Uttar+Pradesh&country=IN&area=&poi=&hotelId=&hotelName=&SearchTag=&dest_code=32550&chk_in=09/02/2024&chk_out=10/02/2024&adults1=2&children1=0&num_rooms=1">
          <img src={abuDhabi} />
        </a>
      </div>
      <div className="flightpage-homepage-details">
        <div>
          <h3 className="details-title">Why book on Cleartrip?</h3>
          <p className="details-para">
            On Cleartrip.com, you can turn all your plans into trips. From
            flight ticket bookings, and booking hotels online to airport, rental
            and outstation cab booking, with Cleartrip, no travel dream is far
            enough. Fly to your favourite destinations with the best flight
            offers across various airline options like IndiGo, Air India,
            SpiceJet, Go First, AirAsia, Vistara, etc. Make the most of your
            holiday plans by relaxing, rejuvenating and enjoying amazing leisure
            experiences at our vast range of hotels. From affordable and
            budget-friendly hotels to the best 5-star properties, book your stay
            on Cleartrip with unmissable offers. Be it for business travel or
            pleasure, you can now get the best deals on flights and hotels. So,
            where to?
          </p>
        </div>
        <div>
          <h5 className="details-title-h5">
            Booking flights & hotels online with Cleartrip
          </h5>
          <p className="details-para-2">
            From queries to itineraries, for all things travel, there is
            Cleartrip. Checking your flight updates and PNR status is easy with
            our simple, intuitive app and booking site. Booking online hotels
            gets seamless with a range of choices and the greatest hotel deals.
          </p>
          <p className="details-para-2">
            Here’s why booking flights and hotels with Cleartrip is your Clear
            Advantage:
          </p>
          <p className="details-para-2">
            <b>CT Flexmax:</b> Reschedule or cancel your domestic flight booking
            for free up to 24 hours before departure.
          </p>
          <p className="details-para-2">
            <b>CT Flex:</b> Amend your domestic flight booking against your date
            of travel and choice of airline. Say hello to flexible flight
            bookings!
          </p>
          <p className="details-para-2">
            <b>Easy hotel cancellation:</b> Cancel your hotel stay easily. Zero
            fees on hotel cancellations up to 24 hours before check-in on 20k+
            hotels.
          </p>
          <p className="details-para-2">
            <b>Instant refund initiation:</b> All refunds on flight and hotel
            cancellations are initiated instantly.
          </p>
          <p className="details-para-2">
            <b>Medi-cancel refund:</b> Cancel your domestic flight booking
            easily on valid medical grounds and get up to ₹3500 against airline
            cancellation charges per passenger per segment.
          </p>
          <p className="details-para-2">
            <b>International travel insurance:</b> Cancel your domestic flight
            booking easily on valid medical grounds and get up to ₹3500 against
            airline cancellation charges per passenger per segment.
          </p>
          <p className="details-para-2">
            <b>
              Special Fares For Armed Personnel, Senior Citizens and Student
              travellers:
            </b>
            Cleartrip introduces discounted fares for armed personnel, senior
            citizens and students on domestic flights. Additional discounts with
            coupon codes.
          </p>
          <br></br>
          <h3 className="details-title">
            What are the best offers available for travel bookings on Cleartrip?
          </h3>
          <p className="details-para">
            Get the best offers on hotels and flights using bank cards such as
            HDFC, ICICI, Bank of Baroda, Federal Bank, etc. You can also grab
            amazing discounts during our exciting sale events. Apart from this,
            find unmissable deals and offers on hotel stays and flight bookings
            throughout the year.
          </p>
          <br></br>
          <h3 className="details-title">
            Are there any offers for new users on Cleartrip?
          </h3>
          <p className="details-para">
            Firsts are always special. So new users, you get FLAT 12% off on
            your airfare and up to 18% off on hotels using code
            <a href="/offers/india/dom-ctfirst">CTFIRST</a>. Cleartrip is here
            to make your <a href="/flights">online flight booking</a> seamless
            and simple.
          </p>
          <br></br>
          <h3 className="details-title">
            How can I find the best deals and discounts on flights and hotels
            online on Cleartrip?
          </h3>
          <p className="details-para">
            With Cleartrip, there are multiple deals available for your online
            flight and <a href="/hotels">hotel booking.</a> Whenever you select
            a hotel or a flight ticket, you can find the best available deals
            mentioned on the booking page. You can then use any of the available
            deals and coupon codes to avail your offer. Explore all
            <a href="/offers/india/domestic-flights">
              flight booking discount offers
            </a>
            & <a href="/offers/india/hotels">hotels booking discount offers</a>.
          </p>
          <br></br>
          <h3 className="details-title">
            Which is the best time to book flight tickets online?
          </h3>
          <p className="details-para">
            There’s no specific right time to book your travel. With Cleartrip,
            there are deals and offers available on online flight tickets all
            year round, to make your booking easy and affordable. However, there
            are many exciting sale events Cleartrip has that offer the best
            deals on travel such as Travel Maxx sale, #NoEndWeekend sale, Big
            Billion Days, Big Travel Sale, etc. Stay tuned and keep an eye on
            when the travel sales are and book hotels and flights online for the
            best price!
          </p>
        </div>
        <br></br>
      </div>
      <Footer />
    </>
  );
}

export default FlightPage;
