
import "../styles/NormalButton.css";

const NormalButton = ({
  children = "Jetzt unverbindlich anfragen",
  href = "#contact",
  className = "",
}) => {
  return (
    <a href={href} className={`cta-button ${className}`}>
      <span className="cta-button-text">{children}</span>

      <span className="cta-button-icon">
        <span className="cta-arrow">→</span>
      </span>
    </a>
  );
};

export default NormalButton;
