import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import Articles from "./components/Articles";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
