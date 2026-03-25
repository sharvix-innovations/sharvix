import { useState } from "react";

const categories = ["All", "Frontend", "Backend", "Cloud", "Data & AI"];

const techs = [
  { name: "React", cat: "Frontend", color: "#61DAFB",
    svg: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.2"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 16 16)"/></svg> },
  { name: "Next.js", cat: "Frontend", color: "#000",
    svg: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="#000"/><path d="M13 11v10l8-10" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="20" y1="11" x2="20" y2="21" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { name: "Vue.js", cat: "Frontend", color: "#42b883",
    svg: <svg viewBox="0 0 32 32"><path d="M19.5 4h5L16 18 7.5 4h5L16 10l3.5-6z" fill="#42b883"/><path d="M12.5 4L16 10l3.5-6" fill="#35495e"/></svg> },
  { name: "TypeScript", cat: "Frontend", color: "#3178C6",
    svg: <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="#3178C6"/><text x="16" y="22" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="sans-serif">TS</text></svg> },
  { name: "Tailwind", cat: "Frontend", color: "#06B6D4",
    svg: <svg viewBox="0 0 32 32"><path d="M16 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25.57.14.98.57 1.43 1.03C16.22 11.86 17.52 13.25 20.5 13.25c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-.57-.14-.98-.57-1.43-1.03C20.28 7.39 18.98 6 16 6zM11.5 13.25c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25.57.14.98.57 1.43 1.03 1.04 1.08 2.34 2.47 5.32 2.47 4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-.57-.14-.98-.57-1.43-1.03-1.04-1.08-2.34-2.47-5.32-2.47z" fill="#06B6D4"/></svg> },

  { name: "Node.js", cat: "Backend", color: "#339933",
    svg: <svg viewBox="0 0 32 32"><path d="M16 2l12 7v14l-12 7L4 23V9l12-7z" fill="#339933"/><text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="sans-serif">N</text></svg> },
  { name: "Python", cat: "Backend", color: "#3776AB",
    svg: <svg viewBox="0 0 32 32"><path d="M15.5 2C10.8 2 11 4.2 11 4.2v4.3h5v1.3H7.5S4 11.2 4 16s3 4.7 3 4.7h2v-4.5s-.1-3 3-3h5s2.8 0 2.8-2.7V5s.4-3-4.3-3zm-2.8 1.8a.9.9 0 110 1.8.9.9 0 010-1.8z" fill="#3776AB"/><path d="M16.5 30c4.7 0 4.5-2.2 4.5-2.2v-4.3h-5v-1.3h8.5s3.5.6 3.5-4.2-3-4.7-3-4.7h-2v4.5s.1 3-3 3h-5s-2.8 0-2.8 2.7V27s-.4 3 4.3 3zm2.8-1.8a.9.9 0 110-1.8.9.9 0 010 1.8z" fill="#FFD43B"/></svg> },
  { name: "Java", cat: "Backend", color: "#ED8B00",
    svg: <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="#ED8B00"/><text x="16" y="22" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="serif">Jv</text></svg> },
  { name: ".NET", cat: "Backend", color: "#512BD4",
    svg: <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="#512BD4"/><text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily="sans-serif">.N</text></svg> },
  { name: "GraphQL", cat: "Backend", color: "#E10098",
    svg: <svg viewBox="0 0 32 32"><polygon points="16,3 28,10 28,22 16,29 4,22 4,10" fill="none" stroke="#E10098" strokeWidth="1.5"/><circle cx="16" cy="3" r="2" fill="#E10098"/><circle cx="28" cy="10" r="2" fill="#E10098"/><circle cx="28" cy="22" r="2" fill="#E10098"/><circle cx="16" cy="29" r="2" fill="#E10098"/><circle cx="4" cy="22" r="2" fill="#E10098"/><circle cx="4" cy="10" r="2" fill="#E10098"/></svg> },

  { name: "AWS", cat: "Cloud", color: "#FF9900",
    svg: <svg viewBox="0 0 32 32"><rect x="2" y="2" width="28" height="28" rx="3" fill="#232F3E"/><text x="16" y="21" textAnchor="middle" fill="#FF9900" fontSize="10" fontWeight="700" fontFamily="sans-serif">AWS</text></svg> },
  { name: "Azure", cat: "Cloud", color: "#0078D4",
    svg: <svg viewBox="0 0 32 32"><path d="M12.5 4L4 26h5.5l1.5-4h9L12.5 4zM16 8l8 18h4L16 8z" fill="#0078D4"/></svg> },
  { name: "Docker", cat: "Cloud", color: "#2496ED",
    svg: <svg viewBox="0 0 32 32"><rect x="12" y="6" width="4" height="3.5" rx="0.5" fill="#2496ED"/><rect x="12" y="10.5" width="4" height="3.5" rx="0.5" fill="#2496ED"/><rect x="7" y="10.5" width="4" height="3.5" rx="0.5" fill="#2496ED"/><rect x="17" y="10.5" width="4" height="3.5" rx="0.5" fill="#2496ED"/><rect x="7" y="15" width="4" height="3.5" rx="0.5" fill="#2496ED"/><rect x="12" y="15" width="4" height="3.5" rx="0.5" fill="#2496ED"/><rect x="17" y="15" width="4" height="3.5" rx="0.5" fill="#2496ED"/><rect x="22" y="15" width="4" height="3.5" rx="0.5" fill="#2496ED"/><path d="M2 18c0 0 2 6 10 6s14-3 17-8c-1.5 1-3 1.5-4.5 1.5" fill="none" stroke="#2496ED" strokeWidth="1.5"/></svg> },
  { name: "Kubernetes", cat: "Cloud", color: "#326CE5",
    svg: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#326CE5" strokeWidth="1.5"/><path d="M16 6v20M7 11l18 10M7 21l18-10" stroke="#326CE5" strokeWidth="1.2"/><circle cx="16" cy="16" r="3" fill="#326CE5"/></svg> },
  { name: "CI/CD", cat: "Cloud", color: "#4CAF50",
    svg: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#4CAF50" strokeWidth="1.5"/><path d="M10 16h12M22 16l-4-4M22 16l-4 4" fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },

  { name: "TensorFlow", cat: "Data & AI", color: "#FF6F00",
    svg: <svg viewBox="0 0 32 32"><path d="M16 2L6 8v8l4 2v-6l6 3v16l4-2V11l-4-2v6l-6-3V8l6-3 6 3v2l4-2V8L16 2z" fill="#FF6F00"/></svg> },
  { name: "PostgreSQL", cat: "Data & AI", color: "#336791",
    svg: <svg viewBox="0 0 32 32"><ellipse cx="16" cy="10" rx="10" ry="5" fill="none" stroke="#336791" strokeWidth="1.5"/><path d="M6 10v12c0 2.8 4.5 5 10 5s10-2.2 10-5V10" fill="none" stroke="#336791" strokeWidth="1.5"/><path d="M6 16c0 2.8 4.5 5 10 5s10-2.2 10-5" fill="none" stroke="#336791" strokeWidth="1.5"/></svg> },
  { name: "MongoDB", cat: "Data & AI", color: "#47A248",
    svg: <svg viewBox="0 0 32 32"><path d="M16 2c-1 4-4 7-4 12s2 8 4 16c2-8 4-11 4-16S17 6 16 2z" fill="#47A248"/><path d="M15.5 25h1v5h-1z" fill="#A6522E"/></svg> },
  { name: "Redis", cat: "Data & AI", color: "#DC382D",
    svg: <svg viewBox="0 0 32 32"><path d="M28 12l-12 6L4 12l12-6 12 6z" fill="#DC382D" opacity="0.8"/><path d="M4 12v8l12 6V20L4 12z" fill="#DC382D" opacity="0.6"/><path d="M28 12v8l-12 6V20l12-8z" fill="#DC382D"/></svg> },
  { name: "OpenAI", cat: "Data & AI", color: "#10A37F",
    svg: <svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="none" stroke="#10A37F" strokeWidth="1.5"/><path d="M12 12l8 0M12 16l8 0M12 20l8 0" stroke="#10A37F" strokeWidth="1.5" strokeLinecap="round"/><circle cx="16" cy="16" r="5" fill="none" stroke="#10A37F" strokeWidth="1"/></svg> },
];

const TechStack = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? techs : techs.filter((t) => t.cat === active);

  return (
    <section className="mil-soft-bg">
      <div className="container-inner mil-p-120-120">
        {/* Header */}
        <div className="row align-items-end mil-mb-60">
          <div className="col-lg-6 mil-mb-30">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-mb-30">
              Our Technology Stack
            </span>
            <h2>
              Built With <span className="mil-thin">Modern</span>
              <br />
              <span className="mil-thin">Technologies</span>
            </h2>
          </div>
          <div className="col-lg-5 mil-mb-30" style={{ marginLeft: "auto" }}>
            <p style={{ lineHeight: "170%" }}>
              We leverage modern, battle-tested technologies to build solutions
              that are fast, secure, and built to scale — choosing the right tool
              for every challenge.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mil-tech-tabs mil-mb-60">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`mil-tech-tab${active === cat ? " mil-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="mil-tech-grid">
          {filtered.map((tech, i) => (
            <div
              className="mil-tech-card"
              key={tech.name}
              style={{ "--accent": tech.color, animationDelay: `${i * 0.05}s` }}
            >
              <div className="mil-tech-card-icon">{tech.svg}</div>
              <h6 className="mil-tech-card-name">{tech.name}</h6>
              <span className="mil-tech-card-cat">{tech.cat}</span>
              <div className="mil-tech-card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
