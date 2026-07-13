import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  FaShoppingBag,
  FaStore,
  FaMotorcycle,
} from "react-icons/fa";

import "../../styles/Cards.css";

import customerImg from "../../assets/images/c1.png";
import vendorImg from "../../assets/images/v1.png";
import riderImg from "../../assets/images/d1.png";

const cards = [
  {
    id: 1,
    title: "Customers",
    description:
      "Get groceries, daily essentials & more delivered to your doorstep in minutes.",
    button: "Download App",
    image: customerImg,
    color: "#FDB515",
    link: "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
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
    link: "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Cards() {
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

        <motion.div
          className="cards-badge"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <span className="badge-icon">👥</span>
          Join the ZestBot Ecosystem
        </motion.div>

        {/* Heading */}

        <motion.h2
          className="cards-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          One Platform.
          <span> Three Opportunities.</span>
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          className="cards-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
        >
          Whether you're ordering, selling or delivering,
          ZestBot has something for everyone.
        </motion.p>

        {/* Cards */}

        <motion.div
          className="cards-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
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
                    onClick={() =>
                      window.open(
                        card.link,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    {card.button}

                    <span>
                      <FaArrowRight />
                    </span>
                  </button>

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}