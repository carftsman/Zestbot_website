import React from "react";
import "./CustomerApp.css";

import {
    FaShoppingCart,
    FaStore,
    FaMapMarkerAlt,
    FaCreditCard,
    FaHistory,
    FaGift,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import googlePlay from "../../../assets/images/google-play.png";
import appStore from "../../../assets/images/app-store.png";
// import customerPhone from "../../../assets/images/customer-phone.png";

const CustomerApp = () => {
    const navigate = useNavigate();
    return (
        <div className="customer-page">
            <div className="back-btn-container">

                <button
                    className="back-btn"
                    onClick={() => navigate("/services")}
                >
                    <FaArrowLeft />
                    Back to Services
                </button>

            </div>
            {/* Hero */}

            <section className="customer-hero">

                <div className="hero-left">

                    <span className="hero-badge">
                        CUSTOMER APP
                    </span>

                    <h1>
                        Shop Smarter.
                        <br />
                        Live Better.
                    </h1>

                    <p>
                        Order groceries, fresh vegetables, fruits, food,
                        medicines and everyday essentials from trusted local
                        stores and get them delivered right to your doorstep.
                    </p>

                    <div className="hero-buttons">

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

                <div className="hero-right">

                    <div className="phone">

                        {/* Replace later with screenshot */}

                        <FaShoppingCart />

                    </div>

                </div>

            </section>

            {/* About */}

            <section className="about-section">

                <h2>
                    About Customer App
                </h2>

                <p>
                    The ZestBot Customer App makes everyday shopping
                    simple, fast and convenient. Browse nearby stores,
                    order groceries, food and daily essentials, track
                    deliveries in real time and enjoy secure online
                    payments—all from one easy-to-use app.
                </p>

            </section>

            {/* What You Can Do */}

            <section className="what-section">

                <h2>
                    What You Can Do
                </h2>

                <div className="cards">

                    <div className="card">

                        <FaStore />

                        <h3>
                            Discover Nearby Stores
                        </h3>

                        <p>
                            Explore trusted grocery stores,
                            supermarkets, pharmacies and restaurants.
                        </p>

                    </div>

                    <div className="card">

                        <FaShoppingCart />

                        <h3>
                            Shop Anytime
                        </h3>

                        <p>
                            Browse products, compare prices,
                            add items and place orders anytime.
                        </p>

                    </div>

                    <div className="card">

                        <FaMapMarkerAlt />

                        <h3>
                            Live Order Tracking
                        </h3>

                        <p>
                            Track your order from confirmation
                            until it reaches your doorstep.
                        </p>

                    </div>

                    <div className="card">

                        <FaCreditCard />

                        <h3>
                            Secure Payments
                        </h3>

                        <p>
                            Pay safely using multiple payment
                            methods with secure checkout.
                        </p>

                    </div>

                    <div className="card">

                        <FaHistory />

                        <h3>
                            Order History
                        </h3>

                        <p>
                            Reorder your favourite products
                            anytime from previous purchases.
                        </p>

                    </div>

                    <div className="card">

                        <FaGift />

                        <h3>
                            Exclusive Offers
                        </h3>

                        <p>
                            Enjoy discounts, cashback and
                            special offers from local stores.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= KEY FEATURES ================= */}

            <section className="key-section">

                <span className="section-tag">
                    KEY FEATURES
                </span>

                <h2>Everything You Need in One App</h2>

                <div className="feature-list">

                    <div className="feature-item">✔ Easy-to-use mobile application</div>
                    <div className="feature-item">✔ Browse nearby local stores</div>
                    <div className="feature-item">✔ Wide range of products</div>
                    <div className="feature-item">✔ Smart product search</div>
                    <div className="feature-item">✔ Quick & secure checkout</div>
                    <div className="feature-item">✔ Real-time order tracking</div>
                    <div className="feature-item">✔ Multiple payment options</div>
                    <div className="feature-item">✔ Fast doorstep delivery</div>
                    <div className="feature-item">✔ Order history & reordering</div>
                    <div className="feature-item">✔ Instant notifications</div>

                </div>

            </section>

            {/* ================= WHY CHOOSE ================= */}

            <section className="why-section">

                <span className="section-tag">
                    WHY ZESTBOT
                </span>

                <h2>Why Choose the ZestBot Customer App?</h2>

                <div className="why-grid">

                    <div className="why-card">
                        <div className="why-icon">🏪</div>
                        <h3>Trusted Local Stores</h3>
                        <p>Shop from reliable businesses in your neighborhood.</p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">⚡</div>
                        <h3>Fast Delivery</h3>
                        <p>Receive fresh groceries and essentials quickly.</p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">💳</div>
                        <h3>Secure Payments</h3>
                        <p>Multiple payment options with safe checkout.</p>
                    </div>

                    <div className="why-card">
                        <div className="why-icon">🎁</div>
                        <h3>Exclusive Offers</h3>
                        <p>Save more with exciting deals and discounts.</p>
                    </div>

                </div>

            </section>

            {/* ================= HOW IT WORKS ================= */}

            <section className="how-section">

                <span className="section-tag">
                    HOW IT WORKS
                </span>

                <h2>Shop in 4 Easy Steps</h2>

                <div className="timeline">

                    <div className="timeline-item">
                        <div className="circle">1</div>
                        <h3>Choose a Store</h3>
                        <p>Browse nearby stores and select your favorite.</p>
                    </div>

                    <div className="line"></div>

                    <div className="timeline-item">
                        <div className="circle">2</div>
                        <h3>Add Products</h3>
                        <p>Search and add products to your shopping cart.</p>
                    </div>

                    <div className="line"></div>

                    <div className="timeline-item">
                        <div className="circle">3</div>
                        <h3>Place Order</h3>
                        <p>Complete payment securely in just a few clicks.</p>
                    </div>

                    <div className="line"></div>

                    <div className="timeline-item">
                        <div className="circle">4</div>
                        <h3>Receive Delivery</h3>
                        <p>Track your order live until it reaches your doorstep.</p>
                    </div>

                </div>

            </section>

            {/* ================= DOWNLOAD ================= */}

            <section className="cta-section">

                <div className="cta-card">

                    <span className="section-tag">
                        DOWNLOAD NOW
                    </span>

                    <h2>Start Shopping Smarter Today</h2>

                    <p>
                        Download the ZestBot Customer App and enjoy
                        fast deliveries, secure payments, and a better
                        shopping experience from your favorite local stores.
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={googlePlay} alt="Google Play" />
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

export default CustomerApp;