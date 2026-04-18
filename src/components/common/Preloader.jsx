const Preloader = ({ hidden }) => (
  <div className={`mil-preloader${hidden ? " mil-hidden" : ""}`}>
    <div className="mil-preloader-content">
      <div className="mil-preloader-text">
        <span className="mil-thin">Sharvix</span>
        <span className="mil-bold">Innovations</span>
      </div>
      <div className="mil-preloader-line">
        <div className="mil-preloader-progress"></div>
      </div>
    </div>
  </div>
);

export default Preloader;
