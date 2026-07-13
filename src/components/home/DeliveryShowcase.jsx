


import { motion } from "framer-motion";
import {
  FaStore,
  FaMapMarkerAlt,
  FaHeadset
} from "react-icons/fa";

import "../../styles/DeliveryShowcase.css";

// import phone from "../../assets/images/phone.png";
import burger from "../../assets/images/milk.png";
import momos from "../../assets/images/eggs.png";
import pizza from "../../assets/images/veg-icon.png";
import leaf from "../../assets/images/veg-2.png";
import stationary from "../../assets/images/stationary.png";




const floating = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const DeliveryShowcase = () => {
  return (
    <section className="hero-section">

      {/* Soft Background */}
      <div className="hero-gradient hero-gradient-1"></div>
      <div className="hero-gradient hero-gradient-2"></div>

      {/* Decorative SVG Curves */}
   {/* Premium Delivery Routes */}

   <div className="blur veg-blur"></div>
<div className="blur meat-blur"></div>
<div className="blur milk-blur"></div>
<div className="blur egg-blur"></div>

<motion.img
   src={leaf}
   className="floating-food leaf"
/>




<svg
  className="hero-curves"
  viewBox="0 0 1600 900"
  preserveAspectRatio="none"
>
  {/* Grocery → Heading */}

  <path
    id="route1"
    className="route"
    d="M260 240 C420 160 560 220 790 300"
  />

  {/* Pizza → Heading */}

  <path
    id="route2"
    className="route"
    d="M1290 230 C1180 250 980 260 820 320"
  />

  {/* Burger → Heading */}

  <path
    id="route3"
    className="route"
    d="M170 560 C350 520 520 420 770 390"
  />

  {/* Momos → Heading */}

  <path
    id="route4"
    className="route"
    d="M1360 650 C1180 560 980 450 820 390"
  />

  {/* Moving Delivery Dots */}

  <circle r="5" fill="#FFC107">
    <animateMotion dur="6s" repeatCount="indefinite">
      <mpath href="#route1" />
    </animateMotion>
  </circle>

  <circle r="5" fill="#FFC107">
    <animateMotion dur="7s" repeatCount="indefinite">
      <mpath href="#route2" />
    </animateMotion>
  </circle>

  <circle r="5" fill="#FFC107">
    <animateMotion dur="8s" repeatCount="indefinite">
      <mpath href="#route3" />
    </animateMotion>
  </circle>

  <circle r="5" fill="#FFC107">
    <animateMotion dur="9s" repeatCount="indefinite">
      <mpath href="#route4" />
    </animateMotion>
  </circle>
</svg>

      {/* Floating Images */}

      <motion.img
        src={burger}
        alt=""
        className="floating-food burger"
        variants={floating}
        animate="animate"
      />

      <motion.img
        src={momos}
        alt=""
        className="floating-food momos"
        variants={floating}
        animate="animate"
      />

      <motion.img
        src={pizza}
        alt=""
        className="floating-food pizza"
        variants={floating}
        animate="animate"
      />

      <motion.img
        src={leaf}
        alt=""
        className="leaf"
        variants={floating}
        animate="animate"
      />

      {/* <motion.img
        src={stationary}
        alt=""
        className="stationary"
        variants={floating}
        animate="animate"
      /> */}

      {/* Hero Content */}

      <div className="hero-content">

      <motion.h1
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="hero-title"
>
  Local Groceries.
  <br />
  <span className="blue-text">Better Food.</span>
  <br />
 <span className="yellow-text">
  Delivered with Care.
</span>

</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
        >
         For every meal and every grocery list, ZestBot connects you with trusted local restaurants and neighborhood kirana stores—bringing convenience to customers while helping local businesses grow. 
        </motion.p>

        {/* Phone Mockup */}

        <motion.div
          className="phone-wrapper"
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: .3 }}
        >
          {/* <img
            src={phone}
            alt="Phone"
            className="phone-image"
          /> */}
        </motion.div>

      </div>
            {/* ==========================
          Stats Card
      ========================== */}

      <motion.div
        className="stats-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Vendors */}

        <div className="stat-item">
          <div className="stat-left">
            <h3>6000+</h3>
            <p>Vendors</p>
          </div>

          <div className="stat-icon">
            <FaStore />
          </div>
        </div>

        {/* Cities */}

        <div className="stat-item">
          <div className="stat-left">
            <h3>26+</h3>
            <p>Cities</p>
          </div>

          <div className="stat-icon">
            <FaMapMarkerAlt />
          </div>
        </div>


        

        {/* Orders */}

       <div className="stat-item">
  <div className="stat-left">
    <h3>24/7</h3>
    <p>Support</p>
  </div>

  <div className="stat-icon">
    <FaHeadset/>
  </div>
</div>
      </motion.div>

    </section>
  );
};

export default DeliveryShowcase;