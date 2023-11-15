import NavBar from "./NavBar";
import LeftSideSection from "./leftSideSection";
import RightSideSection from "./RightSideSection";
import MainSection from "./MainSection";
import Offer1 from "./../Assests/Images/Offer1.webp";
import Offer2 from "./../Assests/Images/Offer2.webp";
import Offer3 from "./../Assests/Images/Offer3.webp";
import DataImage from "./../Assests/Images/DataImage.webp";
import goa from "./../Assests/Images/goa.jpg";
import delhi from "./../Assests/Images/delhi.jpg";
import banglore from "./../Assests/Images/bangalore.webp";
import varanasi from "./../Assests/Images/varanasi.jpg";
import abuDhabi from "./../Assests/Images/abuDhabi.jpg";
import "./../styles/LaptopApp.css";
import Footer from "./Footer";
function LaptopApp() {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftSideSection />
        <MainSection />
        <RightSideSection />
      </div>
      <div className="laptop-offerimg">
        <img src={Offer1} />
        <img src={Offer2} />
        <img src={Offer3} />
      </div>
      <div className="laptop-adfor-download">
        <img src={DataImage} />
      </div>
      <h2 style={{ fontWeight: "610", marginLeft: "230px", marginTop: "45px" }}>
        Popular destination
      </h2>
      <div className="laptop-popular-destination">
        <img src={goa} />
        <img src={delhi} />
        <img src={banglore} />
        <img src={varanasi} />
        <img src={abuDhabi} />
      </div>
      <div className="laptop-homepage-details">
        <div>
          <h3>Why book on Cleartrip?</h3>
          <p>
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
          <span>
            <b>Booking flights & hotels online with Cleartrip</b>
          </span>
          <br></br>
          <span>
            From queries to itineraries, for all things travel, there is
            Cleartrip. Checking your flight updates and PNR status is easy with
            our simple, intuitive app and booking site. Booking online hotels
            gets seamless with a range of choices and the greatest hotel deals.
          </span>
          <p>
            Here’s why booking flights and hotels with Cleartrip is your Clear
            Advantage:
          </p>
          <p>
            <b>CT Flexmax:</b> Reschedule or cancel your domestic flight booking
            for free up to 24 hours before departure.
          </p>
          <p>
            <b>CT Flex:</b> Amend your domestic flight booking against your date
            of travel and choice of airline. Say hello to flexible flight
            bookings!
          </p>
          <p>
            <b>Easy hotel cancellation:</b> Cancel your hotel stay easily. Zero
            fees on hotel cancellations up to 24 hours before check-in on 20k+
            hotels.
          </p>
          <p>
            <b>Instant refund initiation:</b> All refunds on flight and hotel
            cancellations are initiated instantly.
          </p>
          <p>
            <b>Medi-cancel refund:</b> Cancel your domestic flight booking
            easily on valid medical grounds and get up to ₹3500 against airline
            cancellation charges per passenger per segment.
          </p>
          <p>
            <b>International travel insurance:</b> Cancel your domestic flight
            booking easily on valid medical grounds and get up to ₹3500 against
            airline cancellation charges per passenger per segment.
          </p>
          <p>
            <b>
              Special Fares For Armed Personnel, Senior Citizens and Student
              travellers:
            </b>
            Cleartrip introduces discounted fares for armed personnel, senior
            citizens and students on domestic flights. Additional discounts with
            coupon codes.
          </p>
          <h3>
            What are the best offers available for travel bookings on Cleartrip?
          </h3>
          <p>
            Get the best offers on hotels and flights using bank cards such as
            HDFC, ICICI, Bank of Baroda, Federal Bank, etc. You can also grab
            amazing discounts during our exciting sale events. Apart from this,
            find unmissable deals and offers on hotel stays and flight bookings
            throughout the year.
          </p>
          <h3>Are there any offers for new users on Cleartrip?</h3>
          <p>
            Firsts are always special. So new users, you get FLAT 12% off on
            your airfare and up to 18% off on hotels using code
            <a href="/offers/india/dom-ctfirst">CTFIRST</a>. Cleartrip is here
            to make your <a href="/flights">online flight booking</a> seamless
            and simple.
          </p>
          <h3>
            How can I find the best deals and discounts on flights and hotels
            online on Cleartrip?
          </h3>
          <p>
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
          <h3>Which is the best time to book flight tickets online?</h3>
          <p>
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
      </div>
      <Footer />
    </>
  );
}

export default LaptopApp;
