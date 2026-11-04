
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/CompanySection.css";

gsap.registerPlugin(ScrollTrigger);

const CompanySection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const transition = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=160%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // PAGE 1: CARD FULL SCREEN
      transition.fromTo(
        ".company-intro-card",
        {
          scale: 0.85,
          borderRadius: "30px",
        },
        {
          scale: 1,
          borderRadius: "0px",
          duration: 1,
          ease: "none",
        },
        0
      );

      // PAGE 2: WHITE BACKGROUND REVEAL
      transition.fromTo(
        ".company-story",
        {
          clipPath: "circle(0px at 100% 0%)",
        },
        {
          clipPath: "circle(150vmax at 100% 0%)",
          duration: 1,
          ease: "none",
        },
        0
      );

      // IMAGE REVEAL
      transition.fromTo(
        ".company-image",
        {
          x: -100,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "none",
        },
        0.15
      );

      // TEXT REVEAL EXCEPT TITLE
      transition.fromTo(
        ".company-content > :not(.company-title-wrap)",
        {
          x: 80,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.8,
          ease: "none",
        },
        0.2
      );

      // HEADING REVEAL
      transition.fromTo(
        ".company-title-wrap h2",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "none",
        },
        0.35
      );

      // YELLOW BACKGROUND LEFT TO RIGHT
      transition.fromTo(
        ".company-yellow-bg",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
          stagger: 0.1,
        },
        0.35
      );

      // PAGE 2 HOLD
      transition.to({}, { duration: 0.35 });
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();

    requestAnimationFrame(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section className="company-section" ref={sectionRef} id="company">

      {/* PAGE 1 */}
      <div className="company-intro">
        <div className="company-intro-card">
          <div className="company-intro-overlay" />

          <div className="company-intro-content">
            <span className="company-intro-label">HONEY ARORA</span>

            <h1>
              MORE THAN
              <br />
              <strong>REAL ESTATE.</strong>
            </h1>

            <p>Building relationships. Creating possibilities.</p>

            <span className="company-scroll">
              SCROLL TO EXPLORE ↓
            </span>
          </div>
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="company-story">
        <div className="company-story-container">

          <div className="company-image">
            <img
              src="/company-image.jpg"
              alt="Luxury real estate property"
            />

            <div className="company-image-caption">
              <span>HONEY ARORA</span>
              <span>REAL ESTATE PROFESSIONAL</span>
            </div>
          </div>

          <div className="company-content">
            <span className="company-label">OUR COMPANY</span>
            <h2>
               A vision built on
            </h2>

            {/* ANIMATED HEADING */}
            <div className="company-title-wrap">
            
              <div className="company-yellow-bg" />

                <strong>trust & excellence.</strong>
              
            </div>

            <p>
              At Honey Arora, we believe real estate is more than buying or
              selling properties. It is about creating meaningful connections
              and helping people find spaces that reflect their dreams and
              aspirations.
            </p>

            <p>
              With a personalised approach, market understanding, and a
              commitment to transparency, we aim to make every property journey
              confident, seamless, and rewarding.
            </p>

            <a href="#achievements" className="company-button">
              DISCOVER MORE
              <span>↗</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanySection;
