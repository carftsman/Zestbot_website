// import React, { useEffect, useState } from "react";
// import "../../styles/CookieConsent.css";


// const CookieConsent = () => {
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     const consent = localStorage.getItem("zestbot_cookie_consent");

//     if (!consent) {
//       setTimeout(() => {
//         setShowBanner(true);
//       }, 800);
//     }
//   }, []);

//   const acceptCookies = () => {
//     localStorage.setItem("zestbot_cookie_consent", "accepted");
//     setShowBanner(false);
//   };

//   const rejectCookies = () => {
//     localStorage.setItem("zestbot_cookie_consent", "rejected");
//     setShowBanner(false);
//   };

//   if (!showBanner) return null;

//   return (
//     <div className="cookie-overlay">
//       <div className="cookie-banner">

//         <div className="cookie-icon">
//           🍪
//         </div>

//         <div className="cookie-content">

//           <h3>
//             We Value Your Privacy
//           </h3>

//           <p>
//             ZestBot uses cookies to enhance your browsing experience,
//             analyze website traffic, improve security and provide
//             personalized services. By clicking <strong>"Accept All"</strong>,
//             you agree to our use of cookies.
//           </p>

//         </div>

//         <div className="cookie-buttons">

//           <button
//             className="cookie-btn reject-btn"
//             onClick={rejectCookies}
//           >
//             Reject
//           </button>

//           <button
//             className="cookie-btn accept-btn"
//             onClick={acceptCookies}
//           >
//             Accept All
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default CookieConsent;