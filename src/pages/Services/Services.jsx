import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 
import {
  FaUser,
  FaStore,
  FaMotorcycle,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
 
const services = [
  {
    
    title: "Customer App",
    path: "/services/customer",
    icon: <FaUser />,
    description:
      "Shop groceries, food, medicines and daily essentials from trusted local stores with secure payments and real-time tracking.",
    features: [
      "Live Order Tracking",
      "Secure Payments",
      "Order history and easy reordering",
    ],
  },
 
  {
    
    title: "Vendor App",
    path: "/services/vendor",
    icon: <FaStore />,
    description:
      "Manage products, receive online orders and grow your business with powerful vendor management tools.",
    features: [
      "Inventory Management",
      "Online store management",
      "Sales Analytics",
    ],
  },
 
  {
   
    title: "Delivery Partner App",
    path: "/services/delivery",
    icon: <FaMotorcycle />,
    description:
      "Accept deliveries, manage earnings and work with complete flexibility using the ZestBot Delivery Partner App.",
    features: [
      "Flexible Working Hours",
      "Daily Earnings",
      "Smart Route Navigation",
    ],
  },
];
 
const containerVariants = {
  hidden: {},
 
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
 
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
 
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
 
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
 
const Services = () => {
  const navigate = useNavigate();
 
  return (
    <section className="services">
 
      {/* Background */}
 
      <div className="grid-overlay"></div>
 
      <div className="blur blur-one"></div>
 
      <div className="blur blur-two"></div>
 
      <div className="blur blur-three"></div>
 
      <div className="services-container">
 
        {/* Heading */}
 
        <motion.span
          className="service-badge"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
        >
          OUR SERVICES
        </motion.span>
 
        <motion.h2
          className="services-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          Everything You Need
          <br />
          <span>In One Platform</span>
        </motion.h2>
 
        <motion.p
          className="services-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .15 }}
        >
          ZestBot offers powerful applications for customers,
          vendors and delivery partners to simplify the complete
          delivery ecosystem with one seamless platform.
        </motion.p>
 
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
 
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                y: -18,
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
              }}
            >
 
              {/* Premium Border */}
 
              <div className="card-border"></div>
 
              {/* Glow */}
 
              <div className="card-glow"></div>
 
              {/* Shine */}
 
              <div className="card-shine"></div>
 
              {/* Number */}
 
             
 
              {/* Floating Icon */}
 
              <div className="icon-wrapper">
 
                <div className="icon-circle">
                  {service.icon}
                </div>
 
              </div>
 
              {/* Title */}
 
              <h3>
                {service.title}
              </h3>
 
              {/* Description */}
 
              <p>
                {service.description}
              </p>
 
              {/* Features */}
 
              <div className="feature-list">
 
                {service.features.map((feature, index) => (
 
                  <div
                    className="feature"
                    key={index}
                  >
                    <FaCheckCircle />
 
                    <span>
                      {feature}
                    </span>
 
                  </div>
 
                ))}
 
              </div>
 
              {/* Button */}
 
              <button
                className="learn-btn"
                onClick={() => navigate(service.path)}
              >
                <span>Learn More</span>
 
                <FaArrowRight />
              </button>
 
            </motion.div>
 
          ))}
        </motion.div>
 
      </div>
 
    </section>
  );
};
 
export default Services;
 