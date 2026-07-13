import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Store,
  ShoppingCart,
  MapPin,
  ShieldCheck,
  Truck,
  History,
  Tag,
  CheckCircle2,
  Smartphone,
  Search,
  CreditCard,
  Bell,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import customer from "../../../assets/images/customer.png";
import handshake from "../../../assets/images/customer.png";
import people from "../../../assets/images/customer-2.png";
import community from "../../../assets/images/zest.png";

const NAVY = "#152352";
const NAVY_DEEP = "#0d1638";
const GOLD = "#F2B705";
const GOLD_SOFT = "#FBD758";
const INK = "#1B1B1F";
const PAPER = "#F7F7FA";

const CUSTOMER_APP_URL =
  "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery";

const whatYouCanDo = [
  {
    icon: Store,
    title: "Discover Nearby Stores",
    text: "Browse a wide range of trusted local grocery stores, supermarkets, restaurants, pharmacies, and other neighborhood businesses available in your area.",
  },
  {
    icon: ShoppingCart,
    title: "Shop Anytime",
    text: "Search for products, compare options, add items to your cart, and place orders whenever it's convenient for you.",
  },
  {
    icon: MapPin,
    title: "Real-Time Order Tracking",
    text: "Track your order from confirmation to delivery with live updates, so you always know where your order is.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Pay safely using your preferred payment method for a smooth and secure checkout experience.",
  },
  {
    icon: Truck,
    title: "Fast Doorstep Delivery",
    text: "Receive your orders quickly from nearby stores through reliable delivery partners.",
  },
  {
    icon: History,
    title: "Order History",
    text: "View your previous orders, reorder your favorite items, and keep track of your shopping activity.",
  },
  {
    icon: Tag,
    title: "Exclusive Offers",
    text: "Discover special deals, discounts, and promotional offers from participating local merchants.",
  },
];

const keyFeatures = [
  { icon: Smartphone, text: "Easy-to-use mobile application" },
  { icon: Store, text: "Browse nearby local stores" },
  { icon: ShoppingCart, text: "Wide range of products" },
  { icon: Search, text: "Smart product search" },
  { icon: CreditCard, text: "Quick and secure checkout" },
  { icon: MapPin, text: "Real-time order tracking" },
  { icon: ShieldCheck, text: "Multiple payment options" },
  { icon: Truck, text: "Fast doorstep delivery" },
  { icon: RotateCcw, text: "Order history and easy reordering" },
  { icon: Bell, text: "Instant notifications and delivery updates" },
];

const whyChoose = [
  "Shop from trusted local businesses",
  "Save time with convenient online ordering",
  "Fresh products delivered to your doorstep",
  "Transparent pricing with no hidden platform charges",
  "Safe and reliable shopping experience",
  "Support your neighborhood stores while enjoying modern convenience",
];

