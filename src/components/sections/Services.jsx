import ArrowSVG from "../common/ArrowSVG";
import Dodecahedron from "./Dodecahedron";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

const Services = () => (
  <section className="mil-dark-bg">
    <div className="mi-invert-fix">
      <div className="mil-animation-frame">
        <div className="mil-animation mil-position-1 mil-scale" style={{top:"300px",right:"-100px",transform:"scale(2.4)"}}><Dodecahedron/></div>
        <div className="mil-animation mil-position-2 mil-scale" style={{left:"150px",transform:"scale(2)"}}><Dodecahedron/></div>
      </div>
      <div className="container-inner mil-p-120-0">
        <div className="mil-mb-120">
          <div className="row">
            <div className="col-lg-10">
              <span className="mil-suptitle mil-light-soft mil-suptitle-right">Professionals focused on helping your brand<br/> grow and move forward.</span>
            </div>
          </div>
          <div className="mil-complex-text justify-content-center mil-mb-15">
            <span className="mil-text-image">
              <img src="/img/innovation-accent.webp" alt="Sharvix team collaborating" width="250" height="80" loading="lazy" decoding="async"/>
            </span>
            <h2 className="mil-h1 mil-muted mil-center">Unique <span className="mil-thin">Ideas</span></h2>
          </div>
          <div className="mil-complex-text justify-content-center">
            <h2 className="mil-h1 mil-muted mil-center">For Your <span className="mil-thin">Business.</span></h2>
            <Link to="/services" className="mil-button" style={{marginLeft:"30px"}}>
              <span>What we do</span>
              <ArrowSVG />
            </Link>
          </div>
        </div>
        <div className="row mil-services-grid mt-2">
          {servicesData.map((s, i) => (
            <div className="col-md-6 col-lg-3 mil-services-grid-item p-0" key={i}>
              <Link to={`/services/${s.id}`} className="mil-service-card-sm mil-up">
                <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="mil-light-soft mil-mb-30">{s.description}</p>
                <div className="mil-button mil-icon-button-sm"><ArrowSVG/></div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
