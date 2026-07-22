import React from "react";
import "../../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section id="about" className="contact-us">
      <div className="contact-us-container">

        <div className="contact-us-header">
          <h2 className="contact-us-title">About Us</h2>
        </div>

        <p>
          <strong><a
            href="https://www.dhatvibs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            Dhatvi Business Solutions Private Limited
          </a></strong> is a technology
          company that operates <strong>ZestBot</strong>, a hyperlocal digital
          commerce platform connecting customers with local merchants and delivery
          partners. Our platform enables consumers to conveniently order groceries,
          food, fashion, electronics, pharmacy products, and other daily essentials
          from nearby businesses.
        </p>

        <p>
          ZestBot empowers local merchants by providing digital storefronts, order
          management, secure online payment collection, and merchant-wise settlement
          through an integrated payment gateway. We do not own or sell the products
          listed on the platform; all products and services are offered by
          independently onboarded merchants.
        </p>

        <p>
          Our mission is to digitize local commerce by providing affordable, secure,
          and innovative technology solutions that help small and medium businesses
          grow while delivering a seamless shopping experience to customers.
        </p>

      </div>
    </section>
  );
};

export default ContactUs;