import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Store,
  Bike,
  Check,
  ArrowRight,
  ShieldCheck,
  Percent,
  Clock
} from "lucide-react";
import "./Services.css";

const servicesList = [
  {
    title: "Customer App",
    tagline: "For Daily Shoppers",
    path: "/services/customer",
    icon: ShoppingBag,
    description:
      "Order fresh groceries, meals, dairy, medicines, and daily essentials from trusted local shops with secure payments and real-time tracking.",
    features: [
      "Discover local neighborhood stores",
      "Real-time GPS order tracking",
      "Secure and multiple payment methods",
    ],
  },
  {
    title: "Vendor App",
    tagline: "For Local Merchants",
    path: "/services/vendor",
    icon: Store,
    description:
      "Grow your retail business and handle digital orders with ease. Manage products, stocks, prices, and view sales insights instantly.",
    features: [
      "Streamlined catalog & inventory controls",
      "Instant push notifications for orders",
      "Detailed business & revenue reports",
    ],
  },
  {
    title: "Delivery Partner App",
    tagline: "For Flexible Riders",
    path: "/services/delivery",
    icon: Bike,
    description:
      "Fulfill orders in your area, manage your earnings, and set your own flexible hours. Work with complete control using a user-friendly app.",
    features: [
      "Work anytime with flexible schedules",
      "Transparent and instant earnings tracker",
      "In-app GPS navigation for quick routes",
    ],
  },
];

const ecosystemSteps = [
  {
    badge: "1. CUSTOMER PLACES ORDER",
    title: "Order Request",
    description: "Customer browses local stores on the app, adds items to their basket, and places the order with secure checkout.",
    icon: ShoppingBag,
  },
  {
    badge: "2. VENDOR PREPARES ITEM",
    title: "Merchant Fulfilment",
    description: "The neighborhood vendor accepts the request, prepares the items fresh, packs them, and requests a delivery rider.",
    icon: Store,
  },
  {
    badge: "3. RIDER DELIVERS FRESH",
    title: "Doorstep Delivery",
    description: "The delivery partner picks up the package and rides to the customer's location using optimized navigation routes.",
    icon: Bike,
  },
];

const statsList = [
  {
    number: "99.9%",
    label: "System Uptime",
    desc: "Robust cloud architecture keeping routing and ordering active 24/7.",
    icon: ShieldCheck,
  },
  {
    number: "0%",
    label: "Merchant Commission",
    desc: "ZestBot charges zero commissions. Stores keep 100% of their digital sales.",
    icon: Percent,
  },
  {
    number: "< 10 Min",
    label: "Onboarding Setup",
    desc: "Register, setup catalog, and start selling online in minutes.",
    icon: Clock,
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="services-section">
      {/* Decorative Blur Backgrounds */}
      <div className="services-bg-blob services-bg-blob-1" />
      <div className="services-bg-blob services-bg-blob-2" />

      <div className="services-container">
        {/* Header Block */}
        <div className="services-header">
          <span className="services-tag">
            <span className="dot" />
            Our Ecosystem
          </span>
          <h2 className="services-title">
            Everything You Need <br />
            In One <span>Connected Platform</span>
          </h2>
          <p className="services-subtitle">
            ZestBot links customers, vendors, and delivery partners together to support local neighborhoods with fast, transparent digital shopping.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div className="service-card" key={index}>
                <div className="services-icon-box">
                  <IconComponent size={28} />
                </div>
                <span className="service-tagline">{service.tagline}</span>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                
                <ul className="service-card-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={() => navigate(service.path)}>
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Ecosystem Interactive Section */}
        <div className="ecosystem-section">
          <div className="ecosystem-header">
            <span className="ecosystem-tag">SEAMLESS INTEGRATION</span>
            <h3 className="ecosystem-title">How ZestBot Connects the Community</h3>
          </div>

          <div className="ecosystem-grid">
            {/* Step 1: Customer */}
            <div
              className={`ecosystem-node ${activeStep === 0 ? "active" : ""}`}
              onMouseEnter={() => setActiveStep(0)}
            >
              <div className="ecosystem-node-icon">
                <ShoppingBag size={24} />
              </div>
              <h4>Customer App</h4>
              <p>Creates Request</p>
            </div>

            {/* Connection Arrow 1 */}
            <div className={`ecosystem-arrow ${activeStep === 0 ? "active" : ""}`}>
              <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d="M 5,10 L 95,10"
                  className="connection-line"
                  fill="none"
                />
              </svg>
              <span>Instant Alert</span>
            </div>

            {/* Step 2: Vendor */}
            <div
              className={`ecosystem-node ${activeStep === 1 ? "active" : ""}`}
              onMouseEnter={() => setActiveStep(1)}
            >
              <div className="ecosystem-node-icon">
                <Store size={24} />
              </div>
              <h4>Vendor App</h4>
              <p>Prepares Order</p>
            </div>

            {/* Connection Arrow 2 */}
            <div className={`ecosystem-arrow ${activeStep === 1 ? "active" : ""}`}>
              <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                <path
                  d="M 5,10 L 95,10"
                  className="connection-line"
                  fill="none"
                />
              </svg>
              <span>Assign Rider</span>
            </div>

            {/* Step 3: Delivery Partner */}
            <div
              className={`ecosystem-node ${activeStep === 2 ? "active" : ""}`}
              onMouseEnter={() => setActiveStep(2)}
            >
              <div className="ecosystem-node-icon">
                <Bike size={24} />
              </div>
              <h4>Delivery App</h4>
              <p>Delivers Package</p>
            </div>
          </div>

          {/* Details Panel */}
          <div className="ecosystem-info-panel active">
            <span className="ecosystem-info-badge">
              {ecosystemSteps[activeStep].badge}
            </span>
            <p className="ecosystem-info-text">
              <strong>{ecosystemSteps[activeStep].title}:</strong>{" "}
              {ecosystemSteps[activeStep].description}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {statsList.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div className="stat-card" key={index}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <StatIcon size={28} color="#F2B705" />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <p className="stat-desc">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;