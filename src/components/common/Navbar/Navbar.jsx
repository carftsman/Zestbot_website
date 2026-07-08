import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../../assets/images/logo.png"
import { HashLink } from "react-router-hash-link";

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
  height:80px;
  background:#192A5F;
  position:sticky;
  top:0;
  z-index:1000;
  display:flex;
  align-items:center;
}

.navbar-container{
  width:90%;
  max-width:1400px;
  margin:0 auto;
  position:relative;
  display:flex;
  align-items:center;
}

/* Logo */

.logo{
  cursor:pointer;
  display:flex;
  align-items:center;
  z-index:10;
}

.logo img{
  width:170px;
  display:block;
}

/* Navigation */

.nav-links{
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  align-items:center;
  gap:60px;
}

.nav-links a{
  text-decoration:none;
  color:#ffffff;
  font-size:22px;
  font-weight:500;
  transition:.3s ease;
}

.nav-links a:hover{
  color:#FFD42A;
}

.nav-links a.active{
  color:#FFD42A;
}

/* ===========================
   Laptop
=========================== */

@media(max-width:1200px){

  .navbar-container{
    width:94%;
  }

  .logo img{
    width:150px;
  }

  .nav-links{
    gap:45px;
  }

  .nav-links a{
    font-size:20px;
  }

}

/* ===========================
   Tablet
=========================== */

@media(max-width:992px){

  .navbar{
    height:75px;
  }

  .logo img{
    width:140px;
  }

  .nav-links{
    gap:30px;
  }

  .nav-links a{
    font-size:18px;
  }

}

/* ===========================
   Mobile
=========================== */

@media(max-width:768px){

  .navbar{
    height:70px;
  }

  .navbar-container{
    width:92%;
    justify-content:space-between;
  }

  .logo img{
    width:130px;
  }

  .nav-links{
    display:none;
  }

}

/* ===========================
   Small Mobile
=========================== */

@media(max-width:480px){

  .logo img{
    width:115px;
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
            <HashLink smooth to="/#contact">
              ContactUs
            </HashLink>

          </nav>

          {/* Contact Button */}

          

        </div>
      </header>
    </>
  );
};

export default Navbar;