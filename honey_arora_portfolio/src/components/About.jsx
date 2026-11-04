import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
 const highlightRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "center center",
          scrub: true,
        },
      });

      tl.fromTo(
         highlightRef.current,
        { scaleX: 0 },
        { scaleX: 1, ease: "none" ,stagger: 0.1, },
        0,
      );

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        0,
      );

      tl.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        0.2,
      );

      tl.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* LEFT SIDE IMAGE */}
        <div className="about-visual">
          <div className="about-image-frame" ref={imageRef}>
            <img
              src="https://static.berqwp.com/www.moritzdunkel.de/mw1920-q70-webp/https://www.moritzdunkel.de/wp-content/uploads/2026/05/web-design-agentur-koeln.webp"
              alt="Honey Arora"
              className="about-person"
            />
          </div>

          <div className="about-image-text">
            <span>HONEY ARORA</span>
            <span>REAL ESTATE PROFESSIONAL</span>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <div className="about-title-wrap">
            <h2 ref={titleRef}>
              <span className="about-pink-text"> MORE THAN </span> 
              
              JUST A
              
              <span className="about-highlight">
                <span className="about-highlight-bg"
                ref={highlightRef} />
                PROPERTY EXPERT.
              </span>
              <br />
              
            </h2>
          </div>

          <div className="about-description" ref={contentRef}>
            <span className="about-label">ABOUT ME</span>

            <p>
              I'm Honey Arora, a real estate professional passionate about
              helping people find more than just a property. I believe every
              space has a story, and my goal is to help you find the one that
              feels right for you.
            </p>

            <p>
              With a focus on premium properties, trusted relationships and a
              personalised approach, I make every real estate journey simple and
              meaningful.
            </p>

            <a href="#achievements" className="about-button">
              EXPLORE ACHIEVEMENTS
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
