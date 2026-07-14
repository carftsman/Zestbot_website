import React from "react";
const Button = ({ text, onClick }) => {
  return (
    <>
      <style>{`
        .common-btn {
          padding: 10px 24px;
          background: #ffffff;
          color: #1F2E63;
          border: none;
          border-radius: 18px;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .common-btn:hover {
          background: #FFD42A;
        }
      `}</style>

      <button className="common-btn" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;