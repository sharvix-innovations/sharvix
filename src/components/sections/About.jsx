const About = () => (
  <section id="about">
    <div className="container-inner mil-p-120-30">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 col-xl-5">
          <div className="mil-mb-90">
            <h2 className="mil-mb-60">
              About <br />
              <span className="mil-thin">Sharvix Innovations</span>
            </h2>
            <p className="mil-mb-30">
              We create intelligent digital products by combining full-stack
              development, clean UI/UX, and AI-driven automation — built for
              performance, scalability, and long-term growth.
            </p>

            <p className="mil-mb-30">
              <strong style={{color:"#021350"}}>Our Mission:</strong> To empower businesses and startups by building
              intelligent, scalable, and user-centric digital products that
              solve real problems and drive sustainable growth through
              technology, automation, and innovation.
            </p>

            <p className="mil-mb-60">
              <strong style={{color:"#021350"}}>Our Vision:</strong> To become a trusted technology and innovation
              partner for businesses worldwide — known for clarity in thinking,
              excellence in execution, and future-ready digital solutions.
            </p>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="mil-about-photo mil-mb-90">
            <div className="mil-img-frame" style={{paddingBottom:"160%"}}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=900&fit=crop" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
