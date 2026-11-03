
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ParallaxSection.css";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax movement
      gsap.fromTo(
        ".parallax-image",
        {
          yPercent: -12,
        },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Reveal animation for both content sections
      gsap.utils.toArray(".parallax-content").forEach((content) => {
        const elements = content.querySelectorAll(
          ".parallax-label, .parallax-heading, .parallax-description"
        );

        gsap.fromTo(
          elements,
          {
            clipPath: "inset(0 100% 0 0)",
            filter: "blur(2px)",
            opacity: 0.3,
          },
          {
            clipPath: "inset(0 0% 0 0)",
            filter: "blur(0px)",
            opacity: 1,
            stagger: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: content,
              start: "top 75%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="parallax-wrapper"
      ref={sectionRef}
      id="parallax"
    >
      {/* FIXED PARALLAX IMAGE */}
      <div className="parallax-image-holder">
        <div className="parallax-image" />
        {/* <div className="parallax-image-overlay" /> */}
      </div>

      {/* FIRST CONTENT SECTION */}
      {/* <article className="parallax-content">
        <div className="parallax-inner">
          <span className="parallax-label">
            MY APPROACH
          </span>

          <h2 className="parallax-heading">
            Every property has a story.
            <br />
            <strong>Let's find yours.</strong>
          </h2>

          <p className="parallax-description">
            Real estate is more than transactions.
            It's about understanding people, their aspirations,
            and the places where their future begins.
            My approach is built around trust, transparency,
            and finding the right opportunity for every client.
          </p>
        </div>
      </article> */}

      {/* SECOND CONTENT SECTION */}
       {/* <article className="parallax-content">
        <div className="parallax-inner">
          <span className="parallax-label">
            THE DIFFERENCE
          </span>

          <h2 className="parallax-heading">
            Your vision.
            <br />
            <strong>My commitment.</strong>
          </h2>

          <p className="parallax-description">
            From discovering the right property to making
            confident decisions, I believe every step should
            feel clear and effortless. With a personalised
            approach and a focus on meaningful relationships,
            I help turn your property goals into reality.
          </p>
        </div>
      </article>  */}
    </section>
  );
};

export default ParallaxSection;
