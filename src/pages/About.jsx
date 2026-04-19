import InnerBanner from "../components/common/InnerBanner";
import AboutSection from "../components/sections/About/AboutSection";
import CoreValuesSection from "../components/sections/About/CoreValuesSection";
import MissionVisionSection from "../components/sections/About/MissionVisionSection";
import WhyUsSection from "../components/sections/About/WhyUsSection";
import CTASection from "../components/sections/About/CTASection";
import SEO from "../components/common/SEO";

const bannerData = {
  titleLine1: "Sharvix",
  titleLine1Thin: "Innovations",
  titleLine2: "Building Intelligent",
  titleLine2Thin: "Digital Solutions",
  breadcrumbs: [
    { label: "Homepage", link: "/" },
    { label: "About Us", link: "/about" },
  ],
};

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sharvix Innovations",
    "url": "https://sharvixinnovations.com/about",
    "logo": "https://sharvixinnovations.com/logo.png",
    "description": "Sharvix Innovations is a tech company building intelligent, scalable digital products. We partner with brands to create meaningful digital solutions.",
    "foundingDate": "2020",
    "areaServed": "Worldwide",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "telephone": "+91-84830-22829",
      "email": "sharvixinnovations@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vinayak Apartments, Prabhat Road, Lane No. 11, Erandwane",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411004",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn more about Sharvix Innovations, our mission, vision, and core values. We don't just build software — we build partnerships."
        url="https://sharvixinnovations.com/about"
        schema={aboutSchema}
      />
      {/* 1 — Inner Banner */}
      <InnerBanner {...bannerData} />

      {/* 2 — About (homepage about pattern) */}
      <AboutSection />

      {/* 3 — Core Values (dark services grid pattern) */}
      <CoreValuesSection />

      {/* 4 — Team (homepage team pattern) */}
      {/* <TeamSection /> */}

      {/* 5 — Mission & Vision (soft bg, reviews slider pattern) */}
      <MissionVisionSection />

      {/* 6 — Why Choose Us (dark, "unique ideas" pattern) */}
      <WhyUsSection />

      {/* 7 — CTA (soft bg) */}
      <CTASection />
    </>
  );
}
