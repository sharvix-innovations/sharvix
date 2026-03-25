import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowSVG from "../../common/ArrowSVG";

const OtherProjectsSlider = ({ projects }) => {
  const [current, setCurrent] = useState(0);

  if (!projects || projects.length === 0) return null;

  const prevSlide = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % projects.length);
  };

  const activeProject = projects[current];

  return (
    <section className="mil-p-120-90">
      <div className="container">
        <div className="row align-items-center mil-mb-30">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">Explore more</h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <div className="mil-slider-nav mil-dark">
                <div className="mil-slider-arrow mil-prev" onClick={prevSlide} style={{ cursor: 'pointer', display: 'inline-flex', marginRight: '10px' }}>
                  <ArrowSVG />
                </div>
                <div className="mil-slider-arrow" onClick={nextSlide} style={{ cursor: 'pointer', display: 'inline-flex' }}>
                  <ArrowSVG />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Link to={`/projects/${activeProject.id}`} className="mil-service-card-lg mil-other-card mil-more mil-mb-30 mil-up" style={{ display: 'block' }}>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30" style={{ paddingBottom: "56.25%", position: "relative", height: 0, overflow: "hidden", borderRadius: "10px" }}>
                    <img 
                      src={activeProject.img} 
                      alt={activeProject.title} 
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="mil-mb-30">{activeProject.title}</h4>
                  <p className="mil-descr mil-mb-30">{activeProject.description.substring(0, 150)}...</p>
                  <ul className="mil-service-list mil-dark mil-mb-30">
                    <li className="mil-up">{activeProject.category}</li>
                    <li className="mil-up">{activeProject.client}</li>
                  </ul>
                  <div className="mil-link mil-dark mil-arrow-place mil-up">
                    <span>Read more</span>
                    <ArrowSVG />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProjectsSlider;
