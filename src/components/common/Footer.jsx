import { Link } from "react-router-dom";
import ArrowSVG from "../common/ArrowSVG";

const Footer = () => (
  <footer className="mil-dark-bg">
    <div className="mi-invert-fix">
      <div className="container-inner mil-p-120-60">
        <div className="row justify-content-between">
          <div className="col-md-4 col-lg-4 mil-mb-60">
            <div className="mil-logo mil-mb-30">
              <img src="/logo.png" alt="Logo" style={{ height: "42px", filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="mil-light-soft mil-mb-30">Transforming visions into digital reality with modern, scalable web applications and smart automation.</p>
            <div className="mil-subscribe-form">
              <input type="text" placeholder="Enter your email" />
              <button className="mil-button mil-icon-button-sm"><ArrowSVG /></button>
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="row justify-content-end">
              <div className="col-md-6 col-lg-7">
                <nav className="mil-footer-menu mil-mb-60">
                  <ul>
                    {[
                      {label:"Home",    link:"/",         active:true},
                      {label:"Portfolio", link:"/projects"},
                      {label:"Services",  link:"/services"},
                      {label:"Contact",   link:"/contact"},
                      {label:"Blog",      link:"#."},
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
                    {label:"Terms and conditions",  link:"/terms-of-Service"},
                    {label:"Cookie Policy",         link:"#."},
                    {label:"Careers",               link:"#."},
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
              <div className="col-md-6 col-lg-5 mil-mb-60">
                <h6 className="mil-muted mil-mb-30">India HQ</h6>
                <p className="mil-light-soft">Nagpur, Maharashtra, India<br /><span className="mil-no-wrap">+91 98765 43210</span></p>
              </div>
              <div className="col-md-6 col-lg-5 mil-mb-60">
                <h6 className="mil-muted mil-mb-30">Contact</h6>
                <p className="mil-light-soft">info@sharvixinnovations.com<br /><span className="mil-no-wrap">sharvixinnovations@gmail.com</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 mil-mb-60">
            <div className="mil-vert-between">
              <div className="mil-mb-30">
                <ul className="mil-social-icons">
                  {["fab fa-facebook-f","fab fa-twitter","fab fa-linkedin-in","fab fa-instagram","fab fa-github"].map((ic,i)=>(
                    <li key={i}><a href="#." target="_blank" rel="noreferrer"><i className={ic}></i></a></li>
                  ))}
                </ul>
              </div>
              <p className="mil-light-soft">© 2026 Sharvix Innovations. Crafted with care in India.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
