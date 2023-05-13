import React from "react";
import Home from "./Components/home";
import Header from "./Components/Header";
import Game from "./Components/game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyles";
import Game2 from "./Components/game2";
import Game3 from "./Components/game3";

function App() {
  const pageCoordinate = (e: React.MouseEvent) => {
    console.log(e.pageX);
    console.log(e.pageY);
  };

  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Header onMouseEnter={(e) => pageCoordinate(e)} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game2" element={<Game2 />} />
          <Route path="/game3" element={<Game3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
