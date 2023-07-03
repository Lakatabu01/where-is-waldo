import React from "react";
import { Button } from "../Styles/Buttons.styles";
import { NavLink } from "react-router-dom";
import ImageGroup, { DivContainer } from "../Styles/CharacterImage";
import TheTime from "./theTime";

const Header: React.FC = () => {
  return (
    <DivContainer>
      <div>
        <NavLink to="/">
          <Button bgColor="purple" color="white">
            {" "}
            Home{" "}
          </Button>
        </NavLink>
      </div>

      <div>
        <h1>Where's Waldo </h1>
      </div>

      <ImageGroup />
      <TheTime />
    </DivContainer>
  );
};

export default Header;
