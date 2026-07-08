import React from "react";
import "./DeliveryPartner.css";
import {
  FaMotorcycle,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaBell,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import googlePlay from "../../../assets/images/google-play.png";
import appStore from "../../../assets/images/app-store.png";
// import riderImage from "../../../assets/images/delivery-hero.png";

const DeliveryPartner = () => {
  return (
    <div className="delivery-page">

      {/* Hero Section */}

      <section className="delivery-hero">

        <div className="hero-left">

          <span className="hero-badge">
            DELIVERY PARTNER APP
          </span>

          <h1>
            Deliver with Confidence.
            <br />
            Earn with Flexibility.
          </h1>

          <p>
            Join the ZestBot Delivery Partner network and deliver
            orders from local businesses with ease. Track your
            deliveries, manage earnings, and work on your own
            schedule with our smart delivery platform.
          </p>

          <div className="hero-buttons">

            <a
              href="https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={googlePlay}
                alt="Google Play"
              />
            </a>

            <img
              src={appStore}
              alt="App Store"
            />

          </div>

        </div>

        <div className="hero-right">

          <div className="phone">

            {/* Replace with image later */}

            <FaMotorcycle />

          </div>

        </div>

      </section>

      {/* About */}

      <section className="about-section">

        <h2>
          About Delivery Partner App
        </h2>

        <p>
          The ZestBot Delivery Partner App helps riders deliver
          orders quickly and efficiently while tracking deliveries,
          earnings and payment history in one place. Whether you're
          looking for a full-time opportunity or flexible part-time
          work, ZestBot gives you complete control over your schedule.
        </p>

      </section>

      {/* What You Can Do */}

      <section className="what-section">

        <h2>What You Can Do</h2>

        <div className="cards">

          <div className="card">
            <FaMotorcycle />
            <h3>Accept Delivery Requests</h3>
            <p>
              Receive nearby delivery requests instantly and accept
              orders directly through the app.
            </p>
          </div>

          <div className="card">
            <FaMapMarkedAlt />
            <h3>Smart Navigation</h3>
            <p>
              Reach pickup and delivery locations using optimized
              routes.
            </p>
          </div>

          <div className="card">
            <FaMoneyBillWave />
            <h3>Manage Earnings</h3>
            <p>
              Track deliveries, incentives and complete payment
              history anytime.
            </p>
          </div>

          <div className="card">
            <FaBell />
            <h3>Instant Notifications</h3>
            <p>
              Receive alerts for new orders and important delivery
              updates.
            </p>
          </div>

        </div>
        

      </section>
      {/* Why Choose */}

<section className="why-section">

  <span className="section-tag">
    WHY ZESTBOT
  </span>

  <h2>
    Why Choose ZestBot?
  </h2>

  <div className="why-grid">

    <div className="why-card">

      <div className="why-icon">💰</div>

      <h3>Flexible Earnings</h3>

      <p>
        Work whenever you want and earn according
        to your own schedule.
      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">⚡</div>

      <h3>Fast Deliveries</h3>

      <p>
        Smart routing helps complete deliveries
        faster and efficiently.
      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">📱</div>

      <h3>Easy to Use</h3>

      <p>
        A simple mobile app designed for smooth
        delivery management.
      </p>

    </div>

    <div className="why-card">

      <div className="why-icon">🤝</div>

      <h3>Reliable Support</h3>

      <p>
        Get assistance whenever you need help
        during your deliveries.
      </p>

    </div>

  </div>

</section>

{/* How It Works */}

<section className="how-section">

  <span className="section-tag">
    HOW IT WORKS
  </span>

  <h2>
    Start Delivering in 4 Easy Steps
  </h2>

  <div className="timeline">

    <div className="timeline-item">

      <div className="circle">1</div>

      <h3>Accept Order</h3>

      <p>
        Receive nearby delivery requests and accept the ones you want.
      </p>

    </div>

    <div className="line"></div>

    <div className="timeline-item">

      <div className="circle">2</div>

      <h3>Pick Up Order</h3>

      <p>
        Visit the merchant, collect the order, and confirm pickup.
      </p>

    </div>

    <div className="line"></div>

    <div className="timeline-item">

      <div className="circle">3</div>

      <h3>Deliver to Customer</h3>

      <p>
        Use smart navigation to reach the customer quickly and safely.
      </p>

    </div>

    <div className="line"></div>

    <div className="timeline-item">

      <div className="circle">4</div>

      <h3>Get Paid</h3>

      <p>
        Complete the delivery and track your earnings in the app.
      </p>

    </div>

  </div>

</section>

{/* ================= DOWNLOAD CTA ================= */}

<section className="cta-section">

  <div className="cta-card">

    <span className="section-tag">
      JOIN ZESTBOT
    </span>

    <h2>
      Ready to Start Earning?
    </h2>

    <p>
      Become a ZestBot Delivery Partner today and enjoy flexible
      working hours, transparent earnings, smart navigation,
      and reliable support while delivering orders in your city.
    </p>

    <div className="cta-buttons">

      <a
        href="https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={googlePlay}
          alt="Google Play"
        />
      </a>

      <img
        src={appStore}
        alt="App Store"
      />

    </div>

  </div>

</section>
    </div>
  );
};

export default DeliveryPartner;