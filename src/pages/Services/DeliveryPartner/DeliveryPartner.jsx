import { useNavigate } from "react-router-dom";
import {
  Bike, Navigation, PackageCheck, Wallet, CalendarClock, BellRing, UserPlus, MapPin, IndianRupee, History, CreditCard, Clock, MousePointerClick, GraduationCap, Users, Briefcase, Smartphone, ArrowLeft, ArrowRight,
} from "lucide-react";

import Dps from "../../../assets/images/Dps.png";
import DeliveryBg from "../../../assets/images/delivery11.png";
import DeliveryBot from "../../../assets/images/bot-bag.png";

// ---- Brand tokens (matches the ZestBot home/services/customer/vendor pages) ----
const NAVY = "#152352";
const NAVY_DEEP = "#0d1638";
const GOLD = "#F2B705";
const GOLD_SOFT = "#FBD758";
const INK = "#1B1B1F";
const PAPER = "#F7F7FA";

// TODO: replace with the Delivery Partner App's actual Play Store link
const DELIVERY_APP_URL = "#";

const whatYouCanDo = [
  {
    icon: Bike,
    title: "Accept Delivery Requests",
    text: "Receive nearby delivery requests in real time and choose to accept available orders through the app.",
  },
  {
    icon: Navigation,
    title: "Navigate with Ease",
    text: "Use built-in navigation to reach the pickup location and deliver orders to customers using the fastest available routes.",
  },
  {
    icon: PackageCheck,
    title: "Track Delivery Status",
    text: "Update the status of each order from pickup to successful delivery, keeping customers and merchants informed throughout the process.",
  },
  {
    icon: Wallet,
    title: "Manage Your Earnings",
    text: "View completed deliveries, earnings, and payment history in one place for complete transparency.",
  },
  {
    icon: CalendarClock,
    title: "Work on Your Schedule",
    text: "Choose when you want to work and manage your availability directly from the app, giving you the flexibility to balance work with your lifestyle.",
  },
  {
    icon: BellRing,
    title: "Stay Connected",
    text: "Receive instant notifications for new delivery requests, order updates, and important announcements from the platform.",
  },
];

const keyFeatures = [
  { icon: UserPlus, text: "Easy delivery partner registration" },
  { icon: BellRing, text: "Instant delivery request notifications" },
  { icon: PackageCheck, text: "Order pickup and delivery management" },
  { icon: Navigation, text: "Smart navigation support" },
  { icon: MapPin, text: "Live delivery status updates" },
  { icon: IndianRupee, text: "Earnings dashboard" },
  { icon: History, text: "Delivery history" },
  { icon: CreditCard, text: "Payment tracking" },
  { icon: Clock, text: "Flexible working hours" },
  { icon: MousePointerClick, text: "Simple and user-friendly interface" },
];

const whyChoose = [
  "Flexible earning opportunities",
  "Easy-to-use mobile application",
  "Real-time delivery management",
  "Transparent earnings and payment tracking",
  "Efficient delivery workflow",
  "Opportunity to partner with trusted local businesses",
  "Reliable support for a smooth delivery experience",
];

const whoCanJoin = [
  { icon: Briefcase, label: "Full-time Delivery Professionals" },
  { icon: Bike, label: "Part-time Riders" },
  { icon: GraduationCap, label: "Students Looking for Flexible Work" },
  { icon: Users, label: "Freelancers" },
  { icon: Wallet, label: "Individuals Seeking Additional Income" },
];

