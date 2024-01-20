import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routesConfig from "./configs/routesConfig";

function App() {
  return (
    <Router>
      <Routes>
        {routesConfig.map((item) => (
          <Route path={item.path} element={<item.component />}></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
