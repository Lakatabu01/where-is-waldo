import styled from "styled-components";
import level2 from "../Assets/where's-waldo2.jpg";
import level3 from "../Assets/where's-waldo3.jpg";
import { NavLink } from "react-router-dom";

const Levels = styled.img`
  width: 300px;
  height: 400px;
  cursor: pointer;

  & {
    :hover {
      border: 3px solid purple;
    }
  }
`;

export const SetLevels = styled.div`
  border-color: 1px solid black;
  padding: 5px;
  margin: 5px 5px 30px 5px;
  display: flex;
  justify-content: space-around;
`;

const PhotoCaption = styled.h4`
  text-decoration: none;
  color: purple;
`;

export const GameDisplay = () => {
  const image =
    "https://firebasestorage.googleapis.com/v0/b/where-is-waldo-f828f.appspot.com/o/where's-waldo1.jpg?alt=media&token=ef608e8f-1542-44cc-a3c9-f9cc957122c1";
  return (
    <SetLevels>
      <div>
        <NavLink to="/game">
          <Levels src={image} />
        </NavLink>
        <PhotoCaption>Level 1</PhotoCaption>
      </div>

      <div>
        <NavLink to="/game2">
          <Levels src={level2} />
        </NavLink>
        <PhotoCaption>Level 2</PhotoCaption>
      </div>

      <div>
        <NavLink to="/game3">
          <Levels src={level3} />
        </NavLink>
        <PhotoCaption>Level 3</PhotoCaption>
      </div>
    </SetLevels>
  );
};
