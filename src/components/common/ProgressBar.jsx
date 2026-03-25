const ProgressBar = ({ progress }) => (
  <div className="mil-progress-track">
    <div className="mil-progress" style={{ height: `${progress}%` }} />
  </div>
);

export default ProgressBar;
