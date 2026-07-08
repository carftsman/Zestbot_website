// import React, { useState, useEffect } from "react";
// import "../../styles/MobileShowcase.css";

// const MobileShowcase = () => {
//   const [mouse, setMouse] = useState({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   useEffect(() => {
//     const move = (e) => {
//       setMouse({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", move);

//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <section
//       className="hero"
//       style={{
//         "--x": `${mouse.x}px`,
//         "--y": `${mouse.y}px`,
//       }}
//     >
//       {/* ==========================
//             Background Effects
//       =========================== */}

//       <div className="noise"></div>

//       <div className="spotlight"></div>

//       <div className="aurora"></div>

//       <div className="blob blob1"></div>
//       <div className="blob blob2"></div>
//       <div className="blob blob3"></div>
//       <div className="blob blob4"></div>

//       {/* Animated Grid */}

//       <div className="grid-bg"></div>

//       {/* ==========================
//             Hero Container
//       =========================== */}

//       <div className="hero-container">

//         {/* ==========================
//               LEFT CONTENT
//         =========================== */}

//         <div className="hero-left">

//           <div className="hero-badge">
//             <span>✨</span>
//             <p>India's Fastest Hyperlocal Delivery Platform</p>
//           </div>

//           <h1>
//             Everything You Need.
//             <br />
//             Everything You Crave.
//             <br />
//             <span>Fresh. Fast. Delivered.</span>
//           </h1>

//           <p className="hero-description">
//             Order groceries, food, medicines and daily essentials from
//             trusted local stores. Experience lightning-fast delivery,
//             live tracking and AI-powered recommendations with ZestBot.
//           </p>

//           {/* Stats */}

//           <div className="hero-stats">

//             <div className="stat-card">
//               <h2>10K+</h2>
//               <span>Orders Daily</span>
//             </div>

//             <div className="stat-card">
//               <h2>500+</h2>
//               <span>Partner Stores</span>
//             </div>

//             <div className="stat-card">
//               <h2>24/7</h2>
//               <span>Support</span>
//             </div>

//           </div>

//           {/* Buttons */}

//           <div className="hero-buttons">

//             <button className="btn-primary">
//               Download App
//             </button>

//             <button className="btn-secondary">
//               Become Partner
//             </button>

//           </div>

//         </div>

//         {/* ==========================
//               RIGHT SIDE
//         =========================== */}

//         <div className="hero-right">

//           {/* Orbit Ring */}

//           <div className="orbit-ring"></div>

//           <div className="orbit-ring ring2"></div>

//           {/* Glow */}

//           <div className="robot-glow"></div>

//           {/* Phone */}

//           <div className="phone">

//             <div className="phone-notch"></div>

//             <div className="phone-screen">

//               {/* Robot */}

//               <img
//                 src="/images/zestbot.png"
//                 alt="Robot"
//                 className="robot-image"
//               />

//               {/* Floating Icons */}

//               <div className="orbit icon1">
//                 🍔
//               </div>

//               <div className="orbit icon2">
//                 🛒
//               </div>

//               <div className="orbit icon3">
//                 🚴
//               </div>

//               <div className="orbit icon4">
//                 💊
//               </div>

//             </div>

//           </div>

//           {/* Floating Cards */}

//           <div className="feature-card card1">

//             <div className="icon">
//               🍔
//             </div>

//             <div>
//               <h4>Food Delivery</h4>
//               <p>30 min delivery</p>
//             </div>

//           </div>

//           <div className="feature-card card2">

//             <div className="icon">
//               🛒
//             </div>

//             <div>
//               <h4>Groceries</h4>
//               <p>Fresh Everyday</p>
//             </div>

//           </div>

//           <div className="feature-card card3">

//             <div className="icon">
//               🚴
//             </div>

//             <div>
//               <h4>Live Tracking</h4>
//               <p>Real Time</p>
//             </div>

//           </div>

//           <div className="feature-card card4">

//             <div className="icon">
//               💊
//             </div>

//             <div>
//               <h4>Medicines</h4>
//               <p>Fast Delivery</p>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* SVG Connection Lines */}

//       <svg
//         className="connection-svg"
//         viewBox="0 0 1200 700"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M760 200 C880 180 950 120 1030 180"
//           className="svg-line"
//         />

//         <path
//           d="M740 350 C920 360 980 420 1040 480"
//           className="svg-line"
//         />

//         <path
//           d="M660 280 C540 260 470 220 350 260"
//           className="svg-line"
//         />

//       </svg>

//     </section>
//   );
// };

// export default MobileShowcase;