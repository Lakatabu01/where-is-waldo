import styled from "styled-components";

const ScoreModal = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
`;
export { ScoreModal, ModalContent, Span, Text, Button, Flex };

const ModalContent = styled.div`
  background-color: #ffd700;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
`;

const Span = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Text = styled.div`
  color: purple;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 4px;
`;

const Flex = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: 2px;
`;
