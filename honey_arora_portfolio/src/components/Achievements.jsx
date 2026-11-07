
import "../styles/Achievements.css";

const achievements = [
  {
    id: 1,
    title: "Azizi Brokers Awards 2026",
    category: "Best Broker",
    year: "2024",
    description:
      " Proud to be recognised with the Broker Award by Azizi Developments for our dedication, performance and excellence.",
    image: "/achievements/achievement-11.jpeg",
  },
  {
    id: 2,
    title: "Azizi Brokers Briefing",
    category: "Brokers Briefing",
    year: "2024",
    description:
      "An insightful Broker Briefing Session with Azizi Developments, exploring new opportunities and upcoming launches.",
    image: "/achievements/achievement-22.jpeg",
  },
  {
    id: 3,
    title: "Peacehomes Brokers Meet",
    category: "Brokers Session",
    year: "2023",
    description:
      "A productive Broker Briefing Session with Peace Homes, discussing new projects and growth opportunities.",
    image: "/achievements/achievement-44.jpeg",
  },
  {
    id: 4,
    title: " Danube Brokers Session",
    category: "Brokers session ",
    year: "2023",
    description:
      "An insightful Broker Briefing Session with Danube Properties, exploring new launches and investment opportunities.",
    image: "/achievements/achievement-33.jpeg",
  },
  {
    id: 5,
    title: " Danube CEO Meet ",
    category: "CEO Meet",
    year: "2022",
    description:
      " An exclusive meeting with the CEO of Danube Properties, discussing vision, partnership and future growth.",
    image: "/achievements/achievement-55.jpeg",
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
          {/* <span className="achievement-year">{item.year}</span> */}

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
