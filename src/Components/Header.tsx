import React from "react";
import { Button } from "../Styles/Buttons.styles";
import { NavLink } from "react-router-dom";
import ImageGroup, { DivContainer } from "../Styles/CharacterImage";

interface HeaderProps {
  onMouseEnter: React.MouseEventHandler;
}

const Header: React.FC<HeaderProps> = ({ onMouseEnter }) => {
  return (
    <DivContainer onMouseEnter={onMouseEnter}>
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
    </DivContainer>
  );
};

export default Header;
