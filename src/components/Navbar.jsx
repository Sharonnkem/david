import { Link, useLocation } from "react-router-dom";
import Ellipse from "../svg/Ellipse.svg";
import "./navbar.css";

function Navbar() {
  const location = useLocation(); 

  return (
    <nav>
      <div>
        <h1>
          <Link to="/">David</Link>
          <img src={Ellipse} alt="Ellipse" />
        </h1>
      </div>

      <div>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/pictures"
              className={location.pathname === "/pictures" ? "active" : ""}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

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

    </nav>
  );
}

export default Navbar;
