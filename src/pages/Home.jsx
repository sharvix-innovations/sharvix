import Banner from "../components/sections/Banner";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import OurClients from "../components/sections/OurClients";
import TechStack from "../components/sections/TechStack";
import Reviews from "../components/sections/Reviews";
import HowWeWork from "../components/sections/HowWeWork";
import HomeProjectsSlider from "../components/sections/Projects/HomeProjectsSlider";
import SEO from "../components/common/SEO";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sharvix Innovations",
    "url": "https://sharvix-innovations.netlify.app",
    "logo": "https://sharvix-innovations.netlify.app/logo.png",
    "description": "We build intelligent, scalable, and user-centric digital products that solve real problems.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210",
      "contactType": "Customer Service",
      "email": "info@sharvixinnovations.com"
    }
  };

  return (
    <>
      <SEO 
        title="Home"
        description="Sharvix Innovations is an intelligent tech partner helping growing brands build scalable digital products and automation solutions."
        url="https://sharvix-innovations.netlify.app/"
        schema={homeSchema}
      />
      <Banner />
      <About />
      <Services />
      
      {/* Featured Projects Slider */}

      {/* <Team /> */}
      <OurClients />
      <HomeProjectsSlider />
      <TechStack />
      <HowWeWork />
      <Reviews />
    </>
  );
}
