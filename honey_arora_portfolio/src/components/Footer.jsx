import { motion } from "motion/react";
import "../styles/footer.css";
import CTAButton from "./CTAButton";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  // { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/honey.dubaiproperties?xtok=cWczZHd1cW5yM3pp",
  },
  { label: "TikTok", href: 'https://www.tiktok.com/@honey_dubaiproperties?_r=1&_t=ZS-9BCcSHSJtoL' },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CLepBmrhE/?mibextid=wwXIfr ",
  },
  {
    label: "YouTube",
    href: " https://youtube.com/@honey_dubaiproperties?si=djpwgvcNgQFVkO_l",
  },
];

const Footer = () => {
  return (
    <footer className="footer-section" id="footer">
      {/* TOP CTA AREA */}
      <div className="footer-cta">
        <motion.div
          className="footer-cta-content"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="footer-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>

          <h2>
            LET'S FIND YOUR
            <br />
            NEXT <span>ADDRESS.</span>
          </h2>

          <p>
            Whether you're looking to buy, sell or invest, let's turn your real
            estate goals into reality.
          </p>

          <CTAButton>LET'S TALK</CTAButton>
        </motion.div>

        <div className="footer-cta-glow" />
      </div>

      {/* FOOTER MAIN CONTENT */}
      <div className="footer-main">
        {/* BRAND */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a href="#home" className="footer-logo">
            HONEY <span>ARORA.</span>
          </a>

          <span className="footer-brand-tagline">
            5-STAR REAL ESTATE ADVISOR
          </span>

          <p>
            Creating meaningful connections between people and properties.
            Helping you make confident real estate decisions.
          </p>

          <div className="footer-availability">
            <span className="availability-dot" />
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
        </motion.div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>EXPLORE</h3>

          <ul>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <span>{link.label}</span>
                  <span className="footer-link-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>GET IN TOUCH</h3>

          <span className="footer-contact-label">CALL ME</span>
          <a href="tel:+971585812356" className="footer-contact-link">
            +971585812356
          </a>

          <span className="footer-contact-label">WHATSAPP</span>
          <a
            href="https://wa.me/+971585812356"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
          >
            Let's chat together ↗
          </a>

          <span className="footer-contact-label">LET'S CONNECT</span>

          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                title={social.label}
                onClick={(e) => {
                  if (!social.href) e.preventDefault();
                }}
              >
                {social.label}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HONEY ARORA. ALL RIGHTS RESERVED.</p>

        <p className="footer-made">
          DESIGNED WITH <span>♥</span> FOR EXCELLENCE
        </p>

        <a href="#home" className="footer-back-top">
          BACK TO TOP <span>↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
