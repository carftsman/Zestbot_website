import { useState } from "react";
import "../../styles/Cities.css";
import { MapPin } from "lucide-react";
import company from "../../assets/images/partnerlogo.png";

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
 
      <div style={styles.grid}>
        {visibleCities.map((city, index) => (
          // <div key={index} className="city-card" style={styles.card}>
          //   <span className="location-icon">📍</span>
          //   <span>{city}</span>
          // </div>
          <div key={index} className="city-card" style={styles.card}>
            <MapPin className="location-icon" size={14} strokeWidth={2} />
            <span>{city}</span>
          </div>
 
        ))}
 
        {cities.length > 8 && (
          <div
            className="city-card show-more"
            style={styles.card}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ▲" : "Show More ▼"}
          </div>
        )}
      </div>
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
  <div className="partner-wrapper">
  <div className="partner-content">
    <p className="partner-title">OUR GROWTH PARTNER</p>
 
    <img
      src={company}
      alt="Exelus InfoTech"
      className="partner-logo"
    />
  </div>
</div>
    </section>
 
  );
}
 
const styles = {
  container: {
    background: "#192A5F",
    color: "#ffff",
    padding: "20px",
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
    gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
    gap: "12px",
  },
 
  card: {
    background: "#fff",
    color: "#192A5F",
    height: "50px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: ".3s",
    boxShadow: "0 4px 10px rgba(0,0,0,.15)",
  },
 
  partnerSection: {
  marginTop: "80px",
  paddingBottom: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
},
 
partnerTag: {
  color: "#FDB515",
  fontSize: "20px",
  fontWeight: "700",
  letterSpacing: "1px",
  marginBottom: "30px",
  textAlign: "center",
},
 
partnerLogo: {
  width: "180px",
  height: "auto",
  background: "#fff",
  padding: "12px 18px",
  borderRadius: "10px",
  boxShadow: "0 8px 20px rgba(0,0,0,.15)",
},
 
partnerName: {
  fontSize: "24px",
  fontWeight: "700",
  color: "#fff",
  marginBottom: "20px",
},
 
partnerButton: {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "#FDB515",
  color: "#192A5F",
  border: "none",
  padding: "12px 24px",
  borderRadius: "30px",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "700",
  transition: "0.3s",
},
 
};
 
 