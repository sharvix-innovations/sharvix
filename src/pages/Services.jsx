import ArrowSVG from "../components/common/ArrowSVG";
import Dodecahedron from "../components/sections/Dodecahedron";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import SEO from "../components/common/SEO";

/* ---- Lines SVG ---- */
const LinesSVG = () => (
  <svg
    width="250"
    viewBox="0 0 300 1404"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mil-lines"
    style={{ pointerEvents: "none" }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
      className="mil-move"
      style={{ pointerEvents: "none" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
      className="mil-move"
      style={{ pointerEvents: "none" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
      style={{ pointerEvents: "none" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
      style={{ pointerEvents: "none" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
      className="mil-move"
      style={{ pointerEvents: "none" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M300 1175H0V1174H300V1175Z"
      className="mil-move"
      style={{ pointerEvents: "none" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
      className="mil-move"
      style={{ pointerEvents: "none" }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
      className="mil-move"
      style={{ pointerEvents: "none" }}
    />
  </svg>
);

/* ---- Service Card ---- */
const ServiceCard = ({ title, offset, description, list, link }) => (
  <div className="col-md-6 col-lg-6">
    <div
      className={`mil-service-card-lg mil-more mil-accent-cursor${offset ? " mil-offset" : ""}`}
      style={{ position: "relative", zIndex: 2 }}
    >
      <h4
        className="mil-muted mil-up mil-mb-30"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p className="mil-descr mil-light-soft mil-up mil-mb-30">
        {description}
      </p>

      <ul className="mil-service-list mil-light mil-mb-30">
        {list.map((item, index) => (
          <li className="mil-up" key={index}>
            {item}
          </li>
        ))}
      </ul>

      <Link
        to={link}
        className="mil-link mil-accent mil-arrow-place mil-up mt-4"
        style={{ position: "relative", zIndex: 5, pointerEvents: "auto" }}
      >
        <span>Read more</span>
        <ArrowSVG />
      </Link>
    </div>
  </div>
);
 
/* ---- Dark Section (Banner + Services) ---- */
const DarkSection = () => (
  <div className="mil-dark-bg">
    <div className="mil-inner-banner">
      <div className="mi-invert-fix">
        <div className="mil-banner-content mil-up">
          <div
            className="mil-animation mil-position-2 mil-scale"
            style={{ transform: "scale(2)", pointerEvents: "none" }}
          >
            <Dodecahedron />
          </div>

          <div className="container">
            <ul className="mil-breadcrumbs mil-light mil-mb-60">
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>

            <h1 className="mil-muted mil-mb-60 mt-12">
              Building <span className="mil-thin">Intelligent</span><br />
              Digital <span className="mil-thin">Products</span>
            </h1>

            <a
              href="#services"
              className="mil-link mil-accent mil-arrow-place mil-down-arrow"
              style={{ position: "relative", zIndex: 5 }}
            >
              <span>Our services</span>
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
    </div>

    <section id="services">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="mil-lines-place mil-light"
                style={{ pointerEvents: "none", position: "relative", zIndex: 1 }}
              >
                <LinesSVG />
              </div>
            </div>

            <div className="col-lg-7" style={{ position: "relative", zIndex: 2 }}>
              <div className="row">
                {servicesData.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    offset={index % 2 === 0}
                    description={service.description}
                    list={service.list}
                    link={`/services/${service.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

/* ---- Call to Action ---- */
const CallToAction = () => (
  <section className="mil-soft-bg">
    <div className="container mil-p-120-120">
      <div className="row">
        <div className="col-lg-10">
          <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
            Looking to scale your business? We'll help you turn <br />
            your ideas into a powerful digital solution.
          </span>
        </div>
      </div>

      <div className="mil-center">
        <h2 className="mil-up mil-mb-60">
          Let's build <span className="mil-thin">something</span><br />
          great <span className="mil-thin">together.</span>
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

/* ---- Hidden Elements ---- */
const HiddenElements = () => (
  <div className="mil-hidden-elements" style={{ display: "none" }}>
    <div style={{ pointerEvents: "none" }}>
      <Dodecahedron />
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="mil-arrow"
      style={{ pointerEvents: "none" }}
    >
      <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
    </svg>

    <LinesSVG />
  </div>
);

/* ---- Page ---- */
export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sharvix Innovations",
    "url": "https://sharvixinnovations.com/services",
    "description": "Professional software development and digital transformation services",
    "areaServed": "Worldwide",
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Offered",
      "itemListElement": servicesData.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Our Services"
        description="Explore Sharvix Innovations services: Product Strategy, Software & Product Development, UI/UX Design, AI & Automation, and Digital Marketing."
        url="https://sharvixinnovations.com/services"
        schema={servicesSchema}
      />
      <DarkSection />
      <CallToAction />
      <HiddenElements />
    </>
  );
}
