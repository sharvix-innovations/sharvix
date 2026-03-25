import { Link } from "react-router-dom";
import Dodecahedron from "../../common/Dodecahedron";
import ArrowSVG from "../../common/ArrowSVG";

const CoreValuesSection = () => {
  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1" style={{top:"300px",right:"-100px",opacity:0.2}}>
            <Dodecahedron/>
          </div>
          <div className="mil-animation" style={{top:"-60px",left:"150px",opacity:0.2}}>
            <Dodecahedron/>
          </div>
        </div>
        <div className="container mil-p-120-0">
          <div className="mil-mb-120">
            <div className="row">
              <div className="col-lg-10">
                <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                  These principles guide every decision we make <br/>and every solution we deliver.
                </span>
              </div>
            </div>
            <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
              <span className="mil-text-image">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=250&h=80&fit=crop" alt="innovation"/>
              </span>
              <h2 className="mil-h1 mil-muted mil-center">What <span className="mil-thin">Drives</span></h2>
            </div>
            <div className="mil-complex-text justify-content-center mil-up">
              <h2 className="mil-h1 mil-muted mil-center">Our <span className="mil-thin">Values.</span></h2>
              <Link to="/contact" className="mil-button" style={{marginLeft:"30px"}}>
                <span>Work with us</span>
                <ArrowSVG/>
              </Link>
            </div>
          </div>
          <div className="row mil-services-grid" style={{margin:0}}>
            {[
              {title:"Client-Centric",  desc:"Your success is our priority. We build lasting partnerships through transparency and dedication."},
              {title:"Innovation",       desc:"We embrace cutting-edge technologies and creative solutions to stay ahead of the curve."},
              {title:"Integrity",        desc:"Honest communication, ethical practices, and accountability in everything we do."},
              {title:"Excellence",       desc:"We set high standards and continuously improve to deliver exceptional quality."},
            ].map((v,i)=>(
              <div className="col-md-6 col-lg-3 mil-services-grid-item" style={{padding:0}} key={i}>
                <Link to="/about" className="mil-service-card-sm mil-up">
                  <h5 className="mil-muted mil-mb-30">{v.title}</h5>
                  <p className="mil-light-soft mil-mb-30">{v.desc}</p>
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

export default CoreValuesSection;
