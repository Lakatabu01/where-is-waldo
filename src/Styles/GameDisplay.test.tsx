import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { GameDisplay } from "./GameDisplay.style";

describe("GameDisplay", () => {
  it("should render the image with the correct source", () => {
    render(
      <MemoryRouter>
        <GameDisplay />
      </MemoryRouter>
    );

    const image = screen.getByTestId("image") as HTMLImageElement;
    const photoCaption = screen.getByText("Let's go");

    // Assert image source
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(
      "https://firebasestorage.googleapis.com/v0/b/where-is-waldo-f828f.appspot.com/o/where's-waldo1.jpg?alt=media&token=ef608e8f-1542-44cc-a3c9-f9cc957122c1"
    );

    // Assert photo caption
    expect(photoCaption).toBeInTheDocument();
  });
});
