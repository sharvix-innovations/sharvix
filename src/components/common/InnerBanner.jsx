import { Link } from "react-router-dom";
import ArrowSVG from "./ArrowSVG";
import Dodecahedron from "../sections/Dodecahedron";

const InnerBanner = ({ titleLine1, titleLine1Thin, titleLine2, titleLine2Thin, breadcrumbs }) => (
  <div className="mil-inner-banner" id="top">
    <div className="mil-animation-frame">
      <div className="mil-animation mil-position-4 mil-dark">
        <Dodecahedron />
      </div>
    </div>
    <div className="mil-banner-content mil-up">
      <div className="container">
        <ul className="mil-breadcrumbs mil-mb-60">
          {breadcrumbs?.map((crumb, index) => (
  <li key={index}>
    <Link to={crumb.link}>{crumb.label}</Link>
  </li>
))}
        </ul>
        <h1 className="mil-mb-60">
          {titleLine1} <span className="mil-thin">{titleLine1Thin}</span><br />
          {titleLine2} <span className="mil-thin">{titleLine2Thin}</span>
        </h1>
        <a href="#service" className="mil-link mil-dark mil-arrow-place mil-down-arrow">
          <span>About Us</span>
          <ArrowSVG />
        </a>
      </div>
    </div>
  </div>
);

export default InnerBanner;
