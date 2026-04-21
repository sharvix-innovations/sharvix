import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../../styles/global.css";
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

  // Hide preloader after fonts are ready (or max 800ms)
  useEffect(() => {
    const hide = () => setPreloaderHidden(true);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(hide);
    }
    // Max wait 800ms regardless
    const timer = setTimeout(hide, 800);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
