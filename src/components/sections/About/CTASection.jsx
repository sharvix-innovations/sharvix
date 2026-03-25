import { Link } from "react-router-dom";
import ArrowSVG from "../../common/ArrowSVG";

const CTASection = () => {
  return (
    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Ready to transform your business with <br/>cutting-edge digital solutions?
            </span>
          </div>
        </div>
        <div className="mil-center">
          <h2 className="mil-up mil-mb-60">
            Let's build <span className="mil-thin">something</span><br/>
            great <span className="mil-thin">together</span>
          </h2>
          <div className="mil-up">
            <Link to="/contact" className="mil-button">
              <span>Contact us</span>
              <ArrowSVG/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
