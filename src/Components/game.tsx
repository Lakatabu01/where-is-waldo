import React from "react";
import GamePhoto from "../Styles/GamePhoto";
import { FC } from "react";
import coordinates from "./coordinates";
import Highlighter from "../Styles/Highlighter.style";
import CharacterSelector from "../Styles/CharacterSelector";
import { Button } from "../Styles/Buttons.styles";
import { fetchCoordinates } from "./coordinates";
import { TheModal } from "../Styles/Modal.style";

coordinates();

interface GameProp {
  onClick?: React.MouseEventHandler;
}

const Game: FC<GameProp> = ({ onClick }) => {
  const image =
    "https://firebasestorage.googleapis.com/v0/b/where-is-waldo-f828f.appspot.com/o/where's-waldo1.jpg?alt=media&token=ef608e8f-1542-44cc-a3c9-f9cc957122c1";
  let currentUserSelection: number[] = [];

  const highlight = (e: React.MouseEvent<Element, MouseEvent>) => {
    const highlighter = document.getElementById("marker");

    if (highlighter) {
      highlighter.style.display = "block";
      highlighter.style.top = e.pageY - 120 + "px";
      highlighter.style.left = e.pageX - 20 + "px";
      currentUserSelection = [e.pageX, e.pageY];
      displayOptions(e);

      setTimeout(unhighlight, 750);
    }
  };

  const unhighlight = () => {
    const highlighter = document.getElementById("marker");
    if (highlighter) {
      highlighter.style.display = "none";
    }
  };

  const displayOptions = (e: React.MouseEvent<Element, MouseEvent>) => {
    const selector = document.getElementById("selector");
    if (selector) {
      selector.style.display = "flex";
      selector.style.top = e.pageY - 120 + "px";
      selector.style.left = e.pageX + 50 + "px";
      setTimeout(removeOptions, 3000);
    }
  };

  const removeOptions = () => {
    const selector = document.getElementById("selector");
    if (selector) {
      selector.style.display = "none";
    }
  };

  const waldoMessage = "Bravo you found Waldo";
  const wallyMessage = "Bravo you found Odlaw";
  const wizardMessage = "Bravo you found the Wizard";

  return (
    <div style={{ position: "relative" }} onClick={onClick}>
      <GamePhoto id="game-image" src={image} onClick={highlight} />
      <Highlighter id="marker" />
      <CharacterSelector id="selector">
        <Button
          bgColor="white"
          onClick={() =>
            fetchCoordinates("Waldo", currentUserSelection, waldoMessage)
          }
        >
          Waldo
        </Button>
        <Button
          bgColor="white"
          onClick={() =>
            fetchCoordinates("Wally", currentUserSelection, wallyMessage)
          }
        >
          Odlaw
        </Button>
        <Button
          bgColor="white"
          onClick={() =>
            fetchCoordinates("Wizard", currentUserSelection, wizardMessage)
          }
        >
          Wizard
        </Button>
      </CharacterSelector>

      <TheModal />
    </div>
  );
};

export default Game;
