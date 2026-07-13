// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// import {
//   FaInstagram,
//   FaYoutube,
//   FaLinkedinIn,
//   FaFacebookF,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// import TermsConditions from "../../home/Terms&Conditions";

// import "./Footer.css";

// import logo from "../../../assets/images/logo.png";
// import googlePlay from "../../../assets/images/appstore.png";
// import appStore from "../../../assets/images/playstore.png";

// const Footer = () => {
//   const [showTerms, setShowTerms] = useState(false);

//   const location = useLocation();
//   const isBluePage =
//     location.pathname === "/" ||
//     location.pathname === "/services/customer" ||
//     location.pathname === "/services/vendor" ||
//     location.pathname === "/services/delivery";

//   return (
//     <div className={isBluePage ? "footer-wrapper home-footer" : "footer-wrapper"}>      <footer id="contact" className="footer">
//       <div className="footer-container">
//         <div className="footer-top">

//           {/* Left Section */}

//           <div className="footer-left">

//             <img
//               src={logo}
//               alt="ZestBot"
//               className="footer-logo"
//             />

//             <div className="contact-details">

//               <h3>Contact</h3>

//               <p className="address-title">
//                 Address:
//               </p>

//               <p className="company">
//                 Dhatvi Business Solutions Private Limited
//               </p>

//               <p>
//                 1st Floor, Street No.7,

//                 PB House, HUDA Techno Enclave,

//                 Madhapur, Hyderabad
//               </p>

//               <a href="mailto:info@zestbot.in">
//                 info@zestbot.in
//               </a>

//               <a href="tel:04045374487">
//                 Tel: 040-453-74487
//               </a>

//             </div>

//             <div className="social-icons">

//               <a
//                 href="https://www.instagram.com/zestbotindia/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram />
//               </a>

//               <a
//                 href="https://x.com/zestbotindia"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaXTwitter />
//               </a>

//               <a
//                 href="https://www.youtube.com/@ZestBotIndia"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaYoutube />
//               </a>

//               <a
//                 href="https://www.linkedin.com/company/110968172/admin/dashboard/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>

//               <a
//                 href="https://www.facebook.com/profile.php?id=61587319992614"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="facebook"
//               >
//                 <FaFacebookF />
//               </a>

//             </div>

//           </div>

//           {/* Links */}

//           <div className="footer-column">

//             <h3>Links</h3>

//             <NavLink to="/services">
//               Services
//             </NavLink>

//             <HashLink smooth to="/#why-zestbot">
//               Why ZestBot
//             </HashLink>

//             <HashLink smooth to="/#faqs">
//               FAQs
//             </HashLink>

//             <NavLink to="/blog">
//               Blog
//             </NavLink>

//           </div>
//           {/* Other Pages */}

//           <div className="footer-column">

//             <h3>Other Pages</h3>

//             <button
//               className="footer-link-btn"
//               onClick={() => setShowTerms(true)}
//             >
//               Terms
//             </button>

//             <NavLink to="/disclosures">
//               Disclosures
//             </NavLink>

//           </div>

//           {/* Download */}

//           <div className="footer-column">

//             <h3>Download App</h3>

//             <a
//               href="https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={googlePlay}
//                 alt="Google Play"
//                 className="store-btn"
//               />
//             </a>

//             <img
//               src={appStore}
//               alt="App Store"
//               className="store-btn"
//             />

//           </div>

//         </div>

//         {/* Footer Bottom */}

//         <div className="footer-bottom">

//           <p>
//             Dhatvi Business Solutions Private Limited
//           </p>

//         </div>

//         {/* Terms & Conditions Modal */}

//         {showTerms && (
//           <TermsConditions
//             isModal={true}
//             isOpen={showTerms}
//             onClose={() => setShowTerms(false)}
//           />
//         )}

//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Footer;



import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import TermsConditions from "../../home/Terms&Conditions";

import "./Footer.css";

import logo from "../../../assets/images/logo.png";
import googlePlay from "../../../assets/images/appstore.png";
import appStore from "../../../assets/images/playstore.png";

// Same delayed-scroll fix as Navbar.jsx — gives the target route time to
// finish rendering before HashLink scrolls, so cross-route section links
// (e.g. clicking "Why ZestBot" from /services) land correctly on the first click.
const scrollWithOffset = (el) => {
  setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
};

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  const location = useLocation();
  const isBluePage =
    location.pathname === "/" ||
    location.pathname === "/services/customer" ||
    location.pathname === "/services/vendor" ||
    location.pathname === "/services/delivery";

  return (
    <div className={isBluePage ? "footer-wrapper home-footer" : "footer-wrapper"}>      <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-top">

          {/* Left Section */}

          <div className="footer-left">

            <img
              src={logo}
              alt="ZestBot"
              className="footer-logo"
            />

            <div className="contact-details">

              <h3>Contact</h3>

              <p className="address-title">
                <FaMapMarkerAlt className="contact-icon" />
                Address:
              </p>

              <p className="company">
                Dhatvi Business Solutions Private Limited
              </p>

              <p>
                1st Floor, Street No.7,

                PB House, HUDA Techno Enclave,

                Madhapur, Hyderabad
              </p>

              <a href="mailto:info@zestbot.in">
                <FaEnvelope className="contact-icon" />
                info@zestbot.in
              </a>

              <a href="tel:04045374487">
                <FaPhoneAlt className="contact-icon" />
                Tel: 040-453-74487
              </a>

            </div>

            <div className="social-icons">

              <a
                href="https://www.instagram.com/zestbotindia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/zestbotindia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.youtube.com/@ZestBotIndia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.linkedin.com/company/110968172/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61587319992614"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="facebook"
              >
                <FaFacebookF />
              </a>

            </div>

          </div>

          {/* Links */}

          <div className="footer-column">

            <h3>Links</h3>

            {/* <NavLink to="/services">
              Services
            </NavLink> */}
            <NavLink
  to="/services"
  onClick={(e) => {
    if (location.pathname === "/services") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }}
>
  Services
</NavLink>

            <HashLink smooth to="/#why-zestbot" scroll={scrollWithOffset}>
              Why ZestBot
            </HashLink>

            <HashLink smooth to="/#faqs" scroll={scrollWithOffset}>
              FAQs
            </HashLink>

            <NavLink to="/blog">
              Blog
            </NavLink>

          </div>
          {/* Other Pages */}

          <div className="footer-column">

            <h3>Other Pages</h3>

            <button
              className="footer-link-btn"
              onClick={() => setShowTerms(true)}
            >
              Terms
            </button>

            

          </div>

          {/* Download */}

          <div className="footer-column">

            <h3>Download App</h3>

            <a
              href="https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={googlePlay}
                alt="Google Play"
                className="store-btn"
              />
            </a>

            <img
              src={appStore}
              alt="App Store"
              className="store-btn"
            />

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">

          <p>
            Dhatvi Business Solutions Private Limited
          </p>

        </div>

        {/* Terms & Conditions Modal */}

        {showTerms && (
          <TermsConditions
            isModal={true}
            isOpen={showTerms}
            onClose={() => setShowTerms(false)}
          />
        )}

      </div>
    </footer>
    </div>
  );
};

export default Footer;