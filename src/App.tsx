import React, { useState } from "react";
import Home from "./Components/home";
import Header from "./Components/Header";
import Game from "./Components/game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyles";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
