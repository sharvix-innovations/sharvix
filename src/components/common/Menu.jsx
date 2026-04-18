import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import allRoutes from "../../router/all_routes";

const Menu = ({ isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  
  const menuItems = [
    { label: "Home", link: allRoutes.home },
    { label: "About Us", link: allRoutes.about },
    { label: "Services", link: allRoutes.services },
    { label: "Projects", link: allRoutes.projects },
    { label: "Contact Us", link: allRoutes.contact },
  ];

  const usefulLinks = [
    { label: "Privacy Policy", link: allRoutes.privacypolicy },
    { label: "Terms of Service", link: allRoutes.termsofservice },
  ];

  return (
    <div className={`mil-menu-frame${isOpen ? " mil-active" : ""}`}>
      <div className="mil-frame-top">
        <Link to={allRoutes.home} className="mil-logo" onClick={onClose}>
          <img src="/logo.png" alt="Logo" style={{ height: "42px", filter: "brightness(0) invert(1)" }} />
        </Link>
        <div className={`mil-menu-btn mil-active`} onClick={onClose}>
          <span />
        </div>
      </div>
      <div className="container-inner" style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-xl-5">
            <nav className="mil-main-menu">
              <ul>
                {menuItems.map((item, i) => (
                  <li key={i} className={item.sub ? "mil-has-children" : ""}>
                    <NavLink 
                      to={item.link} 
                      onClick={() => {
                        if (item.sub) setOpenSubmenu(openSubmenu === i ? null : i);
                        else onClose();
                      }}
                      className={({ isActive }) => (isActive && !item.sub ? "mil-active-link" : "")}
                      style={({ isActive }) => (isActive && !item.sub ? { color: "#0597F2" } : {})}
                    >
                      {item.label}
                    </NavLink>
                    {item.sub && (
                      <ul className={openSubmenu === i ? "mil-active" : ""}>
                        {item.sub.map((s, j) => (
                          <li key={j}>
                            <Link to={s.link} onClick={onClose}>{s.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-7">
            <div className="mil-menu-right-frame">
              <div className="mil-menu-right">
                <div className="row">
                  <div className="col-lg-5 mil-mb-60">
                    <h6 className="mil-muted mil-mb-30">Services</h6>
                    <ul className="mil-menu-list">
                      <li>
                        <Link to={allRoutes.services} className="mil-light-soft" onClick={onClose}>Software & Product Development</Link>
                      </li>
                      <li>
                        <Link to={allRoutes.services} className="mil-light-soft" onClick={onClose}>UI/UX & Visual Design</Link>
                      </li>
                      <li>
                        <Link to={allRoutes.services} className="mil-light-soft" onClick={onClose}>View All Services</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-7 mil-mb-60">
                    <h6 className="mil-muted mil-mb-30">Recent Projects</h6>
                    <ul className="mil-menu-list">
                      <li>
                        <Link to={`${allRoutes.projectsdetails}`} className="mil-light-soft" onClick={onClose}>Sharvix Innovations Website</Link>
                      </li>
                      <li>
                        <Link to={allRoutes.projects} className="mil-light-soft" onClick={onClose}>View All Projects</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mil-divider mil-mb-60" />
                <div className="row justify-content-between">
                  <div className="col-lg-8 mil-mb-60">
                    <h6 className="mil-muted mil-mb-30">Address</h6>
                    <p className="mil-light-soft">Vinayak Apartments, Prabhat Road, Lane No. 11, Erandwane, Pune, Maharashtra 411004 <span className="mil-no-wrap">+91 84830 22829</span></p>
                  </div>
                  <div className="col-lg-4 mil-mb-60">
                    <h6 className="mil-muted mil-mb-30">Useful Links</h6>
                    <ul className="mil-menu-list">
                      {usefulLinks.map((l, i) => (
                        <li key={i}>
                          <Link to={l.link} className="mil-light-soft" onClick={onClose}>{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
