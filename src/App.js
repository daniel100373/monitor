import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import Homepage from "./pages/HomePage";
import Event from "./pages/Event";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
