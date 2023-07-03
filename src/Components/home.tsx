import React, { FC, useEffect } from "react";
import { GameDisplay, Layout, ButtonGroup } from "../Styles/GameDisplay.style";
import { Button } from "../Styles/Buttons.styles";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import { check } from "../Features/ReloadSlice";

const Home: FC = () => {
  interface Value {
    reload: { value: { reload: boolean } };
  }

  const reloadState = useSelector((state: Value) => state.reload.value);
  //const dispatch = useDispatch()

  useEffect(() => {
    if (reloadState.reload == true) {
      document.location.reload();
    }
  }, []);

  return (
    <Layout>
      <GameDisplay />

      <ButtonGroup>
        <NavLink to="/game" data-testid="play-game">
          <Button bgColor="gold"> Start Game</Button>
        </NavLink>
      </ButtonGroup>
    </Layout>
  );
};

export default Home;
