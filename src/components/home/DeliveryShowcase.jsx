// import { motion } from "framer-motion";

// import {
//   FaStore,
//   FaMapMarkerAlt,
//   FaShoppingBag,
// } from "react-icons/fa";

// import burger from "../../assets/images/burger.png";
// import pizza from "../../assets/images/pizza.png";
// import momos from "../../assets/images/momo.jpg";
// import tomato from "../../assets/images/tomato.png";
// import leaf from "../../assets/images/leaf.jpg";
// import phone from "../../assets/images/phone.png";

// import "../../styles/DeliveryShowcase.css";

// const stats = [
//   {
//     number: "6000+",
//     title: "Vendors",
//     icon: <FaStore />,
//   },

//   {
//     number: "26+",
//     title: "Cities",
//     icon: <FaMapMarkerAlt />,
//   },

//   {
//     number: "1M+",
//     title: "Orders Delivered",
//     icon: <FaShoppingBag />,
//   },
// ];

// export default function FoodSection() {
//   return (
//     <section className="food-section">

//       {/* SVG Background Lines */}

//       <svg
//         className="curve-lines"
//         viewBox="0 0 1920 900"
//         preserveAspectRatio="none"
//       >

//         <path
//           d="M-50 80 C250 250 250 -30 520 170"
//           className="curve"
//         />

//         <path
//           d="M1600 -50 C1300 120 1500 320 1750 520"
//           className="curve"
//         />

//         <path
//           d="M1600 900 C1850 700 1500 520 1900 420"
//           className="curve"
//         />

//       </svg>

//       {/* Floating Leaves */}

//       <motion.img
//         src={leaf}
//         alt=""
//         className="leaf leaf1"
//         animate={{
//           y: [0, -20, 0],
//           rotate: [-10, 10, -10],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 5,
//         }}
//       />

//       <motion.img
//         src={tomato}
//         alt=""
//         className="tomato tomato1"
//         animate={{
//           y: [0, 18, 0],
//           rotate: [0, 360],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 8,
//         }}
//       />

//       <motion.img
//         src={tomato}
//         alt=""
//         className="tomato tomato2"
//         animate={{
//           y: [0, -18, 0],
//           rotate: [0, -360],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 9,
//         }}
//       />

//             {/* LEFT FOOD */}

//       <motion.img
//         src={burger}
//         alt="Burger"
//         className="food burger"
//         animate={{
//           y: [0, -25, 0],
//           rotate: [-5, 5, -5],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//         }}
//       />

//       {/* RIGHT TOP */}

//       <motion.img
//         src={momos}
//         alt="Momos"
//         className="food momos"
//         animate={{
//           y: [0, -18, 0],
//           rotate: [4, -4, 4],
//         }}
//         transition={{
//           duration: 4.5,
//           repeat: Infinity,
//         }}
//       />

//       {/* RIGHT BOTTOM */}

//       <motion.img
//         src={pizza}
//         alt="Pizza"
//         className="food pizza"
//         animate={{
//           y: [0, 18, 0],
//           rotate: [-5, 5, -5],
//         }}
//         transition={{
//           duration: 5.5,
//           repeat: Infinity,
//         }}
//       />

//       {/* CENTER CONTENT */}

//       <motion.div
//         className="food-content"
//         initial={{
//           opacity: 0,
//           y: 60,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.8,
//         }}
//         viewport={{ once: true }}
//       >
//         <motion.div
//   className="phone-wrapper"
//   animate={{
//     y: [0, -15, 0],
//   }}
//   transition={{
//     duration: 5,
//     repeat: Infinity,
//   }}
// >
//   <img
//     src={phone}
//     alt="Phone"
//     className="phone-image"
//   />
// </motion.div>

//         <motion.h2
//           initial={{
//             opacity: 0,
//             scale: .9,
//           }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             delay: .2,
//             duration: .7,
//           }}
//         >
//           Better food for
//           <br />
//           more people
//         </motion.h2>

//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             delay: .4,
//             duration: .7,
//           }}
//         >
//           From restaurants and groceries to everyday essentials,
//           ZestBot enables thousands of customers to discover,
//           order and receive everything they need,
//           delivered straight to their doorstep.
//         </motion.p>

//       </motion.div>

//             {/* ===========================
//           STATS
//       ============================ */}

//       <motion.div
//         className="stats-container"
//         initial={{
//           opacity: 0,
//           y: 80,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.8,
//           delay: 0.4,
//         }}
//         viewport={{ once: true }}
//       >
//         {stats.map((item, index) => (
//           <motion.div
//             className="stat-item"
//             key={index}
//             whileHover={{
//               y: -8,
//               scale: 1.03,
//             }}
//             transition={{
//               duration: 0.3,
//             }}
//           >
//             <div className="stat-left">

//               <h3>{item.number}</h3>

//               <p>{item.title}</p>

//             </div>

//             <div className="stat-icon">

//               {item.icon}

//             </div>

//           </motion.div>
//         ))}
//       </motion.div>

//     </section>
//   );
// }

