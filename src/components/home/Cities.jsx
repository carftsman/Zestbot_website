import { useState } from "react";
import "../../styles/Cities.css";
import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const cityData = {
  Telangana: [
    "Kamareddy",
    "Karimnagar",
    "Nizamabad",
    "Warangal",
    "Siddipet",
    "Sangareddy",
    "Tellapur",
    "Isnapur",
    "Hyderabad",
  ],

  "Andhra Pradesh": [
    "Vijayawada",
    "Guntur & Mangalagiri",
    "Vizag",
    "Vizianagaram",
    "Kurnool",
    "Eluru",
    "Tadepalligudem",
    "Bhimavaram",
    "Tanuku",
    "Anantapur",
    "Rajahmundry",
    "Machilipatnam",
    "Gudivada",
    "Nellore",
    "Tirupati",
    "Kakinada",
    "Ongole",
    "Kadapa",
  ],
};

const CitySection = ({ title, cities }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? cities : cities.slice(0, 8);

  return (
    <div style={styles.section}>
      <h2 style={styles.stateTitle}>{title}</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={5}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {visibleCities.map((city, index) => (
          <SwiperSlide key={index}>
            <div className="city-card" style={styles.card}>
              <MapPin className="location-icon" size={14} strokeWidth={2} />
              <span>{city}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {cities.length > 8 && (
        <div
          className="city-card show-more"
          style={{
            ...styles.card,
            width: "180px",
            margin: "20px auto 0",
            justifyContent: "center",
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less ▲" : "Show More ▼"}
        </div>
      )}
    </div>
  );
};

export default function Cities() {
  return (
    <section style={styles.container}>
      <h1 className="main-heading">OUR BRANCHES</h1>

      {Object.entries(cityData).map(([state, cities]) => (
        <CitySection key={state} title={state} cities={cities} />
      ))}
    </section>
  );
}

const styles = {
  container: {
    background: "#192A5F",
    color: "#fff",
    padding: "20px 5%",
    minHeight: "100vh",
  },

  section: {
    marginBottom: "28px",
  },

  stateTitle: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
    gap: "10px",
  },

  card: {
    background: "#fff",
    color: "#192A5F",
    height: "42px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
    transition: ".3s",
    boxShadow: "0 3px 8px rgba(0,0,0,.15)",
  },

  
};