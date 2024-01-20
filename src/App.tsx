import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import Articles from "./components/Articles";
import Projects from "./components/Projects";
import Demos from "./components/Demos";
import CVPage from "./components/CV";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Demos" element={<Demos />} />
        <Route path="/CV" element={<CVPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
