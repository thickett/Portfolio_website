import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import Articles from "./components/Articles";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Demos" element={<Demos />} />
      </Routes>
    </Router>
  );
}

export default App;
