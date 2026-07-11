import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./FAQs.css";

const faqData = [
  {
    question: "What can I order using the ZestBot Customer App?",
    answer:
      "You can order groceries, food, fresh fruits and vegetables, dairy products, and other daily essentials from nearby local stores.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. You can track your order in real time from the moment it is confirmed until it reaches your doorstep.",
  },
  {
    question: "Are there any platform charges?",
    answer:
      "No. ZestBot does not charge any platform fees. You only pay for the items you order.",
  },
  {
    question: "Who can become a ZestBot vendor?",
    answer:
      "Local businesses such as grocery stores, supermarkets, restaurants, pharmacies, bakeries, and other retail stores can join the ZestBot platform.",
  },
  {
    question: "How do I receive customer orders?",
    answer:
      "Once your store is onboarded, you'll receive instant notifications for new orders through the Vendor App, where you can accept and manage them.",
  },
  {
    question: "Can I manage my products and prices?",
    answer:
      "Yes. You can easily add, update, or remove products, modify prices, and manage inventory directly from the app.",
  },
  {
    question: "How can I become a ZestBot delivery partner?",
    answer:
      "Download the Delivery Partner App, complete the registration process, submit the required documents, and wait for account verification.",
  },
  {
    question: "Can I choose my own working hours?",
    answer:
      "Yes. ZestBot offers flexible working hours, allowing you to work based on your availability.",
  },
  {
    question: "How do I track my earnings?",
    answer:
      "The app includes an earnings dashboard where you can view completed deliveries, earnings, and payment history.",
  },
];

const FAQs = () => {

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  /* ===========================
     STAGGER ANIMATION STATE
  =========================== */

  const [visibleCards, setVisibleCards] = useState([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  /* ===========================
     STAGGER ANIMATION
  =========================== */

  const startAnimation = () => {

    const cards = showAll
      ? faqData
      : faqData.slice(0, 3);

    setVisibleCards([]);

    cards.forEach((_, index) => {

      setTimeout(() => {

        setVisibleCards(prev => [...prev, index]);

      }, index * 180);

    });

  };

  /* ===========================
     INITIAL LOAD + SEE MORE
  =========================== */

  useEffect(() => {

    startAnimation();

  }, [showAll]);

  return (

    <section
      id="faqs"
      className="faq-section"
      onMouseEnter={startAnimation}
    >

      <div className="faq-header">

        <span className="faq-tag">
          FAQs
        </span>

        <h2>
          Frequently Asked Questions
        </h2>

        <p className="faq-subtitle">
          Everything you need to know about ZestBot.
          Can't find the answer? Contact our support team.
        </p>

      </div>

      <div className="faq-content">

        {/* LEFT SIDE */}

        <div className="faq-left">

          <div className="faq-container">

            {(showAll ? faqData : faqData.slice(0, 3)).map((faq, index) => (

              <div
                key={index}
                className={`
                  faq-card
                  ${activeIndex === index ? "active" : ""}
                  ${visibleCards.includes(index) ? "show" : ""}
                `}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
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
                  className={`faq-answer ${
                    activeIndex === index
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

          <div className="faq-see-more">

            <button
              className="see-more-btn"
              onClick={() => {
                setShowAll(!showAll);
                setActiveIndex(null);
              }}
            >
              {showAll ? "Show Less" : "See More FAQs"}
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="faq-right">

          <div className="faq-help">

            <h3>
              Still have
              <br />
              Questions?
            </h3>

            <p>
              Our support team is available to
              assist you with any questions or
              concerns regarding ZestBot.
            </p>

            <button
              className="contact-btn"
              onClick={() => {

                const footer =
                  document.getElementById("contact");

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

        </div>

      </div>

    </section>

  );

};

export default FAQs;