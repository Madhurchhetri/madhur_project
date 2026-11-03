
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/CompanySection.css";

gsap.registerPlugin(ScrollTrigger);

const CompanySection = () => {
  const sectionRef = useRef(null);


useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    // PAGE 1 + PAGE 2 TRANSITION
    const transition = gsap.timeline({
      scrollTrigger: {
        trigger: ".company-intro",
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    // PAGE 1: SMALL TO FULL SCREEN
    transition.fromTo(
      ".company-intro-card",
      {
        scale: 0.75,
        borderRadius: "30px",
      },
      {
        scale: 1,
        borderRadius: "0px",
        ease: "none",
      },
      0
    );

    // PAGE 2: BOTTOM-RIGHT CORNER REVEAL
    transition.fromTo(
      ".company-story",
      {
        clipPath: "circle(0px at 100% 0%)"
      },
      {
        clipPath: "circle(150vmax at 100% 0%)",
        ease: "none",
      },
      0
    );

    // PAGE 2: IMAGE REVEAL
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
        ease: "none",
      },
      0
    );

    // PAGE 2: TEXT REVEAL
    transition.fromTo(
      ".company-content > *",
      {
        x: 80,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.15,
        ease: "none",
      },
      0
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      className="company-section"
      ref={sectionRef}
      id="company"
    >
      {/* PAGE 1 */}
      <div className="company-intro">
        <div className="company-intro-card">
          <div className="company-intro-overlay" />

          <div className="company-intro-content">
            <span className="company-intro-label">
              HONEY ARORA
            </span>

            <h1>
              MORE THAN
              <br />
              <strong>REAL ESTATE.</strong>
            </h1>

            <p>
              Building relationships. Creating possibilities.
            </p>

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
            <span className="company-label">
              OUR COMPANY
            </span>

            <h2>
              A vision built on
              <br />
              <strong>trust & excellence.</strong>
            </h2>

            <p>
              At Honey Arora, we believe real estate is
              more than buying or selling properties.
              It is about creating meaningful connections
              and helping people find spaces that reflect
              their dreams and aspirations.
            </p>

            <p>
              With a personalised approach, market
              understanding, and a commitment to
              transparency, we aim to make every property
              journey confident, seamless, and rewarding.
            </p>

            <a
              href="#achievements"
              className="company-button"
            >
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
