
// import { useState } from "react";
// import "../styles/Testimonials.css";
// import AnimatedText from "./AnimatedText";

// const testimonials = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     role: "Property Buyer",
//     image: "/testimonial-1.jpg",
//     quote:
//       "Honey made the entire property buying experience smooth and stress-free. Her understanding of the market and attention to detail made all the difference.",
//   },
//   {
//     id: 2,
//     name: "Fatima Al Mansoori",
//     role: "Homeowner",
//     image: "/testimonial-2.jpg",
//     quote:
//       "The process felt personal from the very beginning. Honey understood exactly what we were looking for and helped us find a place that truly feels like home.",
//   },
//   {
//     id: 3,
//     name: "Mark & Sophie Bennett",
//     role: "Real Estate Investor",
//     image: "/testimonial-3.jpg",
//     quote:
//       "Professional, transparent, and genuinely committed. I appreciated the honest advice and the way every detail was handled with care.",
//   },
// ];

// const Testimonials = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const handleCardClick = (id) => {
//     setActiveCard((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section className="testimonials-section" id="testimonial">
//       <div className="testimonials-container">

//         {/* SECTION HEADING */}
//         <div className="testimonials-header">

//           <span className="testimonials-label">
//             CLIENT STORIES
//           </span>

//           {/* CHARACTER-BY-CHARACTER HEADING */}
//           <AnimatedText
//             as="h2"
//             className="testimonials-heading"
//             stagger={0.025}
//           >
//             Trust built on
//             <br />

//             <strong className="testimonials-heading-highlight">
//               real experiences.
//             </strong>
//           </AnimatedText>

//           {/* CHARACTER-BY-CHARACTER INTRO */}
//           <AnimatedText
//             as="p"
//             className="testimonials-intro"
//             stagger={0.012}
//             text="Every successful property journey begins with trust. Here's what my clients have to say."
//           />

//         </div>

//         {/* TESTIMONIAL CARDS */}
//         <div
//           className={`testimonials-grid ${
//             activeCard !== null ? "has-active-card" : ""
//           }`}
//         >
//           {testimonials.map((testimonial) => {
//             const isActive = activeCard === testimonial.id;

//             const isBlurred =
//               activeCard !== null && !isActive;

//             return (
//               <article
//                 key={testimonial.id}
//                 className={`testimonial-card ${
//                   isActive ? "is-active" : ""
//                 } ${isBlurred ? "is-blurred" : ""}`}
//                 onMouseEnter={() =>
//                   setActiveCard(testimonial.id)
//                 }
//                 onMouseLeave={() =>
//                   setActiveCard(null)
//                 }
//                 onFocus={() =>
//                   setActiveCard(testimonial.id)
//                 }
//                 onBlur={() =>
//                   setActiveCard(null)
//                 }
//                 onClick={() =>
//                   handleCardClick(testimonial.id)
//                 }
//                 tabIndex={0}
//                 role="button"
//                 aria-expanded={isActive}
//                 aria-label={`Read testimonial from ${testimonial.name}`}
//               >

//                 {/* IMAGE */}
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="testimonial-image"
//                 />

//                 {/* DARK IMAGE OVERLAY */}
//                 <div className="testimonial-image-overlay" />

//                 {/* TOP INFO */}
//                 <div className="testimonial-top">
//                   <span className="testimonial-number">
//                     0{testimonial.id}
//                   </span>

//                   <span className="testimonial-quote-icon">
//                     “
//                   </span>
//                 </div>

//                 {/* BOTTOM CONTENT */}
//                 <div className="testimonial-bottom">

//                   <div className="testimonial-person">
//                     <h3>{testimonial.name}</h3>
//                     {/* <span>{testimonial.role}</span> */}
//                   </div>

//                   <div className="testimonial-expand">

//                     <p className="testimonial-quote">
//                       {testimonial.quote}
//                     </p>

//                     <div className="testimonial-footer">
//                       <span>CLIENT EXPERIENCE</span>

//                       <span className="testimonial-arrow">
//                         ↗
//                       </span>
//                     </div>

//                   </div>
//                 </div>

//               </article>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import { useState } from "react";
import "../styles/Testimonials.css";
import AnimatedText from "./AnimatedText";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Property Buyer",
    image: "/testimonial-1.jpg",
    quote:
      "Honey made the entire property buying experience smooth and stress-free. Her understanding of the market and attention to detail made all the difference.",
  },
  {
    id: 2,
    name: "Fatima Al Mansoori",
    role: "Homeowner",
    image: "/testimonial-2.jpg",
    quote:
      "The process felt personal from the very beginning. Honey understood exactly what we were looking for and helped us find a place that truly feels like home.",
  },
  {
    id: 3,
    name: "Sunil Sharma",
    role: "Real Estate Investor",
    image: "/testimonial-3.jpeg",
    quote:
      "Professional, transparent, and genuinely committed. I appreciated the honest advice and the way every detail was handled with care.",
  },
];

const Testimonials = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="testimonials-section" id="testimonial">
      <div className="testimonials-container">

        {/* SECTION HEADING - UNCHANGED */}
        <div className="testimonials-header">
          <span className="testimonials-label">
            CLIENT STORIES
          </span>

          <AnimatedText
            as="h2"
            className="testimonials-heading"
            stagger={0.025}
          >
            Trust built on
            <br />
            <strong className="testimonials-heading-highlight">
              real experiences.
            </strong>
          </AnimatedText>

          <AnimatedText
            as="p"
            className="testimonials-intro"
            stagger={0.012}
            text="Every successful property journey begins with trust. Here's what my clients have to say."
          />
        </div>

        {/* TESTIMONIAL CARDS */}
        <div
          className={`testimonials-grid ${
            activeCard !== null ? "has-active-card" : ""
          }`}
        >
          {testimonials.map((testimonial) => {
            const isActive = activeCard === testimonial.id;
            const isBlurred =
              activeCard !== null && !isActive;

            return (
              <article
                key={testimonial.id}
                className={`testimonial-card ${
                  isActive ? "is-active" : ""
                } ${isBlurred ? "is-blurred" : ""}`}
                onMouseEnter={() =>
                  setActiveCard(testimonial.id)
                }
                onMouseLeave={() =>
                  setActiveCard(null)
                }
                onFocus={() =>
                  setActiveCard(testimonial.id)
                }
                onBlur={() =>
                  setActiveCard(null)
                }
                onClick={() =>
                  handleCardClick(testimonial.id)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(testimonial.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`Read testimonial from ${testimonial.name}`}
              >
                {/* CLIENT IMAGE */}
                <div className="testimonial-avatar-wrap">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                </div>

                {/* REVIEW CONTENT */}
                <div className="testimonial-content">

                  <div className="testimonial-person">
                    <div>
                      <h3>{testimonial.name}</h3>
                      {/* <span className="testimonial-role">
                        {testimonial.role}
                      </span> */}
                    </div>

                    {/* <span className="testimonial-google-mark">
                      <span>G</span>
                    </span> */}
                  </div>

                  <div className="testimonial-rating">
                    <span>★★★★★</span>
                    <small>5.0</small>
                  </div>

                  <p className="testimonial-quote">
                    “{testimonial.quote}”
                  </p>

                  <div className="testimonial-footer">
                    <span>CLIENT EXPERIENCE</span>
                    <span className="testimonial-arrow">↗</span>
                  </div>

                </div>

                {/* INITIAL CARD LABEL */}
                <div className="testimonial-initial-info">
                  <span className="testimonial-number">
                    0{testimonial.id}
                  </span>
                  <h3>{testimonial.name}</h3>
                  <span>VIEW CLIENT STORY ↗</span>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

