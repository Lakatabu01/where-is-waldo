import React from "react";
import "./App.css";
import Home from "./Components/home";
import Header from "./Components/Header";
import Game from "./Components/game";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
