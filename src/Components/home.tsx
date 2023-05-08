import React, { FC } from "react";
import { GameDisplay } from "../Styles/GameDisplay.style";
import { Button } from "../Styles/Buttons.styles";
import { NavLink } from "react-router-dom";

const Home: FC = () => {
  return (
    <div>
      <GameDisplay />

      <NavLink to="/game" data-testid="play-game">
        <Button bgColor="white"> Start Game</Button>
      </NavLink>
    </div>
  );
};

export default Home;
