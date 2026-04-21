const AboutSection = () => {
  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-mb-60">
                Discover <br/>Sharvix <span className="mil-thin">Innovations</span>
              </h2>
              <p className="mil-mb-30">
                Rooted in the Sanskrit word 'Sharv'—symbolizing power, wisdom, and sharp intellect—Sharvix Innovations operates as a dynamic freelancing entity dedicated to digital excellence. We specialize in robust full-stack development, seamlessly merging intuitive UI/UX design with secure, high-performance back-end architectures to create impactful web and mobile experiences.
              </p>
              <p className="mil-mb-30">
                Our approach centers on delivering comprehensive, end-to-end solutions tailored for startups, entrepreneurs, and scaling enterprises. By leveraging a versatile tech stack that includes React, Node.js, Python, Django, and PHP, we meticulously select the right tools for every unique challenge. Beyond traditional development, we actively integrate AI-driven intelligence, smart workflows, and advanced automation to elevate productivity and ensure your digital products are genuinely future-ready.
              </p>
              <p className="mil-mb-60">
                At Sharvix Innovations, the focus goes beyond just writing code; it's about solving real-world problems. Whether architecting a brand-new platform from the ground up or transforming legacy systems into modern powerhouses, we apply meticulous attention to detail and an unwavering commitment to quality to translate bold ideas into intelligent, powerful software that drives tangible value.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-img-frame" style={{paddingBottom:"160%"}}>
                <img
                  src="/img/about-page.webp"
                  alt="Sharvix Innovations - Discover Our Story"
                  width="600"
                  height="960"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
