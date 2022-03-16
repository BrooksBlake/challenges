import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Blog from "./components/Blog";

function App() {
  return (
    <div style={{ width: "100vw", maxHeight: "1440px" }} className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/singleblog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
