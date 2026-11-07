
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import "../styles/SocialMedia.css";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: "Instagram",
    handle: "Honey Arora",
    short: "IG",
    description: "Explore our latest updates and lifestyle.",
    url: "https://www.instagram.com/honey.dubaiproperties?xtok=cWczZHd1cW5yM3pp",
    className: "instagram",
  },
  {
    name: "TikTok",
    handle: "Honey Arora",
    short: "♪",
    description: "Connect with us professionally.",
    url: "https://www.tiktok.com/@honey_dubaiproperties?_r=1&_t=ZS-9BCcSHSJtoL",
    className: "linkedin",
  },
  {
    name: "Facebook",
    handle: "Honey Arora",
    short: "f",
    description: "Stay connected with our community.",
    url: "https://www.facebook.com/share/1CLepBmrhE/?mibextid=wwXIfr",
    className: "facebook",
  },
  {
    name: "YouTube",
    handle: "Honey Arora",
    short: "▶",
    description: "Watch our property tours and videos.",
    url: "https://youtube.com/@honey_dubaiproperties?si=djpwgvcNgQFVkO_l",
    className: "youtube",
  },
];

const SocialMedia = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // SOCIAL CARDS REVEAL
      gsap.fromTo(
        ".social-card",
        {
          y: 70,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".social-grid",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="social-section" id="social" ref={sectionRef}>
      <div className="social-container">

        {/* HEADING */}
        <div className="social-heading-area">

          <span className="social-label">
            STAY CONNECTED
          </span>

          {/* CHARACTER-BY-CHARACTER HEADING */}
          <AnimatedText
            as="h2"
            className="social-heading"
            stagger={0.025}
          >
            <span className="social-heading-word">
              {Array.from("LET'S").map((char, index) => (
                <span className="animated-character" key={index}>
                  {char}
                </span>
              ))}
            </span>

            {" "}

            <span className="social-heading-word social-heading-accent">
              {Array.from("CONNECT.").map((char, index) => (
                <span className="animated-character" key={index}>
                  {char}
                </span>
              ))}
            </span>
          </AnimatedText>

          {/* CHARACTER-BY-CHARACTER SUBTITLE */}
          <AnimatedText
            as="p"
            className="social-subtitle"
            text="Follow our journey, explore our work and stay connected with everything happening at Honey Arora."
            stagger={0.012}
          />

        </div>

        {/* SOCIAL CARDS */}
        <div className="social-grid">
          {socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card ${social.className}`}
              key={social.name}
              aria-label={`Visit Honey Arora on ${social.name}`}
            >
              <div className="social-card-top">

                <div className="social-icon">
                  {social.short}
                </div>

                <span className="social-arrow">
                  ↗
                </span>

              </div>

              <div className="social-card-bottom">

                <span className="social-platform">
                  {social.name}
                </span>

                <h3>{social.handle}</h3>

                <p>{social.description}</p>

              </div>

              <div className="social-card-glow" />
            </a>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="social-bottom">
          <span>HONEY ARORA</span>
          <span>LET'S BUILD SOMETHING MEANINGFUL.</span>
        </div>

      </div>
    </section>
  );
};

export default SocialMedia;
