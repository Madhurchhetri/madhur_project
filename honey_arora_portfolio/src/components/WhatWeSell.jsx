
import { useState , useLayoutEffect } from "react";
import "../styles/WhatWeSell.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categories = [
  "All",
  "Imtiaz",
  "Samana",
  "Beyond",
 
];

// Demo projects: replace names, images and descriptions
// with your actual property projects.
const projects = [
  {
    id: 1,
    name: " Kore By Imtiaz ",
    category: "Imtiaz",
    location: " DLRC ",
    type: " sale",
    image: "/projects/Imtiaz-01.WEBP",
    description:
      " Kore by Imtiaz is an inspiring residential project that draws its name from the body's centre of strength and stability, and it is designed entirely around human performance, longevity and healthy living. Far more than a residence with a gym, it brings together personalised training, intelligent fitness technology, nutrition-focused living and advanced recovery experiences, helping residents live with greater energy, balance and focus every day. The collection offers beautifully planned studios, one-bedroom and two-bedroom apartments, each created to support a truly holistic wellness lifestyle..",
  },
  {
    id: 2,
    name: " Downtown one ",
    category: "Samana",
    location: " Jabel Ali Downtown",
    type: " sale",
    image: "/projects/samana-01.WEBP",
    description:
      "Samana Downtown One stands as a bold architectural statement that bridges the present cityscape with its future horizon. The building’s striking silhouette, articulated details and strong lines convey a confident, contemporary character that distinguishes it from every angle. Balanced proportions and a refined structural rhythm give each residence a sense of purposeful elegance",
  },
  {
    id: 3,
    name: "Yards Plaza By Beyond",
    category: "Beyond",
    location: "City of arabia ",
    type: " Sale ",
    image: "/projects/Beyond-01.jpeg",
    description:
      " Arancia Yards Plaza is a premium commercial development set within the green masterplan of City of Arabia, designed as a serene urban sanctuary where architecture and nature exist in perfect harmony. The project comprises four elegant buildings surrounded by landscaped gardens, shaded walkways, and open spaces that create a seamless indoor-outdoor lifestyle. It offers a collection of spacious commercial and reatils shops with generous layouts, abundant natural light, private terraces, and floor-to-ceiling windows, all designed to provide a calm and balanced living experience",
  },
  
];

const WhatWeSell = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

        useLayoutEffect(() => {
  const timeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  return () => clearTimeout(timeout);
}, [activeCategory, selectedProject]);

  const handleCategory = (category) => {
    setActiveCategory(category);
    setSelectedProject(null);
  };

  const handleProject = (project) => {
    setSelectedProject((prev) =>
      prev?.id === project.id ? null : project
    );
  };

  return (
    <section className="sell-section" id="services">

      {/* BACKGROUND EFFECT */}
      <div className="sell-glow sell-glow-one" />
      <div className="sell-glow sell-glow-two" />

      <div className="sell-container">

        {/* SECTION HEADER */}
        <div className="sell-header">
          <div>
            <span className="sell-eyebrow">
              EXPLORE OUR PORTFOLIO
            </span>

            <h2>
              WHAT WE <strong>SELL.</strong>
            </h2>
          </div>

          <p>
            Discover exceptional properties from
            the world's most renowned developers.
            Find a space that matches your vision.
          </p>
        </div>

        {/* CATEGORY FILTER */}
        <div className="sell-categories">

          <div className="sell-category-label">
            EXPLORE BY DEVELOPER
          </div>

          <div className="sell-category-list" id="projects">
            {categories.map((category) => (
              <button
                key={category}
                className={`sell-category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* PROJECT COUNT */}
        <div className="sell-gallery-heading">
          <span>FEATURED PROJECTS</span>
          <span>
            {String(filteredProjects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* PROJECT GALLERY */}
        <div className="sell-gallery">

          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`sell-card ${
                selectedProject?.id === project.id
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleProject(project)}
            >

              <div className="sell-card-image">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />

                <div className="sell-card-overlay" />

                <span className="sell-card-number">
                  0{index + 1}
                </span>

                <span className="sell-card-category">
                  {project.category}
                </span>

                <div className="sell-card-content">
                  <span>{project.location}</span>

                  <h3>{project.name}</h3>

                  <div className="sell-card-explore">
                    <span>
                      {selectedProject?.id === project.id
                        ? "CLOSE DETAILS"
                        : "EXPLORE PROJECT"}
                    </span>

                    <span className="sell-card-arrow">
                      ↗
                    </span>
                  </div>
                </div>
              </div>

            </article>
          ))}

        </div>

        {/* EXPANDING PROJECT DETAILS */}
        {selectedProject && (
          <div className="sell-project-details" key={selectedProject.id}>

            <div className="sell-detail-top">
              <span>PROJECT OVERVIEW</span>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                CLOSE ×
              </button>
            </div>

            <div className="sell-detail-content">

              <div className="sell-detail-info">
                <span className="sell-eyebrow">
                  {selectedProject.category}
                </span>

                <h3>{selectedProject.name}</h3>

                <p>{selectedProject.description}</p>

                <div className="sell-detail-meta">
                  <div>
                    <span>LOCATION</span>
                    <strong>{selectedProject.location}</strong>
                  </div>

                  <div>
                    <span>PROPERTY TYPE</span>
                    <strong>{selectedProject.type}</strong>
                  </div>
                </div>

                <a href="#contact" className="sell-enquire-btn">
                  ENQUIRE ABOUT THIS PROJECT
                  <span>↗</span>
                </a>
              </div>

              <div className="sell-detail-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                />
              </div>

            </div>

          </div>
        )}

        {/* FOOTER */}
        <div className="sell-footer">
          <span>HONEY ARORA — REAL ESTATE</span>
          <span>DISCOVER YOUR NEXT ADDRESS ↗</span>
        </div>

      </div>
    </section>
  );
};

export default WhatWeSell;
