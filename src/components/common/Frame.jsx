import ArrowSVG from "../common/ArrowSVG";
import { Link, NavLink } from "react-router-dom";
import allRoutes from "../../router/all_routes";

const Frame = ({ menuOpen, toggleMenu }) => (
  <div className="mil-frame">
    <div className="mil-frame-top">
      <Link to={allRoutes.home} className="mil-logo">
        <img src="/logo.png" alt="Logo" style={{ height: "42px" }} />
      </Link>
      <div className={`mil-menu-btn ${menuOpen ? 'mil-active' : ''}`} onClick={toggleMenu}><span /></div>
    </div>
    <div className="mil-frame-bottom">
      <div className="mil-current-page">Sharvix Innovations</div>
      <div className="mil-back-to-top">
        <a href="#top" className="mil-link mil-dark mil-arrow-place">
          <span>Back to top</span>
          <ArrowSVG />
        </a>
      </div>
    </div>
  </div>
);

export default Frame;
