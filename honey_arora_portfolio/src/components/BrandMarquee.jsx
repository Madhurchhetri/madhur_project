
import "../styles/BrandMarquee.css";

const brands = [
  { name: "EMAAR", logo: "/logos/emaar.svg" },
  { name: "DAMAC", logo: "/logos/damac.webp" },
  { name: "SOBHA", logo: "/logos/sobha.svg" },
  { name: "ELLINGTON", logo: "/logos/ellington.png" },
];

const BrandMarquee = () => {
  return (
    <section className="brand-marquee">
      <div className="marquee-track">
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <div className="brand-item" key={index}>
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="brand-logo"
            />
            <span className="brand-star">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;
