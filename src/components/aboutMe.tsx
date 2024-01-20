/*component that houses the about me section with an image */
import "./styles/aboutMe.css";

interface AboutMeProps {
  imageSrc: string;
  imageAlt: string;
  textContent: string;
}

function aboutMe({ imageSrc, imageAlt, textContent }: AboutMeProps) {
  return (
    <div className="about-me-container">
      <div className="about-me-text">
        <p>{textContent}</p>
      </div>
      <div className="about-me-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}
export default aboutMe;
