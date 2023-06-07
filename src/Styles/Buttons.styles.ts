import styled from "styled-components";

interface Prop {
  bgColor: string;
  color?: string;
}

export const Button = styled.button<Prop>`
  background-color: ${(props) => props.bgColor};
  border-radius: 1px solid transparent;
  padding: 10px 25px;
  margin: 2px;
  cursor: pointer;
  color: ${(props) => props.color};
  border-radius: 4%;
  font-size: 15px;
  font-weight: bolder;
  z-index: 2;
`;
