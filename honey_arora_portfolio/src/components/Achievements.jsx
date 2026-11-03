
import "../styles/Achievements.css";

const achievements = [
  {
    id: 1,
    title: "TOP REAL ESTATE PERFORMER",
    category: "PROFESSIONAL EXCELLENCE",
    year: "2024",
    description:
      "Recognised for outstanding performance and dedication in the luxury real estate industry.",
    image: "/achievements/achievement-1.jpg",
  },
  {
    id: 2,
    title: "EXCELLENCE IN SALES",
    category: "SALES ACHIEVEMENT",
    year: "2024",
    description:
      "Celebrating exceptional sales performance and successful property transactions.",
    image: "/achievements/achievement-2.jpg",
  },
  {
    id: 3,
    title: "CLIENT TRUST AWARD",
    category: "CLIENT RELATIONSHIPS",
    year: "2023",
    description:
      "Recognised for building meaningful relationships and delivering a trusted client experience.",
    image: "/achievements/achievement-3.jpg",
  },
  {
    id: 4,
    title: "PREMIUM PROPERTY EXPERT",
    category: "REAL ESTATE EXPERTISE",
    year: "2023",
    description:
      "A milestone celebrating expertise in premium residential and luxury properties.",
    image: "/achievements/achievement-4.jpg",
  },
  {
    id: 5,
    title: "OUTSTANDING CONTRIBUTION",
    category: "INDUSTRY RECOGNITION",
    year: "2022",
    description:
      "Recognised for dedication, professional growth and contribution to the real estate sector.",
    image: "/achievements/achievement-5.jpg",
  },
  {
    id: 6,
    title: "MILESTONE ACHIEVEMENT",
    category: "CAREER HIGHLIGHT",
    year: "2022",
    description:
      "A special milestone reflecting commitment, consistency and professional success.",
    image: "/achievements/achievement-6.jpg",
  },
];

const AchievementCard = ({ item }) => {
  return (
    <article className="achievement-card">
      <img
        src={item.image}
        alt={item.title}
        className="achievement-image"
      />

      <div className="achievement-overlay">
        <span className="achievement-category">
          {item.category}
        </span>

        <div className="achievement-details">
          <span className="achievement-year">{item.year}</span>

          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <span className="achievement-arrow">↗</span>
        </div>
      </div>
    </article>
  );
};

const Achievements = () => {
  const duplicatedAchievements = [
    ...achievements,
    ...achievements,
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-header">
        <div>
          <span className="achievements-label">
            MY JOURNEY & MILESTONES
          </span>

          <h2>
            ACHIEVEMENTS
            <span>.</span>
          </h2>
        </div>

        <p>
          Every achievement tells a story of dedication,
          hard work and the trust of people.
        </p>
      </div>

      <div className="achievement-marquee">
        <div className="achievement-track">
          {duplicatedAchievements.map((item, index) => (
            <AchievementCard
              key={`${item.id}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="achievements-footer">
        <span>MORE THAN JUST MILESTONES</span>
        <span>✦</span>
        <span>A JOURNEY OF EXCELLENCE</span>
      </div>
    </section>
  );
};

export default Achievements;
