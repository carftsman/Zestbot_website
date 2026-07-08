import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../../assets/images/logo.png"
 
const Navbar = () => {
  const navigate = useNavigate();
 
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }
 
        .navbar{
          width:100%;
          height:70px;
          background:#192a5f;
          display:flex;
          align-items:center;
          position:sticky;
          top:0;
          z-index:1000;
        }
 
        .navbar-container{
          width:90%;
          max-width:1400px;
          margin:auto;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
 
        .logo{
          cursor:pointer;
        }
 
        .logo img{
          width:147px;
          display:block;
        }
 
        .nav-links{
          display:flex;
          align-items:center;
          gap:50px;
        }
 
        .nav-links a{
          text-decoration:none;
          color:#fff;
          font-size:20px;
          font-weight:500;
          transition:.3s ease;
        }
 
        .nav-links a:hover{
          color:#FFD42A;
        }
 
        .nav-links a.active{
          color:#FFD42A;
        }
 
        /* Laptop */
 
        @media(max-width:1200px){
 
          .navbar-container{
            width:95%;
          }
 
          .nav-links{
            gap:35px;
          }
 
          .nav-links a{
            font-size:18px;
          }
 
          .logo img{
            width:130px;
          }
 
        }
 
        /* Tablet */
 
        @media(max-width:992px){
 
          .navbar{
            height:80px;
          }
 
          .nav-links{
            gap:25px;
          }
 
          .nav-links a{
            font-size:16px;
          }
 
          .logo img{
            width:120px;
          }
 
        }
 
        /* Mobile */
 
        @media(max-width:768px){
 
          .navbar{
            height:75px;
          }
 
          .navbar-container{
            width:92%;
          }
 
          .nav-links{
            display:none;
          }
 
        }
      `}</style>
 
      <header className="navbar">
        <div className="navbar-container">
 
          {/* Logo */}
          <div
            className="logo"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="ZestBot Logo" />
          </div>
 
          {/* Navigation */}
 
          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">Why Zestbot</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
          </nav>
 
          {/* Contact Button */}
 
          <Button
            text="Contact Us"
            onClick={() => navigate("/contact")}
          />
 
        </div>
      </header>
    </>
  );
};
 
export default Navbar;