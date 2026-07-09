import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

import logo from "../../../assets/images/logo.png";
import googlePlay from "../../../assets/images/google-play.png";
import appStore from "../../../assets/images/app-store.png";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
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
                info@zestbot.in
              </a>

              <a href="tel:04045374487">
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

            <NavLink to="/services">
              Services
            </NavLink>

            <HashLink smooth to="/#why-zestbot">
              Why ZestBot
            </HashLink>

            <HashLink smooth to="/#faqs">
              FAQs
            </HashLink>

            <NavLink to="/blog">
              Blog
            </NavLink>

          </div>

          {/* Other */}

          <div className="footer-column">

            <h3>Other Pages</h3>

            <NavLink to="/terms">
              Terms
            </NavLink>

            <NavLink to="/disclosures">
              Disclosures
            </NavLink>

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
        <div className="footer-bottom">
          <p>
            Dhatvi Business Solutions Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;