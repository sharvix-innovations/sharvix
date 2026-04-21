import { Link } from "react-router-dom";
import ArrowSVG from "../common/ArrowSVG";

const Footer = () => (
  <div className="mil-footer-wrap">
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container-inner mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 mil-mb-60">
              <div className="mil-logo mil-mb-30">
                <img src="/logo.png" alt="Sharvix Innovations Logo" width="120" height="42" style={{ height: "42px", filter: "brightness(0) invert(1)" }} loading="lazy" decoding="async" />
              </div>
              <p className="mil-light-soft mil-mb-30">Transforming visions into digital reality with modern, scalable web applications and smart automation.</p>
              <div className="mil-subscribe-form">
                <input type="text" placeholder="Enter your email" />
                <button className="mil-button mil-icon-button-sm" aria-label="Subscribe to newsletter"><ArrowSVG /></button>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      {[
                        {label:"Home",    link:"/",         active:true},
                        {label:"About",   link:"/about"},
                        {label:"Portfolio", link:"/projects"},
                        {label:"Services",  link:"/services"},
                        {label:"Contact",   link:"/contact"},
                      ].map((item,i)=>(
                        <li key={i} className={item.active?"mil-active":""}>
                          {item.link === "#." ? (
                            <a href="#.">{item.label}</a>
                          ) : (
                            <Link to={item.link}>{item.label}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-mb-60">
                    {[
                      {label:"Privacy Policy",       link:"/privacy-policy"},
                      {label:"Terms and conditions",  link:"/terms-of-Service"}
                    ].map((l,i)=>(
                      <li key={i}>
                        {l.link === "#." ? (
                          <a href="#." className="mil-light-soft">{l.label}</a>
                        ) : (
                          <Link to={l.link} className="mil-light-soft">{l.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-8 mil-mb-60">
                  <h6 className="mil-muted mil-mb-30">Address</h6>
                  <p className="mil-light-soft">Vinayak Apartments, Prabhat Road, Lane No. 11, Erandwane, Pune, Maharashtra 411004<br /><span className="mil-no-wrap">+91 84830 22829</span></p>
                </div>
                <div className="col-md-6 col-lg-4 mil-mb-60">
                  <h6 className="mil-muted mil-mb-30">Contact</h6>
                  <p className="mil-light-soft">sharvixinnovations@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 mil-mb-60">
              <div className="mil-vert-between">
                <div className="mil-mb-30">
                  <ul className="mil-social-icons">
                    {[
                      {ic:"fab fa-linkedin-in",   href:"https://www.linkedin.com/company/sharvix-innovations/"},
                      {ic:"fab fa-instagram",     href:"https://www.instagram.com/sharvixinnovations?igsh=OGlvMXBqdDFlMzJ3"},
                      {ic:"fab fa-whatsapp",      href:"https://wa.me/918483022829"},
                      {ic:"fas fa-envelope",      href:"mailto:sharvixinnovations@gmail.com"},
                    ].map((s,i)=>(
                      <li key={i}>
                        <a href={s.href} target="_blank" rel="noreferrer"
                           style={{
                             width: "45px",
                             height: "45px",
                             borderRadius: "50%",
                             backgroundColor: "#0597F2",
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "center",
                             color: "#fff",
                             fontSize: "18px",
                             transition: "0.4s cubic-bezier(0,0,0.3642,1)",
                             transform: "scale(1)"
                           }}
                           onMouseEnter={e => {
                             e.currentTarget.style.transform = "scale(1.15)";
                             e.currentTarget.style.backgroundColor = "#0284C7";
                           }}
                           onMouseLeave={e => {
                             e.currentTarget.style.transform = "scale(1)";
                             e.currentTarget.style.backgroundColor = "#0597F2";
                           }}
                        >
                          <i className={s.ic}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mil-light-soft">© 2026 Sharvix Innovations. Transforming visions into digital reality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="mil-footer-watermark" aria-hidden="true">SHARVIX</div>
  </div>
);

export default Footer;
