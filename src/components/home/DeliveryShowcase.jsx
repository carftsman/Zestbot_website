import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStore,
  FaMapMarkerAlt,
  FaHeadset,
} from "react-icons/fa";

import "../../styles/DeliveryShowcase.css";

/* ==========================
   LEFT IMAGES
========================== */

import veg1 from "../../assets/images/veg1.png";
import veg2 from "../../assets/images/veg2.png";
import eggs from "../../assets/images/veg3.png";

/* ===========================
   RIGHT SIDE IMAGES
=========================== */

import sushi from "../../assets/images/stir-fried.png";
import milk from "../../assets/images/pizza.png";
import stationary from "../../assets/images/biryani.png";


/* ==========================
   SLIDES
========================== */

const leftImages = [
  veg1,
  eggs,
  veg2,
];

const rightImages = [
  milk,
  stationary,
  sushi,
];

export default function DeliveryShowcase() {

  const [leftIndex, setLeftIndex] = useState(0);
const [rightIndex, setRightIndex] = useState(0);
const [isLeftTurn, setIsLeftTurn] = useState(true);

useEffect(() => {
  const timer = setInterval(() => {
    setIsLeftTurn((prevTurn) => {
      if (prevTurn) {
        setLeftIndex((prev) => (prev + 1) % leftImages.length);
      } else {
        setRightIndex((prev) => (prev + 1) % rightImages.length);
      }

      return !prevTurn;
    });
  }, 2000);

  return () => clearInterval(timer);
}, []);
  return (

    <section className="hero-section">

      {/* Background */}

      <div className="hero-gradient hero-gradient-1"></div>

      <div className="hero-gradient hero-gradient-2"></div>

      {/* SVG ROUTES */}

      <svg
        className="hero-curves"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >

        <path
          id="route1"
          className="route"
          d="M260 240 C420 160 560 220 790 300"
        />

        <path
          id="route2"
          className="route"
          d="M1290 230 C1180 250 980 260 820 320"
        />

        <path
          id="route3"
          className="route"
          d="M170 560 C350 520 520 420 770 390"
        />

        <path
          id="route4"
          className="route"
          d="M1360 650 C1180 560 980 450 820 390"
        />

        <circle r="5" fill="#FFC107">
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#route1"/>
          </animateMotion>
        </circle>

        <circle r="5" fill="#FFC107">
          <animateMotion dur="7s" repeatCount="indefinite">
            <mpath href="#route2"/>
          </animateMotion>
        </circle>

        <circle r="5" fill="#FFC107">
          <animateMotion dur="8s" repeatCount="indefinite">
            <mpath href="#route3"/>
          </animateMotion>
        </circle>

        <circle r="5" fill="#FFC107">
          <animateMotion dur="9s" repeatCount="indefinite">
            <mpath href="#route4"/>
          </animateMotion>
        </circle>

      </svg>

      {/* ==========================
            LEFT IMAGE
      ========================== */}

      <div className="left-slider">

        <AnimatePresence mode="wait">

          <motion.img
            key={leftIndex}
            src={leftImages[leftIndex]}
            className="left-image"
            initial={{
              opacity:0,
              x:-180,
              scale:.9
            }}
            animate={{
              opacity:1,
              x:0,
              scale:1
            }}
            exit={{
              opacity:0,
              x:-180,
              scale:.9
            }}
            transition={{
              duration:0.9,
              ease:"easeInOut"
            }}
          />

        </AnimatePresence>

      </div>

      {/* ==========================
            RIGHT IMAGE
      ========================== */}

      <div className="right-slider">

        <AnimatePresence mode="wait">

          <motion.img
            key={rightIndex}
            src={rightImages[rightIndex]}
            className="right-image"
            initial={{
              opacity:0,
              x:180,
              scale:.9
            }}
            animate={{
              opacity:1,
              x:0,
              scale:1
            }}
            exit={{
              opacity:0,
              x:180,
              scale:.9
            }}
            transition={{
              duration:.7
            }}
          />

        </AnimatePresence>

      </div>
            {/* ==========================
          HERO CONTENT
      ========================== */}

      <div className="hero-content">

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Local Groceries.
          <br />

          <span className="blue-text">
            Better Food.
          </span>

          <br />

          <span className="yellow-text">
            Delivered with Care.
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: .2,
            duration: .8,
          }}
        >
          For every meal and every grocery list,
          ZestBot connects you with trusted local
          restaurants and neighborhood kirana stores—
          bringing convenience to customers while
          helping local businesses grow.
        </motion.p>

      </div>

      {/* ==========================
            STATS
      ========================== */}

      <motion.div
        className="stats-container"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: .8,
          delay: .4,
        }}
      >

        <div className="stat-item">

          <div className="stat-left">

            <h3>6000+</h3>

            <p>Vendors</p>

          </div>

          <div className="stat-icon">

            <FaStore />

          </div>

        </div>

        <div className="stat-item">

          <div className="stat-left">

            <h3>26+</h3>

            <p>Cities</p>

          </div>

          <div className="stat-icon">

            <FaMapMarkerAlt />

          </div>

        </div>

        <div className="stat-item">

          <div className="stat-left">

            <h3>24/7</h3>

            <p>Support</p>

          </div>

          <div className="stat-icon">

            <FaHeadset />

          </div>

        </div>

      </motion.div>

    </section>

  );
}