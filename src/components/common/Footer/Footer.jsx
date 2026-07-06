import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../../../assets/images/logo.png";
import googlePlay from "../../../assets/images/google-play.png";
import appStore from "../../../assets/images/app-store.png";

const Footer = () => {
  return (
    <>
      <style>{`
      .footer {
  background: #0d0d0d;
  color: #fff;
  padding: 45px 6% 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 35px;
  align-items: flex-start;
}

.footer-logo {
  width: 130px;
  margin-bottom: 18px;
}

.footer-text {
  color: #d8d8d8;
  font-size: 15px;
  line-height: 1.6;
  max-width: 450px;
}

.social-icons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.social-icons a {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  transition: 0.3s;
}

.social-icons a:hover {
  background: #1f2e63;
}

.footer-column h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 12px;
}

.footer-column a {
  color: #9e9e9e;
  text-decoration: none;
  font-size: 15px;
  transition: 0.3s;
}

.footer-column a:hover {
  color: #ffd400;
}

.store-btn {
  width: 150px;
  display: block;
  margin-bottom: 12px;
  cursor: pointer;
}

.footer-line {
  border: none;
  border-top: 1px solid #333;
  margin: 35px 0 18px;
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  color: #8f8f8f;
  font-size: 14px;
}

/* ---------------- Laptop ---------------- */

@media (max-width: 1200px) {
  .footer-top {
    grid-template-columns: 1.7fr 1fr 1fr;
    gap: 30px;
  }

  .download {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }

  .download h3 {
    margin-bottom: 0;
  }
}

/* ---------------- Tablet ---------------- */

@media (max-width: 992px) {
  .footer {
    padding: 40px 5%;
  }

  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .footer-logo {
    width: 120px;
  }

  .footer-text {
    font-size: 14px;
  }

  .footer-column h3 {
    font-size: 17px;
  }

  .footer-column a {
    font-size: 14px;
  }

  .store-btn {
    width: 140px;
  }
}

/* ---------------- Mobile ---------------- */

@media (max-width: 768px) {
  .footer {
    padding: 35px 20px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }

  .footer-logo {
    margin: 0 auto 15px;
  }

  .footer-text {
    max-width: 100%;
    font-size: 14px;
  }

  .social-icons {
    justify-content: center;
  }

  .footer-column ul {
    padding: 0;
  }

  .download {
    display: block;
  }

  .download h3 {
    margin-bottom: 15px;
  }

  .store-btn {
    width: 160px;
    margin: 10px auto;
  }

  .footer-bottom p {
    font-size: 13px;
  }
}

/* ---------------- Small Mobile ---------------- */

@media (max-width: 480px) {
  .footer {
    padding: 30px 15px;
  }

  .footer-logo {
    width: 110px;
  }

  .footer-column h3 {
    font-size: 16px;
  }

  .footer-column a {
    font-size: 13px;
  }

  .footer-text {
    font-size: 13px;
  }

  .social-icons a {
    width: 38px;
    height: 38px;
    font-size: 16px;
  }

  .store-btn {
    width: 140px;
  }

  .footer-bottom p {
    font-size: 12px;
  }
}
      `}</style>

      <footer className="footer">

        <div className="footer-top">

          {/* Left */}

          <div>

            <img
              src={logo}
              alt="logo"
              className="footer-logo"
            />

            <p className="footer-text">
              Experience lightning-fast deliveries with our reliable
              and secure platform, ensuring your transactions are
              completed swiftly and seamlessly.
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaXTwitter />
              </a>

            </div>

          </div>

          {/* Links */}

          <div className="footer-column">

            <h3>Links</h3>

            <ul>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">Why Zestbot</NavLink></li>
              <li><NavLink to="/faqs">FAQs</NavLink></li>
            </ul>

          </div>

          {/* Other */}

          <div className="footer-column">

            <h3>Other Pages</h3>

            <ul>
              <li><NavLink to="/terms">Terms</NavLink></li>
              <li><NavLink to="/disclosures">Disclosures</NavLink></li>
              <li><NavLink to="/news">Latest News</NavLink></li>
            </ul>

          </div>

          {/* Download */}

          <div className="footer-column download">

            <h3>Download App</h3>

            <img
              src={googlePlay}
              alt="Google Play"
              className="store-btn"
            />

            <img
              src={appStore}
              alt="App Store"
              className="store-btn"
            />

          </div>

        </div>

        <hr className="footer-line" />

        <div className="footer-bottom">
          <p>
            Copyright ©2026 ExelusInfotech. All rights reserved
          </p>
        </div>

      </footer>
    </>
  );
};

export default Footer;