// // import { motion } from "framer-motion";
// // import {
// //   FaStore,
// //   FaMapMarkerAlt,
// //   FaShoppingBag,
// // } from "react-icons/fa";

// // import burger from "../../assets/images/burger.png";
// // import pizza from "../../assets/images/pizza.png";
// // import momos from "../../assets/images/momo.jpg";
// // import tomato from "../../assets/images/tomato.png";
// // import leaf from "../../assets/images/leaf.jpg";

// // import "../../styles/DeliveryShowcase.css";

// // const stats = [
// //   {
// //     number: "6000+",
// //     title: "Vendors",
// //     icon: <FaStore />,
// //   },
// //   {
// //     number: "26+",
// //     title: "Cities",
// //     icon: <FaMapMarkerAlt />,
// //   },
// //   {
// //     number: "1M+",
// //     title: "Orders Delivered",
// //     icon: <FaShoppingBag />,
// //   },
// // ];

// // export default function FoodSection() {
// //   return (
// //     <section className="food-section">

// //       {/* SVG Curved Lines */}

// //       <svg
// //         className="curve-lines"
// //         viewBox="0 0 1920 900"
// //         preserveAspectRatio="none"
// //       >
// //         <path
// //           d="M-50 80 C250 250 250 -30 520 170"
// //           className="curve"
// //         />

// //         <path
// //           d="M1600 -50 C1300 120 1500 320 1750 520"
// //           className="curve"
// //         />

// //         <path
// //           d="M1600 900 C1850 700 1500 520 1900 420"
// //           className="curve"
// //         />
// //       </svg>

// //       {/* Decorative Leaves */}

// //       <motion.img
// //         src={leaf}
// //         alt=""
// //         className="leaf leaf1"
// //         animate={{
// //           y: [0, -20, 0],
// //           rotate: [-10, 10, -10],
// //         }}
// //         transition={{
// //           duration: 5,
// //           repeat: Infinity,
// //         }}
// //       />

// //       {/* Tomatoes */}

// //       <motion.img
// //         src={tomato}
// //         alt=""
// //         className="tomato tomato1"
// //         animate={{
// //           rotate: [0, 360],
// //           y: [0, 18, 0],
// //         }}
// //         transition={{
// //           duration: 8,
// //           repeat: Infinity,
// //         }}
// //       />

// //       <motion.img
// //         src={tomato}
// //         alt=""
// //         className="tomato tomato2"
// //         animate={{
// //           rotate: [0, -360],
// //           y: [0, -18, 0],
// //         }}
// //         transition={{
// //           duration: 9,
// //           repeat: Infinity,
// //         }}
// //       />

// //       {/* Burger */}

// //       <motion.img
// //         src={burger}
// //         alt="Burger"
// //         className="food burger"
// //         animate={{
// //           y: [0, -25, 0],
// //           rotate: [-5, 5, -5],
// //         }}
// //         transition={{
// //           duration: 5,
// //           repeat: Infinity,
// //         }}
// //       />

// //       {/* Momos */}

// //       <motion.img
// //         src={momos}
// //         alt="Momos"
// //         className="food momos"
// //         animate={{
// //           y: [0, -18, 0],
// //           rotate: [5, -5, 5],
// //         }}
// //         transition={{
// //           duration: 5.5,
// //           repeat: Infinity,
// //         }}
// //       />

// //       {/* Pizza */}

// //       <motion.img
// //         src={pizza}
// //         alt="Pizza"
// //         className="food pizza"
// //         animate={{
// //           y: [0, 18, 0],
// //           rotate: [-5, 5, -5],
// //         }}
// //         transition={{
// //           duration: 6,
// //           repeat: Infinity,
// //         }}
// //       />

// //       {/* Center Content */}

// //       <motion.div
// //         className="food-content"
// //         initial={{
// //           opacity: 0,
// //           y: 60,
// //         }}
// //         whileInView={{
// //           opacity: 1,
// //           y: 0,
// //         }}
// //         viewport={{ once: true }}
// //         transition={{
// //           duration: 0.8,
// //         }}
// //       >
// //         <motion.h2
// //           initial={{
// //             opacity: 0,
// //             scale: 0.9,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             scale: 1,
// //           }}
// //           transition={{
// //             delay: 0.2,
// //             duration: 0.7,
// //           }}
// //         >
// //           Better food for
// //           <br />
// //           more people
// //         </motion.h2>

// //         <motion.p
// //           initial={{
// //             opacity: 0,
// //             y: 20,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           transition={{
// //             delay: 0.4,
// //             duration: 0.7,
// //           }}
// //         >
// //           From restaurants and groceries to everyday essentials,
// //           ZestBot helps thousands of customers discover, order,
// //           and receive everything they need at their doorstep.
// //         </motion.p>
// //       </motion.div>

// //       {/* ==========================
// //           GLASS STATS BAR
// //       =========================== */}

