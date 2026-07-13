import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Store,
  Boxes,
  BellRing,
  BarChart3,
  Settings,
  Heart,
  UserPlus,
  LayoutGrid,
  PackageSearch,
  ClipboardCheck,
  Building2,
  LineChart,
  History,
  Bell,
  MousePointerClick,
  ShoppingBasket,
  Carrot,
  Milk,
  Fish,
  Croissant,
  Gift,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import VendorPhone from "../../../assets/images/VendorPhone.png";
import handshake from "../../../assets/images/live-order.png";
import people from "../../../assets/images/customer-2.png";
import community from "../../../assets/images/local-shops.png";
// ---- Brand tokens (matches the ZestBot home/services/customer pages) ----
const NAVY = "#152352";
const NAVY_DEEP = "#0d1638";
const GOLD = "#F2B705";
const GOLD_SOFT = "#FBD758";
const INK = "#1B1B1F";
const PAPER = "#F7F7FA";
 
const VENDOR_APP_URL =
  "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery";
 
const whatYouCanDo = [
  {
    icon: Store,
    title: "Reach More Local Customers",
    text: "Make your business visible to customers in your service area and receive online orders directly through the ZestBot platform.",
  },
  {
    icon: LayoutGrid,
    title: "Manage Products with Ease",
    text: "Add, update, and organize your products, pricing, categories, and availability from a single dashboard.",
  },
  {
    icon: BellRing,
    title: "Receive and Manage Orders",
    text: "Get instant notifications when new orders arrive. Accept, prepare, update, and complete orders efficiently.",
  },
  {
    icon: BarChart3,
    title: "Track Business Performance",
    text: "Monitor daily orders, sales, and business activity with easy-to-understand insights that help you make informed decisions.",
  },
  {
    icon: Settings,
    title: "Update Store Information",
    text: "Manage your business profile, operating hours, contact information, and delivery availability anytime.",
  },
  {
    icon: Heart,
    title: "Build Customer Trust",
    text: "Provide timely service, maintain accurate product information, and deliver a better shopping experience that encourages repeat customers.",
  },
];
 
const keyFeatures = [
  { icon: UserPlus, text: "Easy vendor registration and onboarding" },
  { icon: Store, text: "Online store management" },
  { icon: LayoutGrid, text: "Product and category management" },
  { icon: PackageSearch, text: "Inventory and stock updates" },
  { icon: BellRing, text: "Instant order notifications" },
  { icon: ClipboardCheck, text: "Order acceptance and status management" },
  { icon: Building2, text: "Business profile management" },
  { icon: LineChart, text: "Sales reports and performance insights" },
  { icon: History, text: "Customer order history" },
  { icon: Bell, text: "Real-time notifications" },
  { icon: MousePointerClick, text: "Simple and user-friendly interface" },
];
 
const whyChoose = [
  "Expand your business beyond walk-in customers",
  "Increase your local visibility",
  "Manage orders from one convenient platform",
  "Save time with a streamlined workflow",
  "Improve customer satisfaction through faster service",
  "Grow your revenue with digital commerce opportunities",
];
 
const whoCanJoin = [
  { icon: ShoppingBasket, label: "Grocery Stores" },
  { icon: Store, label: "Kirana Stores" },
  { icon: Building2, label: "Supermarkets" },
  { icon: Boxes, label: "Restaurants" },
  { icon: Carrot, label: "Fruit & Vegetable Stores" },
  { icon: Milk, label: "Dairy Stores" },
  { icon: Fish, label: "Meat & Seafood Shops" },
  { icon: Croissant, label: "Bakeries" },
  { icon: Gift, label: "Gift & Stationery Stores" },
];
 
