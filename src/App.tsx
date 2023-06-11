import React, { useState } from "react";
import Home from "./Components/home";
import Header from "./Components/Header";
import Game from "./Components/game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Game2 from "./Components/game2";
import Game3 from "./Components/game3";
import { TheModal } from "./Styles/Modal.style";

function App() {
  const pageCoordinate = (e: React.MouseEvent) => {
    console.log(e.pageX + " x axis");
    console.log(e.pageY + " y axis");
  };

  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={<Game onClick={(e) => pageCoordinate(e)} />}
          />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/game3" element={<Game3 />} />
        </Routes>
        <TheModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
