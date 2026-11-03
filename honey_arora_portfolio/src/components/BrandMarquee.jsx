import "../styles/BrandMarquee.css";

const brands = ["EMAAR", "DAMAC", "SOBHA", "ELLINGTON"];

const BrandMarquee = () => {
  return (
    <section className="brand-marquee">
      <div className="marquee-track">
        {[...brands, ...brands, ...brands].map((brand, index) => (
          <div className="brand-item" key={index}>
            <span>{brand}</span>
            <span className="brand-star">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;