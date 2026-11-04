
import { useState } from "react";
import "../styles/WhatWeSell.css";

const categories = [
  "All",
  "Bhivgati",
  "Emaar",
  "Soha",
  "Domac",
  "Ellington",
];

// Demo projects: replace names, images and descriptions
// with your actual property projects.
const projects = [
  {
    id: 1,
    name: "Luxury Residence",
    category: "Bhivgati",
    location: "Dubai",
    type: "Residential",
    image: "/projects/bhivgati-01.jpg",
    description:
      "A thoughtfully designed residential destination combining contemporary architecture, premium interiors and exceptional living.",
  },
  {
    id: 2,
    name: "Signature Living",
    category: "Emaar",
    location: "Dubai",
    type: "Luxury Apartments",
    image: "/projects/emaar-01.jpg",
    description:
      "Experience refined architecture, beautiful surroundings and a lifestyle designed around comfort and elegance.",
  },
  {
    id: 3,
    name: "Premium Residences",
    category: "Soha",
    location: "Dubai",
    type: "Residential",
    image: "/projects/soha-01.jpg",
    description:
      "A premium property destination with elegant spaces and modern architectural design.",
  },
  {
    id: 4,
    name: "Modern Architecture",
    category: "Domac",
    location: "Dubai",
    type: "Residential",
    image: "/projects/domac-01.jpg",
    description:
      "Discover a modern approach to residential living with thoughtfully planned spaces.",
  },
  {
    id: 5,
    name: "The Grand Collection",
    category: "Ellington",
    location: "Dubai",
    type: "Luxury Living",
    image: "/projects/ellington-01.jpg",
    description:
      "A sophisticated collection of residences focused on design, detail and timeless elegance.",
  },
  {
    id: 6,
    name: "Urban Collection",
    category: "Emaar",
    location: "Dubai",
    type: "Luxury Apartments",
    image: "/projects/emaar-02.jpg",
    description:
      "Contemporary residences offering an elevated urban lifestyle.",
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
