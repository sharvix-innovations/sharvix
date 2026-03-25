const AboutSection = () => {
  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-xl-5">
            <div className="mil-mb-90">
              <h2 className="mil-mb-60">
                Discover <br/>Our <span className="mil-thin">Studio</span>
              </h2>
              <p className="mil-mb-30">
                We are an intelligent tech partner passionate about transforming businesses through technology. Founded with a vision to build scalable digital products, we've grown into a trusted technology partner for growing brands worldwide.
              </p>
              <p className="mil-mb-30">
                Our team of full-stack developers, UI/UX designers, and AI experts work collaboratively to deliver solutions that are not only visually stunning but also technically robust. We believe in building secure, future-ready systems.
              </p>
              <p className="mil-mb-60">
                From fast-growing startups to enterprise clients, we help organizations navigate digital transformation heavily utilizing modern web architectures and AI-driven automation capabilities.
              </p>
              <div className="mil-about-quote">
                <div className="mil-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                    alt="Founder"
                  />
                </div>
                <h6 className="mil-quote">
                  Building intelligent, user-centric <span className="mil-thin">digital products</span> that solve real business problems.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-img-frame" style={{paddingBottom:"160%"}}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=900&fit=crop"
                  alt="Sharvix team"
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
