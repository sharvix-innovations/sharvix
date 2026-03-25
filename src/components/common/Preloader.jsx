const Preloader = ({ hidden }) => (
  <div className={`mil-preloader${hidden ? " mil-hidden" : ""}`}>
    <div className="mil-preloader-text">
      <span style={{ fontWeight: 100 }}>Pioneering</span>
      <span>Creative</span>
      <span style={{ fontWeight: 100 }}>Excellence</span>
    </div>
  </div>
);

export default Preloader;
