import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Certificates from "../pages/Certificates";
import Skills from "../pages/Skills";
import Education from "../pages/Education";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default AppRoutes;
