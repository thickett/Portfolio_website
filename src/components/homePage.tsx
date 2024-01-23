import GenericLayout from "./GenericLayout";
import AboutMe from "./aboutMe";
import GridCards from "./gridCards";
import { allContent } from "../configs/contentConfig";
import "./styles/nameLogoContainer.css";
import "./styles/bodyText.css";
import "./styles/SocialMediaIcons.css";
import "./styles/homePage.css";
import "./styles/PageLayout.css";

import socialmediaConfig from "../configs/socialmediaConfig";
function HomePage() {
  return (
    <div className="main-container">
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
                Stepstones
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
            <div>
              <AboutMe
                imageSrc="src/assets/face_shot.jpg"
                imageAlt="A picture of me smiling"
                textContent="yo it is I
                whats up"
              ></AboutMe>
            </div>
          </section>
          <div>
            <p className="generic_body large-vertical-margin horizontal-line-top">
              <strong>Recent activity</strong>
            </p>

            <GridCards all_content={allContent}></GridCards>
          </div>
        </div>
      </GenericLayout>
    </div>
  );
}
export default HomePage;
