import GenericLayoutBackPages from "./GenericLayoutBackPages";
import GridCards from "./gridCards";
import { mediumContent } from "../configs/contentConfig";
import { Container } from "react-bootstrap";

function articlesPage() {
  return (
    <GenericLayoutBackPages
      pageTitle="Articles"
      pageSubTitle="From time to time I write articles on Medium outlining my recent work and thoughts. I also have some tutorial-esk articles."
    >
      <Container>
        <div>
          <GridCards all_content={mediumContent}></GridCards>
        </div>
      </Container>
    </GenericLayoutBackPages>
  );
}
export default articlesPage;
