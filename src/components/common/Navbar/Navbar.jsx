import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
} from "react-icons/fi";

import logo from "../../../assets/images/logo.png";
import "../../../styles/Navbar.css";

export default function Navbar() {

  const navigate = useNavigate();

  /* ===========================
      STATES
  =========================== */

  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

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

  /* ===========================
      DARK MODE
  =========================== */

  useEffect(() => {

    document.body.classList.toggle(
      "dark",
      darkMode
    );

  }, [darkMode]);

  return (

    <header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
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

          <NavLink
            to="/services"
          >
            Services
          </NavLink>

          <HashLink smooth to="/#contact">
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

  <motion.button
    className="theme-toggle"

    whileHover={{
      scale: 1.08,
      rotate: 180,
    }}

    whileTap={{
      scale: .92,
    }}

    onClick={() =>
      setDarkMode(!darkMode)
    }

  >

    <AnimatePresence mode="wait">

      {darkMode ? (

        <motion.div

          key="moon"

          initial={{
            opacity: 0,
            rotate: -90,
          }}

          animate={{
            opacity: 1,
            rotate: 0,
          }}

          exit={{
            opacity: 0,
            rotate: 90,
          }}

          transition={{
            duration: .25,
          }}

        >

          <FiMoon />

        </motion.div>

      ) : (

        <motion.div

          key="sun"

          initial={{
            opacity: 0,
            rotate: -90,
          }}

          animate={{
            opacity: 1,
            rotate: 0,
          }}

          exit={{
            opacity: 0,
            rotate: 90,
          }}

          transition={{
            duration: .25,
          }}

        >

          <FiSun />

        </motion.div>

      )}

    </AnimatePresence>

  </motion.button>

  {/* ======================
       MOBILE BUTTON
  ====================== */}

  <motion.button

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

      className="mobile-menu"

      initial={{
        opacity: 0,
        y: -25,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
        y: -25,
      }}

      transition={{
        duration: .30,
      }}

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