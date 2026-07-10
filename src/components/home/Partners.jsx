import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import "../../styles/Partners.css";
import company from "../../assets/images/partnerlogo.png";

export default function Partners() {
  const openWebsite = () => {
    window.open(
      "https://exelusinfotech.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="partners-section">
      <div className="partners-container">

        {/* Heading */}

        <div className="partners-header">
          <span className="partners-tag">
            OUR GROWTH PARTNER
          </span>

          <h2>
            We proudly work with
          </h2>
        </div>

        {/* Partner Card */}

        <div className="partner-card">

          <div className="partner-logo-box">
            <img
              src={company}
              alt="Exelusinfotech Pvt Ltd"
              className="partner-logo"
            />
          </div>

          <h3>
            Exelusinfotech Pvt Ltd
          </h3>

          <p>
            Official Technology Partner
          </p>

          <button
            className="visit-btn"
            onClick={openWebsite}
          >
            Visit Website
            <FaExternalLinkAlt />
          </button>

        </div>

      </div>
    </section>
  );
}