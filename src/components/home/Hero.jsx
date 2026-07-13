import { motion } from "framer-motion";
import { useRef } from "react";
import heroVideo from "../../assets/images/viedo-2.mp4";
import "./Hero.css";

const Hero = () => {
  const videoRef = useRef(null);

  const scrollRevealVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 16,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="hero full-screen-hero">
      {/* ================= Background Video ================= */}
      <div className="video-background-container">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
        />
        <div className="video-overlay-darkness"></div>
      </div>

      {/* ================= Hero Content ================= */}
      <div className="hero-container centered-content">
        <div className="hero-content-wrapper">
          {/* Badge */}
          <motion.div
            className="hero-badge ultra-glow"
            variants={scrollRevealVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="badge-pulse-core"></span>
            <span className="badge-text-prime">You choose, We Deliver</span>
          </motion.div>

          {/* Hero Title */}
          {/* Hero Title */}
          <h1 className="hero-title">
            {/* First Line */}
            <div className="hero-line hero-line-primary">
              <span>Everything</span>
              <span>You</span>
              <span>Need.</span>
            </div>

            {/* Second Line */}
            <div className="hero-line hero-line-secondary">
              <span>Everything</span>
              <span>You Crave.</span>
            </div>

            {/* Third Line */}
            <div className="hero-line hero-line-highlight">
              <span className="word yellow-gradient-text your">Fresh.</span>

              <span className="word yellow-gradient-text local">Fast.</span>

              <span className="word yellow-gradient-text store">
                Delivered.
              </span>
            </div>
          </h1>

          <motion.p
            className="hero-description"
            variants={scrollRevealVariants}
            initial="hidden"
            animate="visible"
          >
            From delicious restaurant meals to farm-fresh groceries and everyday
            essentials, discover thousands of quality products delivered to your
            doorstep with speed and care.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
