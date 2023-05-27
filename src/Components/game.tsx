import React from "react";
import GamePhoto from "../Styles/GamePhoto";
import { FC } from "react";
import coordinates from "./coordinates";

coordinates();

interface GameProp {
  onClick?: React.MouseEventHandler;
}

const Game: FC<GameProp> = ({ onClick }) => {
  const image =
    "https://firebasestorage.googleapis.com/v0/b/where-is-waldo-f828f.appspot.com/o/where's-waldo1.jpg?alt=media&token=ef608e8f-1542-44cc-a3c9-f9cc957122c1";
  return (
    <div onClick={onClick}>
      <GamePhoto id="game-image" src={image} />
    </div>
  );
};

export default Game;
