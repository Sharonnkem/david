import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Ellipse from "../svg/Ellipse.svg";
import open from "../svg/open.svg";
import close from "../svg/close.svg";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link to="/" onClick={handleLinkClick}>David</Link>
          <img src={Ellipse} alt="Ellipse" />
        </h1>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link 
              to="/" 
              className={location.pathname === "/" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={location.pathname === "/resume" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/pictures" 
              className={location.pathname === "/pictures" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/project" 
              className={location.pathname === "/project" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="dav2">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? close : open} alt="Menu Toggle" />
        </button>
        <div className="cv">
          <a 
            href="https://drive.google.com/file/d/12pQsnovZ_a_6TnSAv04pC4S0QQnEA94T/view"
            download="David_CV.pdf"
            className="cv2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>CV</p>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
