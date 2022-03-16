import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Blog from "./components/Blog";
import "./App.css"

function App() {
  return (
    <div className="App">
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
