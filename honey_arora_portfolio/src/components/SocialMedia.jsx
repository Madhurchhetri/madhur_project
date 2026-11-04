
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import "../styles/SocialMedia.css";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    name: "Instagram",
    handle: "@yourinstagram",
    short: "IG",
    description: "Explore our latest updates and lifestyle.",
    url: "https://www.instagram.com/yourhandle/",
    className: "instagram",
  },
  {
    name: "LinkedIn",
    handle: "Honey Arora",
    short: "in",
    description: "Connect with us professionally.",
    url: "https://www.linkedin.com/in/yourhandle/",
    className: "linkedin",
  },
  {
    name: "Facebook",
    handle: "Honey Arora",
    short: "f",
    description: "Stay connected with our community.",
    url: "https://www.facebook.com/yourhandle/",
    className: "facebook",
  },
  {
    name: "YouTube",
    handle: "@yourchannel",
    short: "▶",
    description: "Watch our property tours and videos.",
    url: "https://www.youtube.com/@yourchannel",
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
