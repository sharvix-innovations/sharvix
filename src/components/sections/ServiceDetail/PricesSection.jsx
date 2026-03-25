import { Link } from "react-router-dom";
import ArrowSVG from "../../common/ArrowSVG";

const PricesSection = ({ titleLight, titleThin1, titleThin2, subtitle, plans }) => (
  <section className="mil-dark-bg">
    <div className="mi-invert-fix">
      <div className="container mil-p-120-120">
        <div className="mil-center">
          <h2 className="mil-muted mil-up mil-mb-30">
            {titleLight} <span className="mil-thin">{titleThin1}</span> <br/>
            for innovative <span className="mil-thin">{titleThin2}</span>
          </h2>
          <p className="mil-light-soft mil-up mil-mb-120">
            {subtitle}
          </p>
        </div>

        {plans.map((plan, i) => (
          <Link
            key={i}
            to="/contact"
            className={`mil-price-card mil-choose mil-accent-cursor mil-up${plan.last ? " mil-mb-60" : ""}`}
          >
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="mil-price-number mil-mb-30">
                  <span className="mil-muted mil-thin">$</span>
                  <span className="mil-accent">{plan.price}</span>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="mil-muted mil-mb-30" dangerouslySetInnerHTML={{ __html: plan.title }} />
              </div>
              <div className="col-lg-4">
                <p className="mil-light-soft mil-mb-30">{plan.description}</p>
              </div>
              <div className="col-lg-2">
                <div className="mil-adaptive-right mil-mb-30">
                  <div className="mil-button mil-icon-button-sm mil-arrow-place">
                    <ArrowSVG />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        <div className="mil-center">
          <Link to="/contact" className="mil-button mil-arrow-place">
            <span>individual solution</span>
            <ArrowSVG />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default PricesSection;
