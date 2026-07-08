import React from "react";
import {
  FaShieldAlt,
  FaGlobe,

  FaStar,
} from "react-icons/fa";

import "../../styles/Partners.css";
import company from "../../assets/images/company.png";

export default function Partners() {
  const openWebsite = () => {
    window.open(
      "https://exelusinfotech.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

//   const contactPartner = () => {
//     window.open(
//       "https://exelusinfotech.com/contact-us/",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

  return (
    <section className="partners-section">
      {/* Background */}
      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>
      <div className="bg-circle bg3"></div>

      <div className="grid-dots dots-left"></div>
      <div className="grid-dots dots-right"></div>

      <div className="container">

        {/* Header */}

        <div className="partners-header">

          <span className="section-badge">
            <span className="badge-dot"></span>
            OUR GROWTH PARTNERS
          </span>

          <h2>Exelusinfotech Pvt Ltd</h2>

          <p>
            Behind every successful campaign is a trusted partner.
            Meet the agencies helping ZestBot connect with more
            customers and businesses every day.
          </p>

        </div>

        {/* Main Card */}

        <div className="partner-card">

          {/* Left Section */}

          <div className="partner-left">

            <div className="left-pattern"></div>

            <div className="logo-card">

              <img
                src={company}
                alt="Exelus Infotech Pvt Ltd"
                className="partner-logo"
              />

            </div>

            <div className="mini-circle orange">
              <FaStar />
            </div>

            <div className="mini-circle cyan">
              ⚡
            </div>

          </div>

          {/* Right Section */}

          <div className="partner-right">

            <div className="partner-tag">
              <FaShieldAlt />
              Official Growth Partner
            </div>

            <h3>
              Building. Growing. Succeeding Together.
            </h3>

            <p>
              Exelusinfotech Pvt Ltd is a trusted technology company
              specializing in software development, digital marketing,
              cloud solutions, UI/UX design and business automation.
              As ZestBot's official growth partner, Exelus helps
              businesses accelerate their digital transformation,
              improve customer engagement and achieve sustainable
              business growth through innovative technology solutions.
            </p>

            <div className="partner-buttons">

              <button
                className="visit-btn"
                onClick={openWebsite}
              >
                <FaGlobe />
                Visit Website
              </button>

             

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}