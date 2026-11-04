
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import signature from "../assets/signature.png";
import "../styles/navbar.css";

const navLinks = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Testimonial",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      // Always show navbar at the top
      if (currentScrollY < 80) {
        setNavbarVisible(true);
      }
      // Scrolling down: hide navbar
      else if (difference > 5) {
        setNavbarVisible(false);
      }
      // Scrolling up: show navbar
      else if (difference < -5) {
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

  // Keep navbar visible while mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      setNavbarVisible(true);
    }
  }, [menuOpen]);

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
        <a href="#home" className="brand-logo" onClick={closeMenu}>
          <img src={signature} alt="Honey Arora" />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
        </nav>

        {/* DESKTOP CONTACT */}
        <a href="#contact" className="contact-btn">
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
            {navLinks.map((link, index) => (
              <motion.a
                href={`#${link.toLowerCase()}`}
                key={link}
                onClick={closeMenu}
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
            ))}

            <motion.a
              href="#contact"
              className="mobile-contact"
              onClick={closeMenu}
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
