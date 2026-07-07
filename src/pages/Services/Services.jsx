import React from "react";
import "./Services.css";
import {
  FaUser,
  FaStore,
  FaMotorcycle,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Customer App",
    icon: <FaUser />,
    description:
      "The ZestBot Customer App lets users order groceries, food, medicines, and daily essentials from nearby local stores with secure payments, live order tracking, and quick doorstep delivery.",
  },
  {
    title: "Vendor App",
    icon: <FaStore />,
    description:
      "The ZestBot Vendor App helps local businesses manage products, receive and process online orders, track sales, and expand their reach by connecting with more customers.",
  },
  {
    title: "Delivery Partner App",
    icon: <FaMotorcycle />,
    description:
      "The ZestBot Delivery Partner App enables riders to accept delivery requests, navigate efficiently, track earnings, manage deliveries, and enjoy flexible earning opportunities.",
  },
];

const Services = () => {
  return (
    <section className="services-section">

      <div className="services-container">

        <span className="services-tag">
          OUR SERVICES
        </span>

        <h2 className="services-title">
          Everything You Need <br />
          In One Platform
        </h2>

        <p className="services-subtitle">
          ZestBot offers powerful applications for customers,
          vendors and delivery partners to simplify the complete
          delivery ecosystem.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="icon-box">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <button>
                Learn More
                <FaArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;