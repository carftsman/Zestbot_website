import React from "react";
import "./WhyChoose.css";

import zestLogo from "../../assets/images/logo.png"; // small square logo mark (Z bolt icon)
import zestBot from "../../assets/images/bot.png";

import localShop from "../../assets/images/kirana.png";
import restaurant from "../../assets/images/restaurent.png";
import delivery from "../../assets/images/fast-delivery.png";
import payments from "../../assets/images/payments.png";
import offers from "../../assets/images/offers-home.png";
import tracking from "../../assets/images/live-order.png";


// const icons = {
//   cart: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="#2451e0" strokeWidth="2">
//       <circle cx="9" cy="21" r="1" />
//       <circle cx="20" cy="21" r="1" />
//       <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
//     </svg>
//   ),
//   store: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
//       <path d="M3 9l1-5h16l1 5" />
//       <path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" />
//       <path d="M4 9v10h16V9" />
//     </svg>
//   ),
//   scooter: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
//       <circle cx="6" cy="18" r="2.5" />
//       <circle cx="18" cy="18" r="2.5" />
//       <path d="M6 18h6l3-8h3" />
//       <path d="M9 10h4" />
//     </svg>
//   ),
//   shield: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
//       <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
//     </svg>
//   ),
//   gift: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
//       <rect x="3" y="8" width="18" height="13" />
//       <path d="M12 8v13M3 8h18M12 8c-2-4-7-3-6 0h6zM12 8c2-4 7-3 6 0h-6z" />
//     </svg>
//   ),
//   pin: (
//     <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
//       <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
//       <circle cx="12" cy="9" r="2.5" />
//     </svg>
//   ),
// };

const leftFeatures = [
  {
    image: localShop,
    title: "Local Kirana Stores",
    description: "Shop fresh groceries from trusted neighborhood stores.",
    badge: "store",
    badgeColor: "#dcfce7",
  },
  {
    image: restaurant,
    title: "Restaurant Food",
    description: "Order from your favorite local restaurants.",
    badge: "cart",
    badgeColor: "#dbeafe",
  },
  {
    image: delivery,
    title: "Fast Delivery",
    description: "Quick and reliable doorstep delivery.",
    badge: "scooter",
    badgeColor: "#fef3c7",
  },
];

const rightFeatures = [
  {
    image: payments,
    title: "Secure Payments",
    description: "Safe, seamless, and multiple payment options.",
    badge: "shield",
    badgeColor: "#dbeafe",
  },
  {
    image: offers,
    title: "Exclusive Offers",
    description: "Save more with exciting deals and discounts.",
    badge: "gift",
    badgeColor: "#ffedd5",
  },
  {
    image: tracking,
    title: "Live Order Tracking",
    description: "Track your order in real time from pickup to delivery.",
    badge: "pin",
    badgeColor: "#fee2e2",
  },
];

const FeatureCard = ({ item, index }) => (
  <div
    className={`whyChoose-featureIcon whyChoose-card-${index}`}
    style={{ backgroundImage: `url(${item.image})` }}
    role="img"
    aria-label={item.title}
    title={item.title}
  >
    {/* <span className="whyChoose-badge" style={{ background: item.badgeColor }}>
      {icons[item.badge]}
    </span> */}
  </div>
);

const WhyChoose = () => {
  return (
    <section id="why-zestbot" className="whyChoose-section">
      <div className="whyChoose-header">
        <span className="whyChoose-tag">Why Choose ZestBot</span>

        <h2 className="whyChoose-title">
          Your Local Grocery & <span>Food Delivery Partner</span>
        </h2>

        <p className="whyChoose-description">
          From fresh groceries from trusted local Kirana stores to
          delicious restaurant meals, ZestBot brings your neighborhood to
          your doorstep with fast, reliable delivery.
        </p>
      </div>

      <div className="whyChoose-layout">
        <div className="whyChoose-cards whyChoose-cardsLeft">
          {leftFeatures.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>

        <div className="whyChoose-phoneWrap">
          <div className="whyChoose-ring"></div>
          <div className="whyChoose-phone">
            <div className="whyChoose-screen">
              <div className="whyChoose-logo">
                <img src={zestLogo} alt="ZestBot" />
              </div>
              <img src={zestBot} alt="ZestBot assistant" className="whyChoose-bot" />
              {/* <div className="whyChoose-navBar">
                {icons.cart}
                {icons.store}
                {icons.pin}
              </div> */}
            </div>
          </div>
        </div>

        <div className="whyChoose-cards whyChoose-cardsRight">
          {rightFeatures.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
