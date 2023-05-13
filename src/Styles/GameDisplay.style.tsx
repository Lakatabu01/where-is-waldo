import styled from "styled-components";
import level1 from "../Assets/where's-waldo1.jpg";
import level2 from "../Assets/where's-waldo2.jpg";
import level3 from "../Assets/where's-waldo3.jpg";

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

export const GameDisplay = () => {
  return (
    <SetLevels>
      <div>
        <Levels src={level1} />
        <h4>Level 1</h4>
      </div>

      <div>
        <Levels src={level2} />
        <h4>Level 2</h4>
      </div>

      <div>
        <Levels src={level3} />
        <h4>Level 3</h4>
      </div>
    </SetLevels>
  );
};
