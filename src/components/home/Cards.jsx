import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "../../styles/Cards.css";

import {
  FaArrowRight,
  FaShoppingBag,
  FaStore,
  FaMotorcycle,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Customers",
    description:
      "Order food, groceries and daily essentials from your favourite stores in minutes.",
    button: "Download App",
    icon: <FaShoppingBag />,
    bg: "customer-card",
    link:
      "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
  },
  {
    id: 2,
    title: "Vendors",
    description:
      "Grow your business with ZestBot and reach thousands of customers around you.",
    button: "Register",
    icon: <FaStore />,
    bg: "vendor-card",
    link:
      "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
  },
  {
    id: 3,
    title: "Delivery Partners",
    description:
      "Deliver orders with flexible working hours and earn more every day with ZestBot.",
    button: "Join Now",
    icon: <FaMotorcycle />,
    bg: "rider-card",
    link:
      "https://play.google.com/store/apps/details?id=com.dhatvibs.zestbot.vendor.grocery",
  },
];

export default function Cards() {
  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="cards-section">
      <div className="cards-header">
        <span className="section-tag">
          Join the ZestBot Ecosystem
        </span>

        <h2>
          One Platform.
          <span> Three Opportunities.</span>
        </h2>

        <p>
          Whether you're ordering, selling or delivering,
          ZestBot has something for everyone.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        grabCursor={true}
        speed={800}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          992: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className={`feature-card ${card.bg}`}>
              <div className="card-icon-box">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

              <button
                className="card-btn"
                onClick={() => handleRedirect(card.link)}
              >
                {card.button}

                <span className="arrow-circle">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}