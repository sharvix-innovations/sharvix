import { Link } from "react-router-dom";
import ContactSection from "../components/sections/Contact/ContactSection";
import LocationsSection from "../components/sections/Contact/LocationsSection";
import MapSection from "../components/sections/Contact/MapSection";
import Dodecahedron from "../components/sections/Dodecahedron";
import ArrowSVG from "../components/common/ArrowSVG";


const DarkSection = () => (
  <div className="mil-dark-bg">
    <div className="mil-inner-banner">
      <div className="mi-invert-fix">
        <div className="mil-banner-content mil-up">
          <div
            className="mil-animation mil-position-2 mil-scale"
            style={{ transform: "scale(3)", pointerEvents: "none" }}
          >
            <Dodecahedron />
          </div>

          <div className="container">
            <ul className="mil-breadcrumbs mil-light mil-mb-60">
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            <h1 className="mil-muted mil-mb-60 mt-12">
              Let's <span className="mil-thin">Start</span><br />
              <span className="mil-thin">Conversation</span>
            </h1>

            <a
              href="#services"
              className="mil-link mil-accent mil-arrow-place mil-down-arrow"
              style={{ position: "relative", zIndex: 5 }}
            >
              <span>Let's Start Conversation</span>
              <ArrowSVG />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>

    {/* 2. Contact Form + Info */}
      <ContactSection />
    </div>
  </div>
);

import SEO from "../components/common/SEO";

const ConatctUs = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sharvix Innovations",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "telephone": "+91-9876543210",
    "email": "info@sharvixinnovations.com",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "url": "https://sharvix-innovations.netlify.app/contact"
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Sharvix Innovations. We're ready to help turn your ideas into a powerful digital solution."
        url="https://sharvix-innovations.netlify.app/contact"
        schema={contactSchema}
      />
      <DarkSection />
      <LocationsSection />
      <MapSection />
    </>
  );
};

export default ConatctUs;
