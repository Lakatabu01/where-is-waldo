import { Button as TheButton } from "./Buttons.styles";
import { render, getByTestId, screen } from "@testing-library/react";
import { GameDisplay } from "./GameDisplay.style";

describe("button", () => {
  it("Should contain the right styling", () => {
    const { getByTestId } = render(
      <TheButton data-testid="button" bgColor="blue" />
    );
    const button = getByTestId("button") as HTMLButtonElement;

    expect(button).toHaveStyle(`
    border-radius: 1px solid black;
    padding: 5px;
    margin: 2px;
    `);
  });

  it;
});

describe("Check if image is displayed on the homepage", () => {
  it("image should be rendered appropriately", () => {
    const { getByTestId } = render(<GameDisplay data-testid="image" />);
    const image = getByTestId("image") as HTMLDivElement;

    expect(image).toHaveStyle(`
    border-color: 1px solid black;
    padding: 5px;
    margin: 2px;
    height: 80px;
    width: 80px; 
        `);
  });
});
