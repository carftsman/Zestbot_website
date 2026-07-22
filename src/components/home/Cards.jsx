// import React from "react";
 
import { FaArrowRight } from "react-icons/fa";
// import {
//   FaShoppingBag,
//   FaStore,
//   FaMotorcycle,
// } from "react-icons/fa";
 
import "../../styles/Cards.css";
 
import customerImg from "../../assets/images/c1.png";
import vendorImg from "../../assets/images/v1.png";
import riderImg from "../../assets/images/d1.png";
import { useNavigate } from "react-router-dom";
 
const cards = [
  {
    id: 1,
    title: "Customers",
    description:
      "Get groceries, daily essentials & more delivered to your doorstep in minutes.",
    button: "Download App",
    image: customerImg,
    color: "#FDB515",
    link: "/coming-soon",
  },
  {
    id: 2,
    title: "Vendors",
    description:
      "Grow your business with ZestBot and reach thousands of customers around you.",
    button: "Download App",
    image: vendorImg,
 
    color: "#2563EB",
    link: "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
  },
  {
    id: 3,
    title: "Riders",
    description:
      "Deliver with ZestBot, work when it suits you, and maximize your daily earnings.          ",
    button: "Download App",
    image: riderImg,
    color: "#22C55E",
    link: "/coming-soon",  },
];
 
 
export default function Cards() {
  const navigate = useNavigate();
  return (
    <section className="cards-section">
      {/* Background */}
      <div className="blur yellow"></div>
      <div className="blur blue"></div>
 
      <div className="circle left"></div>
      <div className="circle right"></div>
 
      <div className="dots dots-left"></div>
      <div className="dots dots-right"></div>
 
      <div className="cards-container">
 
        {/* Badge */}
 
        <div
          className="cards-badge"
         
        >
          <span className="badge-icon"></span>
          Join the ZestBot Ecosystem
      </div>
 
        {/* Heading */}
 
       <h2 className="cards-heading">
          One Platform.
          <span> Three Opportunities.</span>
        </h2>
 
        {/* Subtitle */}
 
      <p className="cards-subtitle">
          Whether you're ordering, selling or delivering,
          ZestBot has something for everyone.
        </p>
{/* Cards */}
 
<div className="cards-grid">
  {cards.map((card) => (
    <div
      key={card.id}
      className="image-card"
    >
      {/* Card Image */}
 
      <img
        src={card.image}
        alt={card.title}
        className="card-bg"
      />
 
      {/* Overlay */}
 
      <div className="card-overlay">
 
        <div
          className="overlay-icon"
          style={{
            background: card.color,
          }}
        >
          {card.icon}
        </div>
 
        <div className="overlay-content">
 
          <h3>
            For <br />
            {card.title}
          </h3>
 
          <p>{card.description}</p>
 
          <button
            className="overlay-btn"
            onClick={() => {
              if (card.link === "/coming-soon") {
                navigate("/coming-soon");
              } else {
                window.open(card.link, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {card.button}
 
            <span>
              <FaArrowRight />
            </span>
          </button>
 
        </div>
 
      </div>
 
    </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}
 