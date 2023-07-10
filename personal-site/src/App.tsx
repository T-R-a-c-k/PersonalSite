import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Employment from "./Pages/Employment";
import Projects from "./Pages/Projects";
import TechnicalSkills from "./Pages/TechnicalSkills";
import Header from "./components/header";
import Footer from "./components/footer";

export type IAppProps = {};

const INTERVAL_NUMBER = 1200;

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Header interval={INTERVAL_NUMBER} />
      <Routes>
        <Route path="/" element={<Home interval={1000} />} />
        <Route
          path="/education"
          element={<Education interval={INTERVAL_NUMBER} />}
        />
        <Route
          path="/employment"
          element={<Employment interval={INTERVAL_NUMBER} />}
        />
        <Route
          path="/projects"
          element={<Projects interval={INTERVAL_NUMBER} />}
        />
        <Route
          path="/technical_skills"
          element={<TechnicalSkills interval={INTERVAL_NUMBER} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
