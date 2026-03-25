import InnerBanner from "../components/common/InnerBanner";
import AboutSection from "../components/sections/About/AboutSection";
import CoreValuesSection from "../components/sections/About/CoreValuesSection";
import MissionVisionSection from "../components/sections/About/MissionVisionSection";
import WhyUsSection from "../components/sections/About/WhyUsSection";
import CTASection from "../components/sections/About/CTASection";
import SEO from "../components/common/SEO";

const bannerData = {
  titleLine1: "Building",
  titleLine1Thin: "Digital",
  titleLine2: "Excellence",
  titleLine2Thin: "Since 2015",
  breadcrumbs: [
    { label: "Homepage", link: "/" },
    { label: "About Us", link: "/about" },
  ],
};

export default function About() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn more about Sharvix Innovations, our mission, vision, and core values. We don't just build software — we build partnerships."
        url="https://sharvix-innovations.netlify.app/about"
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
