import styled from "styled-components";
import waldo from "../Assets/waldo.jpg";
import odlaw from "../Assets/odlaw.jpg";
import wizard from "../Assets/wizard.jpeg";

const CharacterImage = styled.img`
  height: 50px;
  width: 50px;
  margin: 10px 10px -15px 10px;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  color: black;
  align-items: center;
  padding: 3px;
  height: 100px;
`;

const ImageGroup = () => {
  return (
    <DivContainer>
      <div>
        <CharacterImage src={waldo} />
        <p> Waldo</p>
      </div>

      <div>
        <CharacterImage src={odlaw} />
        <p>Odlaw</p>
      </div>

      <div>
        <CharacterImage src={wizard} />
        <p>Wizard</p>
      </div>
    </DivContainer>
  );
};

export default ImageGroup;
