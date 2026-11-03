
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Goals.css";

gsap.registerPlugin(ScrollTrigger);

const Goals = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const labelRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center 45%",
          scrub: 1,
        },
      });

      // Small label reveal
      tl.fromTo(
        labelRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "none",
        },
        0
      );

      // Heading left-to-right mask reveal
      tl.fromTo(
        headingRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          filter: "blur(1px)",
          opacity: 0.3,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          filter: "blur(0px)",
          opacity: 1,
          ease: "none",
        },
        0.1
      );

      // Subtitle reveal
      tl.fromTo(
        subtitleRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          filter: "blur(4px)",
          opacity: 0.3,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          filter: "blur(0px)",
          opacity: 1,
          ease: "none",
        },
        0.25
      );

      // Paragraph reveal
      tl.fromTo(
        paragraphRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
          filter: "blur(2px)",
          opacity: 0.3,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          filter: "blur(0px)",
          opacity: 1,
          ease: "none",
        },
        0.4
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="goals-section"
      id="goals"
      ref={sectionRef}
    >
      <div className="goals-container">

        <span className="goals-label" ref={labelRef}>
          MY GOALS
        </span>

        <h2 className="goals-heading" ref={headingRef}>
          The solution? A{" "}
          <strong>property that works</strong>{" "}
          for you.
        </h2>

        <h3 className="goals-subtitle" ref={subtitleRef}>
          And that's exactly what I'm here for.
        </h3>

        <p className="goals-description" ref={paragraphRef}>
          Not just beautiful spaces or empty promises.
          I believe real estate is about more than buying
          or selling a property. It's about understanding
          your vision, building trust, and finding the right
          opportunity that fits your future.
        </p>

      </div>
    </section>
  );
};

export default Goals;
