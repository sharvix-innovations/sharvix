import ArrowSVG from "../../common/ArrowSVG";
import { Link } from "react-router-dom";

const OtherServicesSection = ({ services }) => (
  <section>
    <div className="container mil-p-120-90">
      <div className="row align-items-center mil-mb-30">
        <div className="col-lg-6 mil-mb-30">
          <h3 className="mil-up">Other services</h3>
        </div>
        <div className="col-lg-6 mil-mb-30">
          <div className="mil-adaptive-right mil-up">
            <Link to="/services" className="mil-link mil-dark mil-arrow-place">
              <span>View all</span>
              <ArrowSVG />
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {services.map((svc, i) => (
          <div className="col-lg-4" key={i}>
            <Link to={svc.link || "#."} className="mil-service-card-lg mil-other-card mil-more mil-mb-30">
              <h4 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: svc.title }} />
              <p className="mil-descr mil-up mil-mb-30">
                {svc.description}
              </p>
              <ul className="mil-service-list mil-dark mil-mb-30">
                {svc.list.map((item, j) => (
                  <li key={j} className="mil-up">{item}</li>
                ))}
              </ul>
              <div className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Read more</span>
                <ArrowSVG />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OtherServicesSection;
