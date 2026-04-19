import InnerBanner from "../components/common/InnerBanner";
import PortfolioSection from "../components/sections/Projects/PortfolioSection";
import ArrowSVG from "../components/common/ArrowSVG";
import projectsData from "../data/projectsData";
import { Link } from "react-router-dom";

const bannerData = {
  titleLine1: "Showcasing Our",
  titleLine1Thin: "",
  titleLine2: "Digital",
  titleLine2Thin: "Excellence",
  breadcrumbs: [
    { label: "Homepage", link: "/" },
    { label: "Portfolio", link: "/projects" },
  ],
};

const CallToAction = () => (
  <section className="mil-soft-bg">
    <div className="container mil-p-120-120">
      <div className="row">
        <div className="col-lg-10">
          <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
            Looking to scale your business? We'll help you turn <br/>
            your ideas into a powerful digital solution.
          </span>
        </div>
      </div>
      <div className="mil-center">
        <h2 className="mil-up mil-mb-60">
          Ready to bring your <span className="mil-thin">vision to</span> life? <br/>
          We're <span className="mil-thin">here to help.</span>
        </h2>
        <div className="mil-up">
          <Link to="/contact" className="mil-button mil-arrow-place" style={{pointerEvents: 'auto'}}>
            <span>Start a Project</span>
            <ArrowSVG />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

import SEO from "../components/common/SEO";

export default function Projects() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Portfolio",
    "description": "Portfolio of digital projects and successful case studies from Sharvix Innovations",
    "url": "https://sharvixinnovations.com/projects",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sharvix Innovations",
      "url": "https://sharvixinnovations.com",
      "project": projectsData.map(project => ({
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": `/projects/${project.id}`
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Our Portfolio"
        description="View our latest projects and success stories. We've built highly scalable solutions for brands worldwide."
        url="https://sharvixinnovations.com/projects"
        schema={projectsSchema}
      />
      <InnerBanner {...bannerData} />
      <PortfolioSection works={projectsData} />
      <CallToAction />
    </>
  );
}
