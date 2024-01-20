import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import ArticlesPage from "./components/articlesPage";
import ProjectsPage from "./components/projectsPage";
import DemosPage from "./components/demosPage";
import CvPage from "./components/cvPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Articles" element={<ArticlesPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Demos" element={<DemosPage />} />
        <Route path="/CV" element={<CvPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
