import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home interval={500} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
