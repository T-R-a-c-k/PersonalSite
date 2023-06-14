import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Employment from "./Pages/Employement";
import Projects from "./Pages/Projects";
import TechnicalSkills from "./Pages/TechnicalSkills";

export type IAppProps = {};

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home interval={500} />} />
        <Route path="/education" element={<Education />} />
        <Route path="/employement" element={<Employment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technical_skills" element={<TechnicalSkills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
