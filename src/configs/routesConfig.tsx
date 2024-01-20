/* After creating a new page component, add them here to auto update nav bar and routing.*/

import HomePage from "../components/homePage";
import articlesPage from "../components/articlesPage";
import projectsPage from "../components/projectsPage";
import demosPage from "../components/demosPage";
import cvPage from "../components/cvPage";

const navItems = [
  { name: "home", path: "/", component: HomePage },
  { name: "Articles", path: "/articles", component: articlesPage },
  { name: "Projects", path: "/projects", component: projectsPage },
  { name: "Demos", path: "/demos", component: demosPage },
  { name: "CVPage", path: "/cv", component: cvPage },
];
export default navItems;
