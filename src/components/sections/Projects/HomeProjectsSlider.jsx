import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowSVG from "../../common/ArrowSVG";
import projectsData from "../../../data/projectsData";

const HomeProjectsSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + projectsData.length) % projectsData.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % projectsData.length);
  };

  const activeProject = projectsData[current];

  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix mil-p-120-120">
      <div className="container">
        <div className="row justify-content-between align-items-center mil-mb-90">
          <div className="col-lg-6">
            <span className="mil-suptitle mil-light-soft mil-mb-30">Our Latest Work</span>
            <h2 className="mil-h1 mil-muted mil-up ">Featured <span className="mil-thin">Projects</span></h2>
          </div>
          <div className="col-lg-4 mil-mt-60-adapt">
            <div className="mil-slider-nav mil-light" style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '45px' }}>
              <div 
                className="mil-slider-arrow mil-prev" 
                onClick={prevSlide}
                role="button"
                aria-label="Previous project"
                style={{ 
                  cursor: 'pointer', 
                  backgroundColor: '#ffffffff', 
                  color: '#000',
                  pointerEvents: 'auto',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fill: '#000'
                }}
              >
                <ArrowSVG style={{ width: '20px', fill: '#000' }} />
              </div>
              <div 
                className="mil-slider-arrow" 
                onClick={nextSlide}
                role="button"
                aria-label="Next project"
                style={{ 
                  cursor: 'pointer', 
                  backgroundColor: '#ffffffff', 
                  color: '#000',
                  pointerEvents: 'auto',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fill: '#000'
                }}
              >
                <ArrowSVG style={{ width: '20px', fill: '#000' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="mil-slider-content mil-light">
              <h3 className="mil-muted mil-mb-30">{activeProject.title}</h3>
              <p className="mil-light-soft mil-mb-30">{activeProject.description}</p>
              <ul className="mil-service-list mil-light mil-mb-60">
                <li className="mil-up">{activeProject.category}</li>
                <li className="mil-up">{activeProject.client}</li>
              </ul>
              <Link to={`/projects/${activeProject.id}`} className="mil-button mil-arrow-place mil-up mt-12" style={{ pointerEvents: 'auto' }}>
                <span>View Project</span>
                <ArrowSVG />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <iframe src={activeProject.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: "100%", borderRadius: "10px", transition: "all 0.4s ease", aspectRatio: "1" }} ></iframe>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeProjectsSlider;
