import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/hero.css";
import CTAButton from "./CTAButton";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-content > *", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
      });

      tl.from(
        ".hero-person",
        {
          x: 80,
          opacity: 0,
          duration: 1.2,
        },
        "-=0.7",
      );

      gsap.to(".hero-person", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <motion.span
            className="hero-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            CREATIVE DESIGN & DIGITAL EXPERIENCE
          </motion.span>

          <h1>
            Create Your
            <br />
            <span>Digital Identity.</span>
          </h1>

          <h2>
            Ideas that inspire.
            <br />
            Designs that make an impact.
          </h2>

          <p>
            We build powerful digital experiences that help brands stand out and
            connect with the right audience.
          </p>

          <div className="hero-actions">
          <CTAButton>
            lets Talk
          </CTAButton>
            <a href="#services" className="hero-link">
              Explore Services <span>→</span>
            </a>
          </div>

          <div className="hero-trust">
            <span>CREATIVITY</span>
            <span className="trust-star">★★★★★</span>
            <span>DESIGN · STRATEGY · INNOVATION</span>
          </div>
        </div>

        <div className="hero-visual">
          <motion.img
            src="https://static.berqwp.com/www.moritzdunkel.de/mw1920-q70-webp/https://www.moritzdunkel.de/wp-content/uploads/2026/05/bester-webdesigner-deutschland.webp"
            alt="Honey Arora"
            className="hero-person"
            whileHover={{
              scale: 0.92,
              x: 35,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
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
                    HONEY ARORA ✦ HONEY ARORA ✦
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
