import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routesConfig from "./configs/routesConfig";

function App() {
  return (
    <Router>
      <Routes>
        {routesConfig.map((item, index) => (
          <Route
            path={item.path}
            element={<item.component />}
            key={index}
          ></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
