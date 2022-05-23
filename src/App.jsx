import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import About from "./pages/About/About"

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/comingsoon" />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
