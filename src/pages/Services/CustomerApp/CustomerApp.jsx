 
import { useNavigate } from "react-router-dom";
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
 
export default function CustomerAppPage() {
  const navigate = useNavigate();
 
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
`}
</style>
      {/* BACK LINK */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 6% 0" }}>
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
            CUSTOMER APP
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
            Your Neighborhood Store,<br />Now in Your Pocket
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4a4f63", maxWidth: 480, marginBottom: 30 }}>
            The ZestBot Customer App lets users order fresh fruits and vegetables, dairy products, meat, food, or other daily essentials from nearby local stores — with secure payments, live order tracking,
            and quick doorstep delivery.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href={CUSTOMER_APP_URL}
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
              Download the App <ArrowRight size={18} />
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
 
        {/* Phone mock signature element */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 240,
              height: 480,
              background: NAVY_DEEP,
              borderRadius: 36,
              padding: 14,
              boxShadow: "0 30px 60px rgba(21,35,82,0.35)",
              position: "relative",
            }}
          >
            <div style={{ background: PAPER, width: "100%", height: "100%", borderRadius: 24, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: GOLD }} />
                <div style={{ height: 8, width: 70, background: "#d9dcea", borderRadius: 4 }} />
              </div>
              {[Store, ShoppingCart, MapPin].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 6px 14px rgba(21,35,82,0.08)",
                  }}
                >
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: GOLD_SOFT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={18} color={NAVY} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: 8, width: "70%", background: "#e3e5f0", borderRadius: 4, marginBottom: 6 }} />
                    <div style={{ height: 6, width: "45%", background: "#eceef5", borderRadius: 4 }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: "auto", background: GOLD, borderRadius: 12, padding: "10px", textAlign: "center", fontWeight: 800, fontSize: 12, color: NAVY }}>
                Track Order Live
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* WHAT YOU CAN DO */}
      <section id="features" style={{ background: "#fff", padding: "70px 6%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: GOLD, fontWeight: 800, letterSpacing: 1, fontSize: 14, marginBottom: 8 }}>
            WHAT YOU CAN DO
          </p>
          <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: NAVY, margin: "0 0 44px" }}>
            Everything You Need to Shop Locally
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
                //className="icon-box"
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
          <p style={{ textAlign: "center", color: GOLD, fontWeight: 800, letterSpacing: 1, fontSize: 14, marginBottom: 8 }}>
            KEY FEATURES
          </p>
          <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: "#fff", margin: "0 0 44px" }}>
            Built for Fast, Simple Local Shopping
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
      <section style={{ background: "#fff", padding: "70px 6%" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: GOLD, fontWeight: 800, letterSpacing: 1, fontSize: 14, marginBottom: 8 }}>
            WHY CHOOSE ZESTBOT
          </p>
          <h2 style={{ textAlign: "center", fontFamily: "Georgia, serif", fontSize: 32, color: NAVY, margin: "0 0 44px" }}>
            Why Choose the ZestBot Customer App?
          </h2>
 
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px 32px" }}>
            {whyChoose.map((point, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <CheckCircle2 size={20} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 15.5, lineHeight: 1.6, color: "#33364a" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* PERFECT FOR */}
      <section style={{ padding: "0 6% 70px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            background: GOLD_SOFT,
            borderRadius: 24,
            padding: "44px 48px",
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: NAVY,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ShoppingCart size={28} color={GOLD} />
          </div>
          <div>
            <h3 style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1, color: NAVY, margin: "0 0 8px", opacity: 0.7 }}>
              PERFECT FOR
            </h3>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: NAVY, margin: 0, fontWeight: 500, maxWidth: 700 }}>
              Anyone looking for a simple and reliable way to purchase groceries, food, and daily
              essentials from nearby local stores — all from a single app.
            </p>
          </div>
        </div>
      </section>
 
      {/* DOWNLOAD CTA */}
      <section id="download" style={{ background: NAVY_DEEP, padding: "70px 6%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 34, color: "#fff", margin: "0 0 16px" }}>
          Download the ZestBot Customer App
        </h2>
        <p style={{ color: "#c7cadd", fontSize: 16, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Experience a smarter way to shop locally with fast ordering, secure payments, and
          convenient doorstep delivery.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={CUSTOMER_APP_URL}
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
          <a
            href="#"
            style={{
              border: "2px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              padding: "12px 28px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Download on the App Store
          </a>
        </div>
      </section>
    </div>
  );
}
 
