// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// import "../../styles/Cards.css";
// import { motion } from "framer-motion";
// import {
//   FaArrowRight,
//   FaShoppingBag,
//   FaStore,
//   FaMotorcycle,
// } from "react-icons/fa";

// const cards = [
//   {
//     id: 1,
//     title: "Customers",
//     description:
//       "Order food, groceries and daily essentials from your favourite stores in minutes.",
//     button: "Download App",
//     icon: <FaShoppingBag />,
//     bg: "customer-card",
//     link:
//       "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
//   },
//   {
//     id: 2,
//     title: "Vendors",
//     description:
//       "Grow your business with ZestBot and reach thousands of customers around you.",
//     button: "Register",
//     icon: <FaStore />,
//     bg: "vendor-card",
//     link:
//       "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
//   },
//   {
//     id: 3,
//     title: "Delivery Partners",
//     description:
//       "Deliver orders with flexible working hours and earn more every day with ZestBot.",
//     button: "Join Now",
//     icon: <FaMotorcycle />,
//     bg: "rider-card",
//     link:
//       "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
//   },
// ];

// export default function Cards() {
//   const handleRedirect = (url) => {
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <section className="cards-section">
  
//       <div className="cards-header sticky-header">
//         <span className="section-tag">
//           Join the ZestBot Ecosystem
//         </span>

//         <h2>
//           One Platform.
//           <span> Three Opportunities.</span>
//         </h2>

//         <p>
//           Whether you're ordering, selling or delivering,
//           ZestBot has something for everyone.
//         </p>
//       </div>
//       <motion.div
//         className="cards-swiper"
//         initial={{ opacity: 0, y: 150 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.9,
//           ease: "easeOut",
//         }}
//         viewport={{
//           once: true,
//           amount: 0.35,
//         }}
//       >
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           grabCursor={true}
//           speed={800}
//           centeredSlides={false}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           spaceBetween={30}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             576: {
//               slidesPerView: 1.3,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 2,
//               spaceBetween: 25,
//             },
//             992: {
//               slidesPerView: 2.5,
//               spaceBetween: 25,
//             },
//             1200: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//         >
//           {cards.map((card) => (
//             <SwiperSlide key={card.id}>

//               <motion.div
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: card.id * 0.15,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.3,
//                 }}
//               >
//                 <div className={`feature-card ${card.bg}`}>
//                   <div className="card-icon-box">{card.icon}</div>

//                   <h3>{card.title}</h3>

//                   <p>{card.description}</p>

//                   <button
//                     className="card-btn"
//                     onClick={() => handleRedirect(card.link)}
//                   >
//                     {card.button}

//                     <span className="arrow-circle">
//                       <FaArrowRight />
//                     </span>
//                   </button>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaArrowRight, FaShoppingBag, FaStore, FaMotorcycle } from "react-icons/fa";
 
import "../../styles/Cards.css";
 
import customerImg from "../../assets/images/customer1.png";
import vendorImg from "../../assets/images/vendor1.png";
import riderImg from "../../assets/images/rider1.png";
 
const cards = [
  {
    id: 1,
    title: "Customers",
    description:
      "Order food, groceries and daily essentials from your favourite stores in minutes.",
    button: "Download App",
    image: customerImg,
    border: "#FDB515",
    iconBg: "#FDB515",
    icon: <FaShoppingBag />,
  },
  {
    id: 2,
    title: "Vendors",
    description:
      "Grow your business with ZestBot and reach thousands of customers around you.",
    button: "Register",
    image: vendorImg,
    border: "#2979FF",
    iconBg: "#2979FF",
    icon: <FaStore />,
  },
  {
    id: 3,
    title: "Delivery Partners",
    description:
      "Deliver orders with flexible working hours and earn more every day with ZestBot.",
    button: "Join Now",
    image: riderImg,
    border: "#22C55E",
    iconBg: "#22C55E",
    icon: <FaMotorcycle />,
  },
];
 
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
 
const item = {
  hidden: {
    opacity: 0,
    y: 90,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
 
export default function Cards() {
  return (
    <section className="cards-section">
 
      {/* Background Decorations */}
 
      <div className="blur yellow"></div>
      <div className="blur blue"></div>
 
      <div className="circle left"></div>
      <div className="circle right"></div>
 
      <div className="dots dots-left"></div>
      <div className="dots dots-right"></div>
 
      <div className="cards-container">
 
        {/* Top Badge */}
 
        <motion.div
          className="cards-badge"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <span className="badge-icon">
            👥
          </span>
 
          Join the ZestBot Ecosystem
        </motion.div>
 
        {/* Heading */}
 
        <motion.h2
          className="cards-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          One Platform.
          <span> Three Opportunities.</span>
        </motion.h2>
 
        {/* Description */}
 
        <motion.p
          className="cards-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
        >
          Whether you're ordering, selling or delivering, ZestBot has
          something for everyone.
        </motion.p>
 
        {/* Cards */}
 
        <motion.div
          className="cards-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {cards.map((card) => (
            <motion.div
              variants={item}
              whileHover={{
                y: -12,
              }}
              key={card.id}
              className="card"
              style={{
                borderColor: card.border,
              }}
            >
              {/* Image */}
 
              <div className="card-image">
 
                <img
                  src={card.image}
                  alt={card.title}
                />
 
                <div
                  className="card-icon"
                  style={{
                    background: card.iconBg,
                  }}
                >
                  {card.icon}
                </div>
 
              </div>
 
              {/* Content */}
 
              <div className="card-content">
 
                <h3>
                  {card.title}
                </h3>
 
                <p>
                  {card.description}
                </p>
 
                <button className="card-btn">
 
                  <span>
                    {card.button}
                  </span>
 
                  <div className="arrow">
 
                    <FaArrowRight />
 
                  </div>
 
                </button>
 
              </div>
 
            </motion.div>
          ))}
        </motion.div>
 
      </div>
 
    </section>
  );
}
 