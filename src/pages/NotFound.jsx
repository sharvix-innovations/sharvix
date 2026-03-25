import { Link } from "react-router-dom";
import Dodecahedron from "../components/common/Dodecahedron";
import ArrowSVG from "../components/common/ArrowSVG";

export default function NotFound() {
  return (
    <div className="mil-404-banner mil-dark-bg">

      {/* floating dodecahedron */}
      <div className="mil-animation-frame">
        <div
          className="mil-animation"
          style={{top:"-60px", right:"40%", opacity:0.2}}
        >
          <Dodecahedron/>
        </div>
      </div>

      <div className="mi-invert-fix mil-up">
        <div className="container">
          <div className="mil-404-frame">

            {/* glitch 404 number */}
            <div className="mil-scale-frame">
              <h1 className="mil-404" data-text="404">404</h1>
            </div>

            {/* subtitle */}
            <h4 className="mil-404-text mil-dark mil-mb-60">
              Oops! Something went wrong :(
            </h4>

            {/* back button */}
            <Link to="/" className="mil-button mil-arrow-place">
              <span>Back to homepage</span>
              <ArrowSVG/>
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
}
