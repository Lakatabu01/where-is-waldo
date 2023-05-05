import React, { FC } from "react";
import Header from "./Header";
import { GameDisplay } from "../Styles/GameDisplay.style";

const Home: FC = () => {
  return (
    <div>
      {" "}
      <Header />
      <GameDisplay />
    </div>
  );
};

export default Home;
