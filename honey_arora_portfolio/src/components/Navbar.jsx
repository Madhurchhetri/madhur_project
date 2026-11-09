
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import signature from "../assets/signature3.png";
import "../styles/navbar.css";

const navLinks = [
  "Home",
  "About",
  "Services",
  "Testimonial",
  "Projects",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80) {
        setNavbarVisible(true);
      } else if (difference > 5) {
        setNavbarVisible(false);
      } else if (difference < -5) {
        setNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setNavbarVisible(true);
    }
  }, [menuOpen]);

  // Smooth scroll using Lenis
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const target = document.querySelector(targetId);

    if (!target) return;

    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: -82,
        duration: 1.5,
      });
    } else {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="navbar"
      animate={{
        y: navbarVisible ? "0%" : "-110%",
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <img src={signature} alt="Honey Arora" />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const targetId = `#${link.toLowerCase()}`;

            return (
              <a
                href={targetId}
                key={link}
                onClick={(e) => handleNavClick(e, targetId)}
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP CONTACT */}
        <a
          href="#contact"
          className="contact-btn"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          CONTACT
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navLinks.map((link, index) => {
              const targetId = `#${link.toLowerCase()}`;

              return (
                <motion.a
                  href={targetId}
                  key={link}
                  onClick={(e) => handleNavClick(e, targetId)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.06,
                  }}
                >
                  <span>{link}</span>
                  <span className="mobile-link-arrow">↗</span>
                </motion.a>
              );
            })}

            <motion.a
              href="#contact"
              className="mobile-contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: navLinks.length * 0.06,
              }}
            >
              CONTACT <span>↗</span>
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
