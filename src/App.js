import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";
import Contactme from "./components/contactme/contactme";
import Errorpage from "./components/error/errorpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contactme" element={<Contactme />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
