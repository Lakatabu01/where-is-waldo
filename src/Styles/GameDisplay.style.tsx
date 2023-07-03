import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Levels = styled.img`
  width: 600px;
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

const PhotoCaption = styled.p`
  text-decoration: none;
  color: purple;
`;

export const Layout = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-around;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
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
        <PhotoCaption>Let's go </PhotoCaption>
      </div>
    </SetLevels>
  );
};
