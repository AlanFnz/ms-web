import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  display: block;
  background: white;
  width: 70%;
  height: 70%;
  padding: 1rem;
  border-radius: 1rem;
`;