export default function DeliveryPartnerAppPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: PAPER,
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: INK,
      }}
    >
      {/* BACK LINK */}
      <style>
        {`
  .hover-card {
    position: relative;
    overflow: hidden;
    transition:
      transform .35s ease,
      box-shadow .35s ease,
      border-color .35s ease,
      background .35s ease,
      filter .35s ease;
  }

  .hover-card:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 24px rgba(0,0,0,.18);
    filter: brightness(1.05);
    border-color: #F2B705;
  }

  .hover-card::before{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(
      135deg,
      rgba(242,183,5,.05),
      transparent 60%);
      opacity:0;
      transition:.35s;
  }
.hover-card:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 24px rgba(0,0,0,.18);
    filter: brightness(1.05);
    border: 1px solid #F2B705 !important;
}
  .hover-card:hover::before{
      opacity:1;
  }

  .hover-card .icon-box{
      transition:
      transform .35s ease,
      background .35s ease;
  }

  .hover-card:hover .icon-box{

      transform:rotate(-8deg) scale(1.12);
      background:#F2B705;

  }


  .hover-card:hover .icon-box svg{

      color:#152352 !important;

  }

  .hover-card h3{

      transition:color .3s;

  }

  .hover-card:hover h3{

      color:#F2B705;

  }

  @keyframes floatDelivery{
    0%{transform:translateY(-50%) translateY(0);}
    50%{transform:translateY(-50%) translateY(-12px);}
    100%{transform:translateY(-50%) translateY(0);}
  }
  .floating-image {
  animation: floatUpDown 3s ease-in-out infinite;
}

@keyframes floatUpDown {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 768px) {
  .hide-mobile {
    display: none !important;
  }
}
  /* ===========================
   RESPONSIVE
=========================== */

@media (max-width:1024px){

.hero-responsive{
grid-template-columns:1fr !important;
text-align:center;
gap:40px !important;
}

.hero-content-responsive{
display:flex;
flex-direction:column;
align-items:center;
}

.hero-title-responsive{
font-size:38px !important;
}

.hero-buttons-responsive{
justify-content:center;
}

.phone-responsive{
max-width:380px !important;
width:100% !important;
}

.hide-mobile{
display:none;
}

}

@media(max-width:768px){

.hero-responsive{
padding:20px 5% 40px !important;
}

.hero-title-responsive{
font-size:30px !important;
line-height:1.3 !important;
}

.hero-buttons-responsive{
flex-direction:column;
width:100%;
}

.hero-buttons-responsive a{
width:100%;
justify-content:center;
text-align:center;
}

.phone-responsive{
max-width:300px !important;
}

.features-grid-responsive,
.key-grid-responsive,
.why-grid-responsive{
grid-template-columns:1fr !important;
}

.join-grid-responsive{
grid-template-columns:repeat(2,1fr) !important;
}

.cta-responsive{
flex-direction:column;
}

.cta-responsive a{
width:100%;
text-align:center;
}

}

@media(max-width:480px){

.hero-title-responsive{
font-size:26px !important;
}

.join-grid-responsive{
grid-template-columns:1fr !important;
}

}
`}
      </style>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 6% 0" }}>
        <button
          onClick={() => navigate(-1)}
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
          }}
        >
          <ArrowLeft size={16} /> Back to Services
        </button>
      </div>

      {/* HERO */}
      <section
        className="hero-responsive"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "36px 6% 60px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 48,
          alignItems: "center"
        }}
      >
        <div className="hero-content-responsive">
          <span
            style={{
              display: "inline-block",
              background: "#192A5f",
              color: GOLD,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              padding: "8px 18px",
              borderRadius: 999,
              marginBottom: 20,
            }}
          >
            DELIVERY PARTNER APP
          </span>
          <h1
            className="hero-title-responsive"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 40,
              lineHeight: 1.15,
              color: NAVY,
              margin: "0 0 20px",
              fontWeight: 700,
            }}
          >
            Deliver on Your Terms,
            <br />
            Earn on Your Time
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#17181b",
              maxWidth: 480,
              marginBottom: 14,
            }}
          >
            The ZestBot Delivery Partner App enables riders to accept delivery
            requests, navigate efficiently, track earnings, manage deliveries
            and enjoy flexible earning opportunities.
          </p>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.7,
              color: "#17181b",
              maxWidth: 480,
              marginBottom: 30,
            }}
          >
            Work when it suits you, deliver with confidence and stay connected
            with a platform built to support your hustle.
          </p>
          <div
            className="hero-buttons-responsive"
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => navigate("/coming-soon")}
              style={{
                background: GOLD,
                color: NAVY,
                fontWeight: 800,
                fontSize: 15,
                padding: "14px 28px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Get Delivery Partner App <ArrowRight size={18} />
            </button>
            <a
              href="#features"
              style={{
                border: `2px solid ${NAVY}`,
                color: NAVY,
                fontWeight: 700,
                fontSize: 15,
                padding: "12px 26px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              See Features
            </a>
          </div>
        </div>

        {/* Rider image  */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              className="floating-image hide-mobile phone-responsive"
              src={Dps}
              alt="ZestBot Delivery Partner App"
              style={{
                width: "120%",
                maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 20px 40px rgba(21,35,82,0.2))",
              }}
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section id="features" style={{ background: "#fff", padding: "70px 6%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              color: GOLD,
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: 20,
              marginBottom: 8,
            }}
          >
            WHAT YOU CAN DO
          </p>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: 32,
              color: NAVY,
              margin: "0 0 44px",
            }}
          >
            Everything You Need to Deliver with ZestBot
          </h2>

          <div
            className="features-grid-responsive"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {whatYouCanDo.map(({ icon: Icon, title, text }, i) => (
              <div
                key={i}
                className="hover-card"
                style={{
                  border: "2px solid #eceef5",
                  borderRadius: 18,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 18,
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
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES - navy band */}
      <section style={{ background: NAVY, padding: "70px 6%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              color: GOLD,
              fontWeight: 800,
              letterSpacing: 1,
              fontSize: 20,
              marginBottom: 8,
            }}
          >
            KEY FEATURES
          </p>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: 32,
              color: "#fff",
              margin: "0 0 44px",
            }}
          >
            Built for Fast & Reliable Deliveries
          </h2>

          <div
            className="key-grid-responsive"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px 28px",
            }}
          >
            {keyFeatures.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 14 }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "rgba(242,183,5,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color={GOLD} />
                </div>
                <span
                  style={{ color: "#e8e9f3", fontSize: 15, fontWeight: 500 }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        style={{
          background: "#fff",
          padding: "70px 6%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          className="hide-mobile"
          src={DeliveryBg}
          alt=""
          style={{
            position: "absolute",
            left: "-50px",
            top: "35%",
            transform: "translateY(-50%)",
            width: "360px",
            opacity: 0.09,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            animation: "floatDelivery 6s ease-in-out infinite",
          }}
        />
        <img
          className="hide-mobile"
          src={DeliveryBot}
          alt=""
          style={{
            position: "absolute",
            right: "30px",
            top: "60%",
            transform: "translateY(-50%)",
            width: "160px",
            opacity: 0.11,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
            animation: "floatDelivery 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* <p style={{ textAlign: "center", color: GOLD, fontWeight: 800, letterSpacing: 1, fontSize: 14, marginBottom: 8 }}>
            WHY CHOOSE ZESTBOT
          </p> */}
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: 32,
              color: NAVY,
              margin: "0 0 44px",
            }}
          >
            Why Choose the ZestBot Delivery Partner App?
          </h2>

          <div
            className="join-grid-responsive"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              marginBottom: 36,
            }}
          >
            {whyChoose.map((point, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
              >
                <PackageCheck
                  size={20}
                  color={GOLD}
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span
                  style={{ fontSize: 15.5, lineHeight: 1.6, color: "#33364a" }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN BECOME A DELIVERY PARTNER */}
      <section style={{ background: "#fff", padding: "0 6% 70px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* <p style={{ textAlign: "center", color: GOLD, fontWeight: 800, letterSpacing: 1, fontSize: 14, marginBottom: 8 }}>
            WHO CAN JOIN?
          </p> */}
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: 32,
              color: NAVY,
              margin: "0 0 20px",
            }}
          >
            Who Can Become a Delivery Partner?
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#5b6072",
              fontSize: 15.5,
              maxWidth: 560,
              margin: "0 auto 44px",
            }}
          >
            The ZestBot Delivery Partner App is ideal for:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              marginBottom: 36,
            }}
          >
            {whoCanJoin.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="hover-card"
                style={{
                  background: PAPER,
                  borderRadius: 14,
                  padding: "20px 14px",
                  textAlign: "center",
                  border: "1px solid #eceef5",
                }}
              >
                <div
                  className="icon-box"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: GOLD_SOFT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <Icon size={20} color={NAVY} />
                </div>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: NAVY }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 16,
              background: GOLD_SOFT,
              borderRadius: 16,
              padding: "20px 26px",
            }}
          >
            <Smartphone size={26} color={NAVY} style={{ flexShrink: 0 }} />
            <p
              style={{
                margin: 0,
                fontSize: 14.5,
                color: NAVY,
                lineHeight: 1.6,
              }}
            >
              If you have a two-wheeler, a valid driving license, and a
              smartphone, you can join the ZestBot delivery network and start
              delivering orders in your local area.
            </p>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section
        style={{
          background: "#192A5f",
          padding: "70px 6%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 34,
            color: "#fff",
            margin: "0 0 16px",
          }}
        >
          Join the ZestBot Delivery Partner Network
        </h2>
        <p
          style={{
            color: "#c7cadd",
            fontSize: 16,
            maxWidth: 620,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          Become a part of the ZestBot ecosystem and help connect local
          businesses with customers through fast and reliable deliveries.
          Deliver orders, earn flexibility, and grow with a platform dedicated
          to supporting local commerce.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/coming-soon")}
            style={{
              background: GOLD,
              color: NAVY,
              fontWeight: 800,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Get it on Google Play
          </button>
        </div>
      </section>
    </div>
  );
}
