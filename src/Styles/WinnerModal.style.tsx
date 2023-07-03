import styled from "styled-components";
import { FC } from "react";

const Modal = styled.div`
  display: block;
  position: fixed; /* Stay in place */
  z-index: 4; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
`;
export { Modal, ModalContent, Span, Text, InputGroup, Input, Label, Button };

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
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

const Text = styled.p`
  color: purple;
`;

const InputGroup = styled.div`
  margin: 10px;
`;

const Label = styled.label`
  color: purple;
`;

const Input = styled.input`
  width: 50%;
  color: black;
  margin-left: 2%;
`;

const Button = styled.button`
  padding: 8px;
  color: white;
  background-color: purple;
  cursor: pointer;
  border-radius: 4px;
`;

export const WinnerModal: FC = () => {
  const closeModal = () => {
    const close = document.getElementById("myModal");
    if (close) {
      close.style.display = "none";
    }
  };

  return (
    <Modal id="TheModal">
      <ModalContent>
        {/*<Span onClick={closeModal}> &times; </Span>*/}
        <Text id="message"> Congratulations, you won!</Text>
        <InputGroup>
          <Label>
            Enter your name
            <Input />
          </Label>
        </InputGroup>
      </ModalContent>
    </Modal>
  );
};
