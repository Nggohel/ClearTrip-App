import FacebookLogo from "../Assests/Images/FacebookLogo";
import FooterLogo from "../Assests/Images/FooterLogo";
import LinkedinLogo from "../Assests/Images/LinkdinLogo";
import TwitterLogo from "../Assests/Images/TwitterLogo";
import "./../styles/Footer.css";
import InstagramLogo from "../Assests/Images/InstagramLogo";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-data">
          <a>
            <FooterLogo />
          </a>
          <div className="cleartrip-connect-details">
            <div className="cleartrip-details">
              <p>About Us</p>
              <p>Careers</p>
              <p>FAQs</p>
              <p>Support</p>
              <p>Collection</p>
              <p>Cleartrip for Business </p>
              <p>Gift Cards</p>
            </div>
            <div className="cleartrip-socialconnect-data">
              <p>
                © 2023 Cleartrip Pvt. Ltd. · Privacy · Security · Terms of Use ·
                Grievance Redressal
              </p>
              <div>
                <a href="https://facebook.com/cleartrip">{<FacebookLogo />}</a>
                <a href="https://instagram.com/cleartrip">
                  {<InstagramLogo />}
                </a>
                <a href="https://twitter.com/cleartrip">{<TwitterLogo />}</a>
                <a href="https://www.linkedin.com/company/cleartrip/?original_referer=">
                  {<LinkedinLogo />}
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default Footer;
