import GenericLayoutBackPages from "./GenericLayoutBackPages";
import GridCards from "./gridCards";
import { gitHubContent } from "../configs/contentConfig";
import { Container } from "react-bootstrap";

function projectsPage() {
  return (
    <>
      <GenericLayoutBackPages
        pageTitle="Projects"
        pageSubTitle="These are all my personal projects"
      >
        <div>
          <GridCards all_content={gitHubContent}></GridCards>
        </div>
      </GenericLayoutBackPages>
    </>
  );
}
export default projectsPage;
