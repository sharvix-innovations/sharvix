import { Link } from "react-router-dom";
import ArrowSVG from "../../common/ArrowSVG";

const WhyUsSection = () => {
  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  We don't just build software — <br/>we build partnerships that drive real business outcomes.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <h2 className="mil-h1 mil-muted mil-center">Why <span className="mil-thin">Businesses</span></h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">Choose <span className="mil-thin">Sharvix.</span></h2>
              <Link to="/contact" className="mil-button" style={{marginLeft:"30px", pointerEvents: 'auto'}}>
                <span>Start a project</span>
                <ArrowSVG/>
              </Link>
            </div>
          </div>
          <div className="row mil-services-grid" style={{margin:0}}>
            {[
              {stat:"10+", title:"Projects\nDelivered",   desc:"Successful projects delivered across various industries with scalable architectures."},
              {stat:"98%",  title:"On-Time\nDelivery",       desc:"Consistent track record of delivering high-quality solutions on schedule."},
              {stat:"2+",  title:"Years of\nExperience",    desc:"Skilled professionals with deep expertise in full-stack and modern tech."},
              {stat:"100%", title:"Client\nSatisfaction",   desc:"Focus on building long-term sustainable technology partnerships."},
            ].map((item,i)=>(
              <div className="col-md-6 col-lg-3 mil-services-grid-item" style={{padding:0}} key={i}>
                <Link to="/contact" className="mil-service-card-sm mil-up" style={{pointerEvents: 'auto'}}>
                  <h2 className="mil-accent mil-mb-15" style={{fontSize:"48px",fontWeight:"700",lineHeight:"100%"}}>{item.stat}</h2>
                  <h5 className="mil-muted mil-mb-30" style={{whiteSpace:"pre-line"}}>{item.title}</h5>
                  <p className="mil-light-soft mil-mb-30">{item.desc}</p>
                  <div className="mil-button mil-icon-button-sm"><ArrowSVG/></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
