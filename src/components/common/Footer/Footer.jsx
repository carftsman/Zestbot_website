// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// import {
//   FaInstagram,
//   FaYoutube,
//   FaLinkedinIn,
//   FaFacebookF,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// import TermsConditions from "../../home/Terms&Conditions";
// import PrivacyPolicy from "../../PrivacyPolicy/PrivacyPolicy";


// import "./Footer.css";


// import logo from "../../../assets/images/logo.png";
// import googlePlay from "../../../assets/images/appstore.png";
// import appStore from "../../../assets/images/playstore.png";

// const scrollWithOffset = (el) => {
//   setTimeout(() => {
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   }, 100);
// };

// const Footer = () => {
//   const [showTerms, setShowTerms] = useState(false);

//   const [showPrivacy, setShowPrivacy] = useState(false);
//   const [showCancellation, setShowCancellation] = useState(false);
//   const [showReturn, setShowReturn] = useState(false);

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

// <div className="footer-logo-wrapper">
//   <img
//     src={logo}
//     alt="ZestBot"
//     className="footer-logo"
//   />
// </div>

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
//                 <FaMapMarkerAlt className="contact-icon" />
//                 Address:
//               </p>

//               <div
//                 className="footer-address-link"
//                 onClick={() =>
//                   window.open(
//                     "https://www.google.com/maps/search/?api=1&query=PB+House,+HUDA+Techno+Enclave,+Street+No.7,+Madhapur,+Hyderabad",
//                     "_blank"
//                   )
//                 }
//               >
//                 <p className="company">
//                   Dhatvi Business Solutions Private Limited
//                 </p>

//                 <p className="address-text">
//                   1st Floor, Street No.7, PB House,<br />
//                   HUDA Techno Enclave,<br />
//                   Madhapur, Hyderabad
//                 </p>
//               </div>

//               <a href="mailto:info@zestbot.in">
//                 <FaEnvelope className="contact-icon" />
//                 info@zestbot.in
//               </a>

//               <a href="tel:04045374487">
//                 <FaPhoneAlt className="contact-icon" />
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
//                 href="https://wa.me/9281118508"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="WhatsApp"
//                 className="whatsapp"
//               >
//                 <FaWhatsapp />
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

//             {/* <NavLink to="/services">
//               Services
//             </NavLink> */}
//             <NavLink
//               to="/services"
//               onClick={(e) => {
//                 if (location.pathname === "/services") {
//                   e.preventDefault();

//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   });
//                 }
//               }}
//             >
//               Services
//             </NavLink>

//             <HashLink smooth to="/#why-zestbot" scroll={scrollWithOffset}>
//               Why ZestBot
//             </HashLink>

//             <HashLink smooth to="/#faqs" scroll={scrollWithOffset}>
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
//               Terms & Conditions
//             </button>

//             <button
//               className="footer-link-btn"
//               onClick={() => setShowPrivacy(true)}
//             >
//               Privacy Policy
//             </button>

//             <NavLink
//               to="/cancellation-policy"
//               className="footer-link-btn"
//             >
//               Cancellation Policy
//             </NavLink>

//             <NavLink
//               to="/Return-policy"
//               className="footer-link-btn"
//             >
//               Return Policy
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

//         {showPrivacy && (
//           <PrivacyPolicy
//             isModal={true}
//             isOpen={showPrivacy}
//             onClose={() => setShowPrivacy(false)}
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
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import TermsConditions from "../../home/Terms&Conditions";
import PrivacyPolicy from "../../PrivacyPolicy/PrivacyPolicy";

import "./Footer.css";

import logo from "../../../assets/images/logo.png";
import googlePlay from "../../../assets/images/appstore.png";
import appStore from "../../../assets/images/playstore.png";

const scrollWithOffset = (el) => {
  setTimeout(() => {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const location = useLocation();

  const isBluePage =
    location.pathname === "/" ||
    location.pathname === "/services/customer" ||
    location.pathname === "/services/vendor" ||
    location.pathname === "/services/delivery";

  return (
    <div
      className={
        isBluePage
          ? "footer-wrapper home-footer"
          : "footer-wrapper"
      }
    >
      <footer
        id="contact"
        className="footer"
      >
        <div className="footer-container">

          {/* ================= Logo ================= */}

          <div className="footer-logo-wrapper">

            <img
              src={logo}
              alt="ZestBot"
              className="footer-logo"
            />

          </div>

          {/* ================= Footer Grid ================= */}

          <div className="footer-top">

            {/* Contact */}

            <div className="footer-column footer-contact">

              <div className="contact-details">

                <h3>Contact</h3>

                <p className="address-title">
                  <FaMapMarkerAlt className="contact-icon" />
                  Address:
                </p>

                <div
                  className="footer-address-link"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=PB+House,+HUDA+Techno+Enclave,+Street+No.7,+Madhapur,+Hyderabad",
                      "_blank"
                    )
                  }
                >
                  <p className="company">
                    Dhatvi Business Solutions Private Limited
                  </p>

                  <p className="address-text">
                    1st Floor, Street No.7,
                    <br />
                    PB House,
                    <br />
                    HUDA Techno Enclave,
                    <br />
                    Madhapur, Hyderabad
                  </p>

                </div>

                <a href="mailto:info@zestbot.in">
                  <FaEnvelope className="contact-icon" />
                  info@zestbot.in
                </a>

                <a href="tel:04045374487">
                  <FaPhoneAlt className="contact-icon" />
                  Tel: +918064524444
                </a>

              </div>

              

            </div>

            {/* Links */}
                        {/* ================= Links ================= */}

            <div className="footer-column">

              <h3>Links</h3>

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

              <HashLink
                smooth
                to="/#why-zestbot"
                scroll={scrollWithOffset}
              >
                Why ZestBot
              </HashLink>

              <HashLink
                smooth
                to="/#faqs"
                scroll={scrollWithOffset}
              >
                FAQs
              </HashLink>

              <NavLink to="/blog">
                Blog
              </NavLink>

              <div className="social-icons">

                <a
                  href="https://www.instagram.com/zestbotindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/9281118508"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
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
                  className="facebook"
                >
                  <FaFacebookF />
                </a>

              </div>

            </div>

            {/* ================= Other Pages ================= */}

            <div className="footer-column">

              <h3>Other Pages</h3>

              <button
                className="footer-link-btn"
                onClick={() => setShowTerms(true)}
              >
                Terms & Conditions
              </button>

              <button
                className="footer-link-btn"
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy
              </button>

              <NavLink
                to="/cancellation-policy"
                className="footer-link-btn"
              >
                Cancellation Policy
              </NavLink>

              <NavLink
                to="/Return-policy"
                className="footer-link-btn"
              >
                Return Policy
              </NavLink>

            </div>

            {/* ================= Download ================= */}

            <div className="footer-column footer-download">

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

          {/* ================= Footer Bottom ================= */}

          <div className="footer-bottom">

            <p>
             Dhatvi Business Solutions Private Limited.
            </p>

          </div>

          {/* ================= Terms ================= */}

          {showTerms && (
            <TermsConditions
              isModal
              isOpen={showTerms}
              onClose={() => setShowTerms(false)}
            />
          )}

          {/* ================= Privacy ================= */}

          {showPrivacy && (
            <PrivacyPolicy
              isModal
              isOpen={showPrivacy}
              onClose={() => setShowPrivacy(false)}
            />
          )}

        </div>
      </footer>
    </div>
  );
};

export default Footer;