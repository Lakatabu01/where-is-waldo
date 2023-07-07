import Home from "./Components/home";
import Header from "./Components/Header";
import Game from "./Components/game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <div data-testid="test-all">
        <GlobalStyle />
        <Header />

        <Routes>
          <Route path="/where-is-waldo/" element={<Home />} />
          <Route path="/where-is-waldo/game" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
