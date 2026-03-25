import { useState, useRef, useCallback } from "react";
import Dodecahedron from "./Dodecahedron";

const steps = [
  {
    num: "01",
    title: "Business Discovery & Alignment",
    desc: "Understanding your objectives, users, market context, and success criteria to ensure complete alignment before execution begins.",
  },
  {
    num: "02",
    title: "Research, Strategy & Architecture",
    desc: "Defining roadmaps, technical architecture, core features, and selecting the most suitable technologies to support scalability and long-term growth.",
  },
  {
    num: "03",
    title: "Design & Rapid Prototyping",
    desc: "Creating intuitive UI/UX workflows, interactive prototypes, and system architecture that balance usability, performance, and maintainability.",
  },
  {
    num: "04",
    title: "Agile Development & Engineering",
    desc: "Full-stack building with agile practices, creating modular, secure, and well-tested code with a focus on security and scalability.",
  },
  {
    num: "05",
    title: "Rigorous Testing & QA",
    desc: "Functional, performance, and security testing to identify and fix issues before they reach your users, ensuring bug-free product delivery.",
  },
  {
    num: "06",
    title: "Deployment, Support & Optimization",
    desc: "Secure cloud deployment, continuous monitoring, ongoing support, and optimization based on analytics and user feedback.",
  },
];

const HowWeWork = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".mil-hww-step");
    const containerTop = container.scrollTop + container.offsetHeight * 0.35;
    let idx = 0;
    cards.forEach((card, i) => {
      if (card.offsetTop <= containerTop) idx = i;
    });
    setActiveIdx(idx);
  }, []);

  return (
    <section className="mil-dark-bg">
      <div className="mi-invert-fix">
        {/* Animated background */}
        <div className="mil-animation-frame">
          <div className="mil-animation-frame">
        <div className="mil-animation mil-position-2 mil-scale" style={{left:"150px",transform:"scale(2)"}}><Dodecahedron/></div>
      </div>
        </div>

        <div className="container-inner mil-p-120-120">
          <div className="mil-hww-layout">
            {/* LEFT — Sticky side */}
            <div className="mil-hww-sticky">
              <div className="mil-hww-sticky-inner">
                <span className="mil-suptitle mil-light-soft mil-mb-30" style={{ display: "block" }}>
                  Our Execution Framework
                </span>
                <h2 className="mil-muted mil-mb-30">
                  How We <span className="mil-thin">Turn Ideas</span>
                  <br />
                  Into <span className="mil-thin">Reality</span>
                </h2>
                <p className="mil-light-soft mil-mb-60" style={{ lineHeight: "170%", maxWidth: "400px" }}>
                  Our work process is built around clarity, collaboration, and
                  execution — delivered with complete transparency at every stage.
                </p>

                {/* Progress indicator */}
                <div className="mil-hww-progress">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`mil-hww-dot${activeIdx === i ? " mil-active" : activeIdx > i ? " mil-done" : ""}`}
                    />
                  ))}
                </div>
                <p className="mil-light-soft" style={{ fontSize: "13px", marginTop: "12px" }}>
                  Step <span className="mil-accent" style={{ fontWeight: 600 }}>{String(activeIdx + 1).padStart(2, "0")}</span> of 06
                </p>
              </div>
            </div>

            {/* RIGHT — Scrollable steps */}
            <div className="mil-hww-scroll-wrap" ref={scrollRef} onScroll={handleScroll}>
              <div className="mil-hww-steps">
                {steps.map((step, i) => (
                  <div
                    className={`mil-hww-step${activeIdx === i ? " mil-active" : ""}`}
                    key={i}
                  >
                    <div className="mil-hww-step-num">{step.num}</div>
                    <div className="mil-hww-step-content">
                      <h4 className="mil-muted mil-mb-15">{step.title}</h4>
                      <p className="mil-light-soft" style={{ lineHeight: "170%" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
