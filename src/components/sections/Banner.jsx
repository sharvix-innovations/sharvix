import { Link } from "react-router-dom";
import ArrowSVG from "../common/ArrowSVG";
import Dodecahedron from "./Dodecahedron";

const Banner = () => (
  <section className="mil-banner mil-dark-bg" id="top">
    <div className="mi-invert-fix" style={{height:"100%"}}>
      <div className="mil-animation-frame">
        <div className="mil-animation mil-position-1 mil-scale" style={{transform:"scale(3.6)"}}><Dodecahedron/></div>
      </div>
      
      <div className="container-inner banner-container">
        <div className="mil-banner-content">
          <h1 className="mil-muted mil-mb-60">Turning Ideas <span className="mil-thin">Into Powerful</span><br/> Digital <span className="mil-thin">Products</span></h1>
          <div className="row">
            <div className="col-md-7 col-lg-5">
              <p className="mil-light-soft mil-mb-60">We design, build, and scale intelligent software solutions using modern technologies, automation, and AI — aligned perfectly with your business goals.</p>
            </div>
          </div>
          <Link to="/services" className="mil-button mil-btn-space">
            <span>What we do</span>
            <ArrowSVG />
          </Link>
          <Link to="/projects" className="mil-link mil-muted">
            <span>View works</span>
            <ArrowSVG style={{background:"rgba(255,255,255,0.1)",borderRadius:"50%",padding:"10px",width:"40px",height:"40px"}} />
          </Link>
          <div className="mil-circle-text">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="mil-ct-svg mil-rotate">
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0" />
              </defs>
              <circle cx="150" cy="100" r="75" fill="none" />
              <g><use href="#circlePath" fill="none" /><text style={{letterSpacing:"6.5px"}}><textPath href="#circlePath">Scroll down - Scroll down - </textPath></text></g>
            </svg>
            <a href="#about" className="mil-button mil-icon-button-sm mil-arrow-down">
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
