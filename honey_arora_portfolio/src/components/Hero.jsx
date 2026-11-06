
import { useEffect, useRef } from "react";
import { motion , useScroll, useTransform  } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/hero.css";
import CTAButton from "./CTAButton";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"],
});

const personY = useTransform(scrollYProgress, [0, 1], [0, -18]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // HERO CONTENT
      tl.from(
        ".hero-content > *",
        {
          y: 45,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
        },
        0
      );

      // SCROLL ANIMATION
      // gsap.to(".hero-person", {
      //   y: -18,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".hero",
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: 2,
      //   },
      // });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">
            <span>5-STAR REAL ESTATE ADVISOR</span>
          </span>

          <h1>
            HONEY
            <span>ARORA.</span>
          </h1>

          <h2>
            Your Trusted Partner
            <br />
            in Luxury Real Estate.
          </h2>

          <p>
            Experience exceptional real estate advisory with Honey Arora.
            Specialising in premium properties from DAMAC and Emaar, delivering
            the right opportunities, trusted guidance, and a seamless property
            buying experience in Dubai.
          </p>

          <div className="hero-actions">
            <CTAButton>LET'S TALK</CTAButton>

            <a href="#services" className="hero-link">
              Explore Properties <span>→</span>
            </a>
          </div>

          <div className="hero-trust">
            <span>YOUR PROPERTY. YOUR FUTURE.</span>
            <span className="trust-star">★★★★★</span>
            <span>DAMAC · EMAAR · LUXURY REAL ESTATE</span>
          </div>
        </div>

        <div className="hero-visual">
          <motion.img
            src="https://static.berqwp.com/www.moritzdunkel.de/mw1920-q70-webp/https://www.moritzdunkel.de/wp-content/uploads/2026/05/bester-webdesigner-deutschland.webp"
            alt="Honey Arora - Real Estate Advisor"
            className="hero-person"
            style={{
    y: personY,
    transformPerspective: 1200,
  }}
            initial={false}
            whileHover={{
              z: -35,
              rotateY: -2,
              
            }}
            transition={{
              type: "spring",
              stiffness: 35,
              damping: 22,
              mass: 1,
            }}
          />

          <div className="hero-badge">
            <div className="badge-inner">
              <svg viewBox="0 0 180 180" className="badge-text-svg">
                <defs>
                  <path
                    id="circle-text-path"
                    d="
                      M 90,90
                      m -63,0
                      a 63,63 0 1,1 126,0
                      a 63,63 0 1,1 -126,0
                    "
                  />
                </defs>

                <text>
                  <textPath href="#circle-text-path" startOffset="0%">
                    HONEY ARORA ✦ 5-STAR REAL ESTATE ADVISOR ✦
                  </textPath>
                </text>
              </svg>

              <strong></strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
