import Home from "./home";
import { render, screen, getByTestId } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("test edge cases for links on the homepage", () => {
  it("check attribute of button that starts the game", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const startGame = screen.getByTestId("play-game") as HTMLAnchorElement;

    expect(startGame.getAttribute("href")).toBe("/game");
    expect(startGame).toBeInTheDocument();
  });
});
