import { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="mil-accordion-group mil-up">
      <div className="mil-accordion-menu" onClick={() => setOpen(!open)}>
        <p className="mil-accordion-head">{title}</p>
        <div className="mil-symbol mil-h3">
          <div className="mil-plus" style={{opacity: open ? 0 : 1, transition:"opacity 0.3s"}}><span>+</span></div>
          <div className="mil-minus" style={{opacity: open ? 1 : 0, transition:"opacity 0.3s"}}><span>-</span></div>
        </div>
      </div>
      <div className={`mil-accordion-content${open ? " mil-open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
