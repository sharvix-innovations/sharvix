import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GlobalStyles from "../../styles/GlobalStyles";
import Preloader from "../common/Preloader";
import ProgressBar from "../common/ProgressBar";
import Menu from "../common/Menu";
import Frame from "../common/Frame";
import Footer from "../common/Footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [preloaderHidden, setPreloaderHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { pathname } = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Hide preloader after initial load
  useEffect(() => {
    const timer = setTimeout(() => setPreloaderHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlobalStyles />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
      />
      <div className="mil-wrapper">
        <Preloader hidden={preloaderHidden} />
        <ProgressBar progress={scrollProgress} />
        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="mil-curtain" />
        <Frame menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
        <div className="mil-content">
          {/* Page content rendered here */}
          <main>
            <Outlet />
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