// //       <motion.div
// //         className="stats-container"
// //         initial={{
// //           opacity: 0,
// //           y: 80,
// //         }}
// //         whileInView={{
// //           opacity: 1,
// //           y: 0,
// //         }}
// //         viewport={{ once: true }}
// //         transition={{
// //           duration: 0.8,
// //           delay: 0.4,
// //         }}
// //       >
// //         {stats.map((item, index) => (
// //           <motion.div
// //             key={index}
// //             className="stat-item"
// //             whileHover={{
// //               y: -8,
// //               scale: 1.03,
// //             }}
// //             transition={{
// //               duration: 0.3,
// //             }}
// //           >
// //             <div className="stat-left">
// //               <h3>{item.number}</h3>
// //               <p>{item.title}</p>
// //             </div>

// //             <div className="stat-icon">
// //               {item.icon}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </motion.div>

// //     </section>
// //   );
// // }


import { motion } from "framer-motion";
import {
  FaStore,
  FaMapMarkerAlt,
  FaHeadset
} from "react-icons/fa";

import "../../styles/DeliveryShowcase.css";

// import phone from "../../assets/images/phone.png";
import burger from "../../assets/images/stationary.webp";
import momos from "../../assets/images/gift.webp";
import pizza from "../../assets/images/food.png";
import leaf from "../../assets/images/grocery.png";
// import tomato from "../../assets/images/tomato.png";

const floating = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const DeliveryShowcase = () => {
  return (
    <section className="hero-section">

      {/* Soft Background */}
      <div className="hero-gradient hero-gradient-1"></div>
      <div className="hero-gradient hero-gradient-2"></div>

      {/* Decorative SVG Curves */}
   {/* Premium Delivery Routes */}

<svg
  className="hero-curves"
  viewBox="0 0 1600 900"
  preserveAspectRatio="none"
>
  {/* Grocery → Heading */}

  <path
    id="route1"
    className="route"
    d="M260 240 C420 160 560 220 790 300"
  />

  {/* Pizza → Heading */}

  <path
    id="route2"
    className="route"
    d="M1290 230 C1180 250 980 260 820 320"
  />

  {/* Burger → Heading */}

  <path
    id="route3"
    className="route"
    d="M170 560 C350 520 520 420 770 390"
  />

  {/* Momos → Heading */}

  <path
    id="route4"
    className="route"
    d="M1360 650 C1180 560 980 450 820 390"
  />

  {/* Moving Delivery Dots */}

  <circle r="5" fill="#FFC107">
    <animateMotion dur="6s" repeatCount="indefinite">
      <mpath href="#route1" />
    </animateMotion>
  </circle>

  <circle r="5" fill="#FFC107">
    <animateMotion dur="7s" repeatCount="indefinite">
      <mpath href="#route2" />
    </animateMotion>
  </circle>

  <circle r="5" fill="#FFC107">
    <animateMotion dur="8s" repeatCount="indefinite">
      <mpath href="#route3" />
    </animateMotion>
  </circle>

  <circle r="5" fill="#FFC107">
    <animateMotion dur="9s" repeatCount="indefinite">
      <mpath href="#route4" />
    </animateMotion>
  </circle>
</svg>

      {/* Floating Images */}

      <motion.img
        src={burger}
        alt=""
        className="floating-food burger"
        variants={floating}
        animate="animate"
      />

      <motion.img
        src={momos}
        alt=""
        className="floating-food momos"
        variants={floating}
        animate="animate"
      />

      <motion.img
        src={pizza}
        alt=""
        className="floating-food pizza"
        variants={floating}
        animate="animate"
      />

      <motion.img
        src={leaf}
        alt=""
        className="leaf"
        variants={floating}
        animate="animate"
      />

      {/* <motion.img
        src={tomato}
        alt=""
        className="tomato"
        variants={floating}
        animate="animate"
      /> */}

      {/* Hero Content */}

      <div className="hero-content">

      <motion.h1
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="hero-title"
>
  Local Groceries.
  <br />
  <span className="blue-text">Better Food.</span>
  <br />
 <span className="yellow-text">
  Delivered with Care.
</span>

</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
        >
         For every meal and every grocery list, ZestBot connects you with trusted local restaurants and neighborhood kirana stores—bringing convenience to customers while helping local businesses grow. 
        </motion.p>

        {/* Phone Mockup */}

        <motion.div
          className="phone-wrapper"
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: .3 }}
        >
          {/* <img
            src={phone}
            alt="Phone"
            className="phone-image"
          /> */}
        </motion.div>

      </div>
            {/* ==========================
          Stats Card
      ========================== */}

      <motion.div
        className="stats-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Vendors */}

        <div className="stat-item">
          <div className="stat-left">
            <h3>6000+</h3>
            <p>Vendors</p>
          </div>

          <div className="stat-icon">
            <FaStore />
          </div>
        </div>

        {/* Cities */}

        <div className="stat-item">
          <div className="stat-left">
            <h3>26+</h3>
            <p>Cities</p>
          </div>

          <div className="stat-icon">
            <FaMapMarkerAlt />
          </div>
        </div>


        

        {/* Orders */}

       <div className="stat-item">
  <div className="stat-left">
    <h3>24/7</h3>
    <p>Support</p>
  </div>

  <div className="stat-icon">
    <FaHeadset/>
  </div>
</div>
      </motion.div>

    </section>
  );
};

export default DeliveryShowcase;