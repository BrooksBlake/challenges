import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Blog from "./components/Blog";

function App() {
  return (
    <div style={{ width: "100vw"}} className="App">
      <Landing />
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/singleblog">
            <Blog />
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
