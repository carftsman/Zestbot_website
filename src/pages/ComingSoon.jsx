import { useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F7F7FA",
      }}
    >
      <h1
        style={{
          color: "#192A5F",
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Coming Soon 🚀
      </h1>

      <p
        style={{
          color: "#555",
          fontSize: "18px",
          marginBottom: "35px",
        }}
      >
        The Delivery Partner App will be available soon.
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          background: "#F2B705",
          color: "#192A5F",
          border: "none",
          padding: "14px 28px",
          borderRadius: "50px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
}