import styled from "styled-components";

const Modal = styled.div`
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
export { ModalContent, Span, Text };

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
  color: black;
`;

export const TheModal = () => {
  const closeModal = () => {
    const close = document.getElementById("myModal");
    if (close) {
      close.style.display = "none";
    }
  };

  return (
    <Modal id="myModal">
      <ModalContent>
        <Span onClick={closeModal}> &times; </Span>
        <Text id="message">
          Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur.
        </Text>
      </ModalContent>
    </Modal>
  );
};
