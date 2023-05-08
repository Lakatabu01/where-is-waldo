import React from "react";
import { Button } from "../Styles/Buttons.styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <NavLink to="/">
          <Button bgColor="red"> Home </Button>
        </NavLink>
      </div>

      <div>
        <h1>Where's Waldo </h1>
      </div>
    </div>
  );
};

export default Header;
