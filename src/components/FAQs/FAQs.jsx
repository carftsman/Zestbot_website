import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./FAQs.css";

const faqData = [
  {
    question: "What is ZestBot?",
    answer:
      "ZestBot is a local commerce platform that connects customers, vendors, and delivery partners through one seamless ecosystem for ordering groceries, food, medicines, and daily essentials.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Download the ZestBot Customer App, choose a nearby store, add products to your cart, complete the payment securely, and track your order in real time until it reaches your doorstep.",
  },
  {
    question: "How can I become a Vendor?",
    answer:
      "Register through the ZestBot Vendor App, submit your business details and required documents, and once verified, start receiving online orders from customers.",
  },
  {
    question: "How can I become a Delivery Partner?",
    answer:
      "Download the Delivery Partner App, complete the registration process, upload the required documents, and start earning by delivering orders after verification.",
  },
  {
    question: "Which payment methods are supported?",
    answer:
      "We support secure online payments including UPI, Debit Cards, Credit Cards, Net Banking and other supported payment methods.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. You can track your order live from the moment it is accepted until it is delivered to your location.",
  },
];

const FAQs = () => {

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section
      id="faqs"
      className="faq-section"
    >

      <div className="faq-header">

        <span className="faq-tag">
          FAQs
        </span>

        <h2>
          Frequently Asked Questions
        </h2>

        <p className="faq-subtitle">
          Everything you need to know about
          ZestBot. Can't find the answer?
          Contact our support team.
        </p>

      </div>

      <div className="faq-container">

        {faqData.map((faq, index) => (

          <div
            key={index}
            className={`faq-card ${activeIndex === index
                ? "active"
                : ""
              }`}
          >

            <button
              className="faq-question"
              onClick={() =>
                toggleFAQ(index)
              }
            >

              <span>
                {faq.question}
              </span>

              <div className="faq-icon">

                {activeIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </div>

            </button>

            <div
              className={`faq-answer ${activeIndex === index
                  ? "show"
                  : ""
                }`}
            >

              <p>
                {faq.answer}
              </p>

            </div>

          </div>

        ))}

      </div>

      <div className="faq-help">

        <h3>
          Still have questions?
        </h3>

        <p>
          Our support team is available to
          help you anytime.
        </p>

        <button
          className="contact-btn"
          onClick={() => {
            const footer = document.getElementById("contact");

            if (footer) {
              footer.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Contact Us
        </button>

      </div>

    </section>

  );

};

export default FAQs;