import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import signature from "../assets/signature.png";
import "../styles/navbar.css";

const navLinks = [
  "Home",
  "Services",
  "References",
  "About",
  "Resources",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="brand-logo">
          <img
          className="w-[200px]" 
          src={signature} alt="Honey Arora" />
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
        </nav>

        <a href="#contact" className="contact-btn">
          CONTACT
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </button>

      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {navLinks.map((link) => (
              <a
                href={`#${link.toLowerCase()}`}
                key={link}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;