import styled from "styled-components";

interface Prop {
  bgColor: string;
}

export const Button = styled.button<Prop>`
  background-color: ${(props) => props.bgColor};
  border-radius: 1px solid black;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
`;
