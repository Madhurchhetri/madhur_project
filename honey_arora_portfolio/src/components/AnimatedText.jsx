
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  text,
  children,
  className = "",
  as: Tag = "p",
  stagger = 0.015,
}) => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const characters = textRef.current.querySelectorAll(
        ".animated-character"
      );

      gsap.fromTo(
        characters,
        {
          opacity: 0,
          x: -12,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          stagger,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 55%",
            scrub: 1,
          },
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, [text, stagger]);

  const renderCharacters = (value, keyPrefix = "") =>
    Array.from(value).map((char, index) => (
      <span className="animated-character" key={`${keyPrefix}-${index}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  const renderChildren = (nodes, path = "root") => {
    if (typeof nodes === "string" || typeof nodes === "number") {
      return renderCharacters(String(nodes), path);
    }

    if (Array.isArray(nodes)) {
      return nodes.map((node, index) =>
        renderChildren(node, `${path}-${index}`)
      );
    }

    if (!nodes || typeof nodes !== "object") {
      return nodes;
    }

    if (nodes.type === "br") {
      return nodes;
    }

    if (typeof nodes.type === "string") {
      const Element = nodes.type;

      return (
        <Element key={path} {...nodes.props}>
          {renderChildren(nodes.props.children, path)}
        </Element>
      );
    }

    return nodes;
  };

  return (
    <Tag className={className} ref={textRef}>
      {text ? renderCharacters(text) : renderChildren(children)}
    </Tag>
  );
};

export default AnimatedText;