// Framer Motion Animation Variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemFadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const fastStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function CustomerAppPage() {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: PAPER,
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: INK,
        overflowX: "hidden"
      }}
    >
      <style>{`
        /* Premium card hover style with subtle gradient borders */
        .hover-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(21, 35, 82, 0.1);
          border-color: #F2B705 !important;
        }

        .hover-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1.5px;
          background: linear-gradient(135deg, #F2B705, transparent 65%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: -1;
        }

        .hover-card:hover::after {
          opacity: 1;
        }

        .hover-card .icon-box {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      background-color 0.4s ease, 
                      box-shadow 0.4s ease;
        }

        .hover-card:hover .icon-box {
          transform: rotate(-6deg) scale(1.08);
          background-color: #F2B705 !important;
          box-shadow: 0 6px 15px rgba(242, 183, 5, 0.3);
        }

        .hover-card:hover .icon-box svg {
          color: #152352 !important;
        }

        .hover-card h3 {
          transition: color 0.3s ease;
        }

        .hover-card:hover h3 {
          color: #152352;
        }

        /* Feature icon container micro-interaction */
        .feature-icon-container {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .feature-row:hover .feature-icon-container {
          background-color: #F2B705 !important;
          border-color: #F2B705 !important;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(242, 183, 5, 0.3);
        }

        .feature-row:hover .feature-icon-container svg {
          color: #152352 !important;
        }

        .feature-row span {
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .feature-row:hover span {
          color: #ffffff !important;
          transform: translateX(4px);
        }

        /* Why Choose card hover highlight */
        .why-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(21, 35, 82, 0.06);
          border-color: rgba(242, 183, 5, 0.4) !important;
        }

        .why-card .check-circle {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .why-card:hover .check-circle {
          transform: scale(1.15) rotate(4deg);
        }

        /* Marquee speed and movement */
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        /* Responsive Grid & Text adjustments */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 6px 6% 60px;
        }

        @media (max-width: 868px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            padding: 10px 6% 40px;
          }
          .hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-left h1 {
            font-size: 34px !important;
          }
          .hero-left p {
            max-width: 100% !important;
            font-size: 16px !important;
          }
          .hero-cta-container {
            justify-content: center;
          }
        }
      `}
      </style>

      {/* BACK LINK */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 6% 0" }}>
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -4, opacity: 1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "none",
            border: "none",
            color: NAVY,
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            padding: 0,
            opacity: 0.75,
            transition: "opacity 0.2s"
          }}
        >
          <ArrowLeft size={16} /> Back to Services
        </motion.button>
      </div>

      {/* HERO */}
      <section className="hero-grid">
        <motion.div
          className="hero-left"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemFadeUpVariants}
            style={{
              display: "inline-block",
              background: NAVY,
              color: GOLD,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.5,
              padding: "8px 18px",
              borderRadius: 999,
              marginBottom: 20,
              boxShadow: "0 4px 12px rgba(21, 35, 82, 0.15)"
            }}
          >
            CUSTOMER APP
          </motion.span>
          
          <motion.h1
            variants={itemFadeUpVariants}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 44,
              lineHeight: 1.2,
              color: NAVY,
              margin: "0 0 20px",
              fontWeight: 700,
            }}
          >
            Your Neighborhood Store,<br />Now in Your Pocket
          </motion.h1>
          
          <motion.p
            variants={itemFadeUpVariants}
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#4a4f63",
              maxWidth: 480,
              marginBottom: 30
            }}
          >
            The ZestBot Customer App lets users order fresh fruits and vegetables, dairy products, meat, food, or other daily essentials from nearby local stores — with secure payments, live order tracking, and quick doorstep delivery.
          </motion.p>
          
          <motion.div
            variants={itemFadeUpVariants}
            className="hero-cta-container"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <motion.a
              href={CUSTOMER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px rgba(242, 183, 5, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: GOLD,
                color: NAVY,
                fontWeight: 800,
                fontSize: 15,
                padding: "14px 28px",
                borderRadius: 999,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Download the App <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05, y: -2, background: "rgba(21, 35, 82, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: `2px solid ${NAVY}`,
                color: NAVY,
                fontWeight: 700,
                fontSize: 15,
                padding: "12px 26px",
                borderRadius: 999,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              See Features
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3D-like Phone Mockup */}
        <div className="hero-right" style={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
            whileHover={{ y: -8, rotateY: -4, rotateX: 4, transition: { duration: 0.3 } }}
            style={{
              position: "relative",
              width: 250,
              height: 500,
              borderRadius: 38,
              background: NAVY_DEEP,
              padding: "10px",
              boxShadow: "0 25px 50px -12px rgba(21, 35, 82, 0.35), inset 0 2px 2px rgba(255, 255, 255, 0.2), inset 0 -2px 2px rgba(0, 0, 0, 0.4)",
              border: "3.5px solid #e2e8f0",
              perspective: 1000,
              transformStyle: "preserve-3d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Screen reflection highlight */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)",
              borderRadius: 32,
              zIndex: 10,
              pointerEvents: "none"
            }} />

            {/* Side Buttons */}
            <div style={{ position: "absolute", left: -6, top: 110, width: 3, height: 40, background: "#94a3b8", borderRadius: "3px 0 0 3px" }} />
            <div style={{ position: "absolute", left: -6, top: 160, width: 3, height: 40, background: "#94a3b8", borderRadius: "3px 0 0 3px" }} />
            <div style={{ position: "absolute", right: -6, top: 130, width: 3, height: 50, background: "#94a3b8", borderRadius: "0 3px 3px 0" }} />

            {/* Phone Notch */}
            <div style={{
              position: "absolute",
              top: 16,
              width: 80,
              height: 20,
              background: "#000",
              borderRadius: 10,
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{ width: 25, height: 2.5, background: "#1a1a1a", borderRadius: 1, marginRight: 6 }} />
              <div style={{ width: 5, height: 5, background: "#0c1a30", borderRadius: "50%" }} />
            </div>

            {/* Screen content container */}
            <div
              style={{
                background: PAPER,
                width: "100%",
                height: "100%",
                borderRadius: 28,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #000"
              }}
            >
              <img
                src={customer}
                alt="ZestBot delivery partner riding to deliver an order"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          padding: "24px 0",
          /* Gradient fading masks on sides */
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)"
        }}
      >
        <div
          className="marquee-wrapper"
          style={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            className="marquee-track"
            style={{
              display: "flex",
              gap: "24px",
              width: "max-content",
              animation: "marquee 32s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {[...whatYouCanDo, ...whatYouCanDo].map(
              ({ icon: Icon, title, text }, i) => (
                <div
                  key={i}
                  className="hover-card"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  style={{
                    width: 300,
                    minWidth: 300,
                    flexShrink: 0,
                    border: "1px solid #eceef5",
                    borderRadius: 20,
                    padding: 26,
                    background: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="icon-box"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: NAVY,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={22} color={GOLD} />
                  </div>

                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: NAVY,
                      margin: "0 0 10px",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "#5b6072",
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* KEY FEATURES - navy band */}
      <section
        id="features"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
          padding: "80px 6%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Decorative blur elements inside features section */}
        <div style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "40%",
          height: "60%",
          background: "radial-gradient(circle, rgba(242,183,5,0.06) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "40%",
          height: "60%",
          background: "radial-gradient(circle, rgba(242,183,5,0.06) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: "center",
              color: GOLD,
              fontWeight: 800,
              letterSpacing: 1.5,
              fontSize: 14,
              marginBottom: 10
            }}
          >
            KEY FEATURES
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: 34,
              color: "#fff",
              margin: "0 0 54px"
            }}
          >
            Built for Fast, Simple Local Shopping
          </motion.h2>

          <motion.div
            variants={fastStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px 28px"
            }}
          >
            {keyFeatures.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                variants={itemFadeUpVariants}
                className="feature-row"
                style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}
              >
                <div
                  className="feature-icon-container"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "rgba(242,183,5,0.12)",
                    border: "1px solid rgba(242,183,5,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color={GOLD} />
                </div>
                <span style={{ color: "#e8e9f3", fontSize: 15, fontWeight: 500 }}>
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        style={{
          background: "#fff",
          padding: "80px 6%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* LEFT FLOATING IMAGE */}
        <motion.img
          src={handshake}
          alt=""
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: 40,
            top: 60,
            width: 170,
            opacity: 0.05,
            filter: "grayscale(100%)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
        />

        {/* CENTER FLOATING IMAGE */}
        <motion.img
          src={people}
          alt=""
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 280,
            opacity: 0.03,
            filter: "grayscale(100%)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
        />

        {/* RIGHT FLOATING IMAGE */}
        <motion.img
          src={community}
          alt=""
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: 40,
            bottom: 40,
            width: 170,
            opacity: 0.05,
            filter: "grayscale(100%)",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 5,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: 34,
              color: NAVY,
              margin: "0 0 54px",
            }}
          >
            Why Choose the ZestBot Customer App?
          </motion.h2>

          <motion.div
            variants={fastStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px 30px",
            }}
          >
            {whyChoose.map((point, i) => (
              <motion.div
                key={i}
                variants={itemFadeUpVariants}
                className="why-card"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  background: "#fff",
                  padding: "20px 24px",
                  borderRadius: 18,
                  border: "1px solid #eef0f6",
                  boxShadow: "0 4px 12px rgba(21, 35, 82, 0.02)",
                  cursor: "pointer",
                }}
              >
                <div
                  className="check-circle"
                  style={{
                    background: "rgba(242, 183, 5, 0.12)",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle2
                    size={18}
                    color={GOLD}
                    style={{
                      flexShrink: 0,
                    }}
                  />
                </div>

                <span
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "#33364a",
                    fontWeight: 500
                  }}
                >
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section style={{ padding: "0 6% 80px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(242, 183, 5, 0.12)" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: "linear-gradient(135deg, #FFF9E5 0%, #FBD758 100%)",
            border: "1px solid rgba(242, 183, 5, 0.3)",
            borderRadius: 28,
            padding: "48px 56px",
            display: "flex",
            alignItems: "center",
            gap: 36,
            flexWrap: "wrap",
            boxShadow: "0 10px 30px rgba(242, 183, 5, 0.04)",
            cursor: "pointer"
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: NAVY,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 8px 16px rgba(21, 35, 82, 0.2)"
            }}
          >
            <ShoppingCart size={28} color={GOLD} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: NAVY, margin: "0 0 8px", opacity: 0.7 }}>
              PERFECT FOR
            </h3>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: NAVY, margin: 0, fontWeight: 600, maxWidth: 700 }}>
              Anyone looking for a simple and reliable way to purchase groceries, food, and daily essentials from nearby local stores — all from a single app.
            </p>
          </div>
        </motion.div>
      </section>

      {/* DOWNLOAD CTA */}
      <section
        id="download"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
          padding: "80px 6%",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Soft glowing mesh background for footer CTA */}
        <div style={{
          position: "absolute",
          top: "-50%",
          left: "25%",
          width: "50%",
          height: "200%",
          background: "radial-gradient(circle, rgba(242,183,5,0.08) 0%, transparent 60%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "Georgia, serif", fontSize: 36, color: "#fff", margin: "0 0 16px", fontWeight: 700 }}
          >
            Download the ZestBot Customer App
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: "#c7cadd", fontSize: 16, maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.6 }}
          >
            Experience a smarter way to shop locally with fast ordering, secure payments, and convenient doorstep delivery.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <motion.a
              href={CUSTOMER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px rgba(242,183,5,0.4)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: GOLD,
                color: NAVY,
                fontWeight: 800,
                fontSize: 15,
                padding: "16px 36px",
                borderRadius: 999,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8
              }}
            >
              Get it on Google Play
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2, background: "rgba(255, 255, 255, 0.1)", borderColor: "#fff" }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 34px",
                borderRadius: 999,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "border-color 0.2s, background-color 0.2s"
              }}
            >
              Download on the App Store
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}