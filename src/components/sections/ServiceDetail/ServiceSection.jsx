import { Link } from "react-router-dom";
import AccordionItem from "../../common/AccordionItem";
import ArrowSVG from "../../common/ArrowSVG";

const ServiceSection = ({ approachTitle, approachThin, approachText, accordions }) => (
  <section id="service">
    <div className="container mil-p-120-90 mt-12">
      <div className="row justify-content-between">
        {/* Left col — approach */}
        <div className="col-lg-4 mil-relative mil-mb-90">
          <h2 className="mil-up mil-mb-30 ">
            {approachTitle} <span className="mil-thin">{approachThin}</span> <br/>
            and <span className="mil-thin">Work Specifics</span>
          </h2>
          <p className="mil-up mil-mb-30">
            {approachText}
          </p>
          <div className="mil-up">
            <Link to="/projects" className="mil-link mil-dark mil-arrow-place">
              <span>View works</span>
              <ArrowSVG />
            </Link>
          </div>
        </div>

        {/* Right col — accordions */}
        <div className="col-lg-6">
          {accordions.map((acc, index) => (
            <AccordionItem key={index} title={acc.title}>
              {acc.content.map((p, i) => (
                <p key={i} className="mil-mb-30">{p}</p>
              ))}
            </AccordionItem>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServiceSection;
