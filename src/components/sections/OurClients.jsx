const clients = [
  { name: "Boosterio" },
  { name: "SEO Mind" },
  { name: "Tech Solutions" },
  { name: "Digital Pro" },
  { name: "Cloud Systems" },
  { name: "Data Corp" },
  { name: "Growth Line" },
  { name: "Spark Digital" },
];

const OurClients = () => (
  <section>
    <div className="container-inner mil-p-120-60">
      {/* Header */}
      <div className="row align-items-end mil-mb-60">
        <div className="col-lg-6 mil-mb-30">
          <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-mb-30">
            Trusted by growing brands
          </span>
          <h2>
            We Creating <span className="mil-thin">Solutions</span>
            <br />
            for Your <span className="mil-thin">Organization</span>
          </h2>
        </div>
        <div className="col-lg-5 mil-mb-30" style={{ marginLeft: "auto" }}>
          <p className="mil-mb-15" style={{ lineHeight: "170%" }}>
            We build scalable, secure, and high-performance digital solutions
            tailored for today's fast-changing business needs.
          </p>
          <p style={{ lineHeight: "170%" }}>
            By integrating full-stack development, automation, and AI-driven
            capabilities, we help organizations create intelligent systems that
            improve efficiency, decision-making, and customer experience.
          </p>
        </div>
      </div>
    </div>

    {/* Logo Slider */}
    <div className="mil-clients-slider mil-mb-120">
      <div className="mil-clients-track">
        {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
          <div className="mil-client-slide" key={i}>
            <div className="mil-client-slide-inner">
              <span className="mil-client-slide-text">{c.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurClients;
