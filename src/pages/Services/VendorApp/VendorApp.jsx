import React from "react";
import "./VendorApp.css";

import {
    FaStore,
    FaBoxOpen,
    FaShoppingCart,
    FaChartLine,
    FaUserFriends,
    FaClipboardCheck,
    FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import googlePlay from "../../../assets/images/google-play.png";
import appStore from "../../../assets/images/app-store.png";

const VendorApp = () => {
    const navigate = useNavigate();
    return (
        <div className="vendor-page">
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

            <section className="vendor-hero">

                <div className="vendor-left">

                    <span className="vendor-tag">
                        ZESTBOT VENDOR APP
                    </span>

                    <h1>
                        Grow Your Business <br />
                        with ZestBot
                    </h1>

                    <p>
                        Take your local business online, manage orders,
                        products, and customers from one powerful platform.
                    </p>

                    <div className="download-buttons">

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

                <div className="vendor-right">

                    <div className="phone-card">

                        <FaStore />

                    </div>

                </div>

            </section>

            {/* About */}

            <section className="about-vendor">

                <h2>
                    About Vendor App
                </h2>

                <p>
                    The ZestBot Vendor App empowers grocery stores,
                    supermarkets, restaurants, pharmacies and other
                    local businesses to receive online orders, manage
                    products, track sales and expand their digital
                    presence through one easy-to-use platform.
                </p>

            </section>

            {/* What You Can Do */}

            <section className="features">

                <h2>
                    What You Can Do
                </h2>

                <div className="feature-grid">

                    <div className="feature-card">
                        <FaUserFriends />
                        <h3>Reach More Customers</h3>
                    </div>

                    <div className="feature-card">
                        <FaBoxOpen />
                        <h3>Manage Products</h3>
                    </div>

                    <div className="feature-card">
                        <FaShoppingCart />
                        <h3>Receive Orders</h3>
                    </div>

                    <div className="feature-card">
                        <FaChartLine />
                        <h3>Track Business</h3>
                    </div>

                    <div className="feature-card">
                        <FaClipboardCheck />
                        <h3>Update Store</h3>
                    </div>

                    <div className="feature-card">
                        <FaCheckCircle />
                        <h3>Build Customer Trust</h3>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default VendorApp;