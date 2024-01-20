import GenericLayout from "./GenericLayout";
import "./styles/nameLogoContainer.css";
import "./styles/bodyText.css";
import "./styles/SocialMediaIcons.css";
import "./styles/homePage.css";
import socialmediaConfig from "../configs/socialmediaConfig";
function HomePage() {
  return (
    <GenericLayout pageTitle="">
      <div className="Homepage-central-container">
        <div className="name-logo-container">
          <span className="name">Callum</span>
          <img
            src="src/assets/logo_idea_1-removebg-preview.png"
            alt="Logo"
            className="logo"
          />
          <span className="name">Thickett</span>
        </div>

        <section className="additonal-information">
          <p className="generic_body">
            Data Science and NLP enthusiast currently working as a{" "}
            <strong>Product Analyst - Conversational AI </strong>at{" "}
            <a
              href="https://www.thestepstonegroup.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              stepstones
            </a>
            .
          </p>
          <div className="Social-media-links">
            {socialmediaConfig.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: item.colour }}
              >
                <item.image className="react-icon"></item.image>
              </a>
            ))}
          </div>
        </section>
      </div>
    </GenericLayout>
  );
}
export default HomePage;
