import { useParams, Navigate, Link } from "react-router-dom";
import projectsData from "../data/projectsData";
import InnerBanner from "../components/common/InnerBanner";
import ArrowSVG from "../components/common/ArrowSVG";
import OtherProjectsSlider from "../components/sections/Projects/OtherProjectsSlider";
import SEO from "../components/common/SEO";

export default function ProjectDetail() {
  const { projectId } = useParams();
  
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/404" />;
  }

  const bannerData = {
    titleLine1: project.title,
    titleLine1Thin: "",
    titleLine2: project.category,
    titleLine2Thin: "Project",
    breadcrumbs: [
      { label: "Homepage", link: "/" },
      { label: "Portfolio", link: "/projects" },
      { label: "Project", link: "#." },
    ],
  };

  const otherProjects = projectsData.filter(p => p.id !== projectId).slice(0, 3);

  return (
    <>
      <SEO 
        title={`${project.title} - ${project.category}`}
        description={`Read the case study for ${project.title}, a ${project.category} built by Sharvix Innovations.`}
        url={`https://sharvix-innovations.netlify.app/projects/${projectId}`}
        image={project.image}
        type="article"
      />
      <InnerBanner {...bannerData} />
      
      {/* Main Details + Live Web View */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="mil-mb-90">
            <h2 className="mil-up mil-mb-30">{project.title}</h2>
            <div className="row">
              <div className="col-lg-8">
                <p className="mil-up mil-mb-30 mil-text-lg">
                  {project.description}
                </p>
                <div className="mil-up mil-mb-30">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="mil-button mil-arrow-place">
                    <span>Visit Live Website</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="mil-service-list mil-dark mil-mb-30 mil-up">
                  <li><strong>Client:</strong> <br/> {project.client}</li>
                  <li><strong>Category:</strong> <br/> {project.category}</li>
                  <li><strong>Tech Stack:</strong> <br/> {project.tags.join(", ")}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mil-image-frame mil-horizontal mil-up mil-mb-90" style={{ paddingBottom: "56.25%", position: "relative", height: 0, overflow: "hidden", borderRadius: "10px" }}>
            <iframe 
              src={project.url} 
              title={project.title} 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <OtherProjectsSlider projects={otherProjects} />
    </>
  );
}
