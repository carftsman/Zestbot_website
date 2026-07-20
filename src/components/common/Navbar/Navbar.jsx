import React, { useState, useEffect, useRef } from "react"; import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiMenu,
  FiX,
} from "react-icons/fi";

import logo from "../../../assets/images/logo.png";
import "../../../styles/Navbar.css";


const scrollWithOffset = (el) => {
  setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
};

export default function Navbar() {

  const navigate = useNavigate();

  /* ===========================
      STATES
  =========================== */

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);

  const isHome = location.pathname === "/";
  /* ===========================
      SCROLL EFFECT
  =========================== */

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target)
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenu]);

  return (

    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${!isHome ? "navbar-light" : ""}`}
    >

      <div className="navbar-container">

        {/* ======================
              LOGO
        ====================== */}

        <motion.div

          className="logo"

          onClick={() => navigate("/")}

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: .96,
          }}

        >

          {/* Logo Always Visible */}

          <motion.img

            src={logo}

            alt="ZestBot"

            initial={{
              opacity: 0,
              y: -15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: .5,
            }}

          />

        </motion.div>

        {/* ======================
              DESKTOP NAV
        ====================== */}

        <nav className="nav-links">

          <NavLink
            to="/"
            end
          >
            Home
          </NavLink>

          <HashLink
            smooth
            to="/#about"
            scroll={scrollWithOffset}
          >
            About Us
          </HashLink>

          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();

              if (location.pathname === "/services") {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              } else {
                navigate("/services");
              }
            }}
          >
            Services
          </a>

          <HashLink smooth to="/#contact" scroll={scrollWithOffset}>
            Contact
          </HashLink>

        </nav>

        {/* ======================
             RIGHT SECTION
        ====================== */}
        <div className="navbar-right">

          {/* ======================
        DARK MODE
  ====================== */}



          {/* ======================
       MOBILE BUTTON
  ====================== */}

          <motion.button
            ref={menuBtnRef}
            className="menu-btn"

            whileTap={{
              scale: .90,
            }}

            onClick={() =>
              setMobileMenu(!mobileMenu)
            }

          >

            {mobileMenu ? <FiX /> : <FiMenu />}

          </motion.button>

        </div>

        {/* ======================
      MOBILE MENU
====================== */}

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              ref={menuRef}
              className="mobile-menu"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.3 }}
            >

              <NavLink

                to="/"

                end

                onClick={() =>
                  setMobileMenu(false)
                }

              >

                Home

              </NavLink>

              <HashLink
                smooth
                to="/#about"
                scroll={scrollWithOffset}
                onClick={() => setMobileMenu(false)}
              >
                About Us
              </HashLink>



              <NavLink

                to="/services"

                onClick={() =>
                  setMobileMenu(false)
                }

              >

                Services

              </NavLink>

              <HashLink

                smooth

                to="/#contact"

                scroll={scrollWithOffset}

                onClick={() =>
                  setMobileMenu(false)
                }

              >

                Contact

              </HashLink>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </header>

  );
}







