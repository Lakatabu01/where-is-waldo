import { Button as TheButton } from "./Buttons.styles";
import { render, getByTestId, screen } from "@testing-library/react";
import { GameDisplay } from "./GameDisplay.style";
import { MemoryRouter } from "react-router-dom";

describe("button", () => {
  it("Should contain the right styling", () => {
    const { getByTestId } = render(
      <TheButton data-testid="button" bgColor="blue" />
    );
    const button = getByTestId("button") as HTMLButtonElement;

    expect(button).toHaveStyle(`
    border-radius: 4%;
    padding:  10px 25px;
    margin: 2px;
    `);
  });

  it;
});

describe("Check if image is displayed on the homepage", () => {
  it("image should be rendered appropriately", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <GameDisplay />
      </MemoryRouter>
    );
    const image = getByTestId("image");

    expect(image).toHaveStyle(`
    width: 600px;
    height: 400px;
    cursor: pointer;
        `);
  });
});