export default function VendorAppPage() {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
 
  return (
    <div style={{ background: PAPER, minHeight: "100vh", fontFamily: "'Inter', system-ui, sans-serif", color: INK }}>
      <style>{`
  .hover-card {
    position: relative;
    overflow: hidden;
    transition:
      transform .35s ease,
      box-shadow .35s ease,
      border-color .35s ease,
      background .35s ease;
  }
 
  .hover-card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 22px 45px rgba(21,35,82,.18);
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
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 22px 45px rgba(21,35,82,.18);
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
 
`}
      </style>
      {/* BACK LINK */}
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
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 6% 60px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }}>
        <div>
          <span
            style={{
              display: "inline-block",
              background: NAVY,
              color: GOLD,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              padding: "8px 18px",
              borderRadius: 999,
              marginBottom: 20,
            }}
          >
            VENDOR APP
          </span>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 46,
              lineHeight: 1.15,
              color: NAVY,
              margin: "0 0 20px",
              fontWeight: 700,
            }}
          >
            Grow Your Business<br />with ZestBot
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#17181b", maxWidth: 480, marginBottom: 14 }}>
            The ZestBot Vendor App empowers local businesses to take their store online and
            reach more customers with ease — whether you run a grocery store, supermarket,
            restaurant, pharmacy, or any local retail business.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#17181b", maxWidth: 480, marginBottom: 30 }}>
            Focus on serving your customers while we help you streamline order management and
            expand your digital presence.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={VENDOR_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
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
              Get Vendor App <ArrowRight size={18} />
            </a>
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
 
        {/* Vendor App Phone Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:"100%"
          }}
        >
          <img
           className="floating-image"
            src={VendorPhone}
            alt="Vendor App"
            style={{
              width: "110%",
              maxWidth: "500px",
                height: "auto",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 20px 40px rgba(21,35,82,0.2)",
            }}
          />
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
            Everything You Need to Run Your Store Online
          </h2>
 
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
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
                <h3 style={{ fontSize: 17, fontWeight: 700, color: NAVY, margin: "0 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#5b6072", margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
 
        </div>
      </section>
      {/* KEY FEATURES - navy band */}
      <section style={{ background: NAVY, padding: "70px 6%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: GOLD, fontWeight: 800, letterSpacing: 1, fontSize: 20, marginBottom: 8 }}>
            KEY FEATURES
          </p>
          <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#fff", margin: "0 0 44px" }}>
            Built to Simplify Running Your Store
          </h2>
 
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px 28px" }}>
            {keyFeatures.map(({ icon: Icon, text }, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
                <span style={{ color: "#e8e9f3", fontSize: 15, fontWeight: 500 }}>{text}</span>
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
     
        {/* RIGHT IMAGE */}
 
        <img
          src={community}
          alt=""
          style={{
            position: "absolute",
            right: 0,
            bottom: 75,
            width: 330,
            opacity: 0.15,
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
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: 32,
              color: NAVY,
              margin: "0 0 44px",
            }}
          >
            Why Choose the ZestBot Vendor App?
          </h2>
 
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px 32px",
            }}
          >
            {whyChoose.map((point, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <ClipboardCheck
                  size={20}
                  color={GOLD}
                  style={{
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
 
                <span
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "#33364a",
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* WHO CAN JOIN */}
      <section style={{ background: "#fff", padding: "0 6% 70px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: GOLD, fontWeight: 800, letterSpacing: 1, fontSize: 20, marginBottom: 8 }}>
            WHO CAN JOIN?
          </p>
          <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: NAVY, margin: "0 0 20px" }}>
            Built for Every Local Business
          </h2>
          <p style={{ textAlign: "center", color: "#5b6072", fontSize: 15.5, maxWidth: 560, margin: "0 auto 44px" }}>
            The ZestBot Vendor App is designed for grocery stores, restaurants, and every kind
            of neighborhood shop in between.
          </p>
 
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {whoCanJoin.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="hover-card"
                style={{
                  background: PAPER,
                  borderRadius: 14,
                  padding: "20px 14px",
                  textAlign: "center",
                  border: "2px solid #eceef5",
                }}
              >
                <div
                  className="icon-box"
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: GOLD_SOFT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <Icon size={20} color={NAVY} />
                </div>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: NAVY }}>{label}</span>
              </div>
            ))}
          </div>
 
          <p style={{ textAlign: "center", color: "#5b6072", fontSize: 14.5, marginTop: 28 }}>
            Plus other local retail businesses — if you serve your local community, ZestBot can
            help you connect with more customers and grow.
          </p>
        </div>
      </section>
 
      {/* PARTNER CTA */}
      <section style={{ background: "#192A5f", padding: "70px 6%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 34, color: "#fff", margin: "0 0 16px" }}>
          Partner with ZestBot Today
        </h2>
        <p style={{ color: "#c7cadd", fontSize: 16, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Join the ZestBot Vendor App and take your business online with confidence. Manage
          orders efficiently, reach more local customers, and grow alongside a platform built
          to support local businesses.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={VENDOR_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: GOLD,
              color: NAVY,
              fontWeight: 800,
              fontSize: 15,
              padding: "14px 30px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Get it on Google Play
          </a>
 
        </div>
      </section>
    </div>
  );
}
 