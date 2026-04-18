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
              Sharvix Innovations is a freelancing identity built on the foundation of strength, brilliance, and clear thinking inspired by the Sanskrit word Sharv, which reflects power, wisdom, and sharp intellect. With a strong focus on full-stack development, the work spans across modern web and mobile technologies, combining clean UI/UX with solid back-end architecture.
            </p>

            <p className="mil-mb-30">
              Sharvix Innovations offers end-to-end digital solutions — helping individuals, startups, and growing businesses build scalable, user-friendly, and future-ready products. The stack includes technologies like React, Node.js, Django, Python, PHP, and more always chosen to match the project’s specific needs. Alongside core development, I also integrate automation tools, AI-driven features, and smart workflows to enhance performance, simplify operations, and future-proof the product.
            </p>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="mil-about-photo mil-mb-90">
            <div className="mil-img-frame" style={{paddingBottom:"160%"}}>
              <img src="/img/about-home.png" alt="Sharvix Innovations - Digital Solutions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
