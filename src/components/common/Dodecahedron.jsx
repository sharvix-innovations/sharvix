const Dodecahedron = () => {
  return (
    <div className="mil-dodecahedron">
      {Array.from({ length: 12 }).map((_, i) => (
        <div className="mil-pentagon" key={i}>
          {Array.from({ length: 5 }).map((__, j) => (
            <div key={j} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dodecahedron;
