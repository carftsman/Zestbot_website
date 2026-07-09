import React from "react";
import "./Services.css";
import {
  FaUser,
  FaStore,
  FaMotorcycle,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const services = [
  {
    title: "Customer App",
    path: "/services/customer",
    icon: <FaUser />,
    description:
      "Shop groceries, food, medicines and daily essentials from trusted local stores with secure payments and real-time tracking.",
  },
  {
    title: "Vendor App",
    path: "/services/vendor",
    icon: <FaStore />,
    description:
      "Manage products, receive online orders and grow your business with powerful vendor management tools.",
  },
  {
    title: "Delivery Partner App",
    path: "/services/delivery",
    icon: <FaMotorcycle />,
    description:
      "Accept deliveries, manage earnings and work with complete flexibility using the ZestBot Delivery Partner App.",
  },
];
 
const Services = () => {
  const navigate = useNavigate();
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
              <button onClick={() => navigate(service.path)}>
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