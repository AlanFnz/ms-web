import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: hsl(20, 100%, 64%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: hsl(40, 100%, 30%);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 4px;
  border-radius: 2px;
  background: hsl(30, 100%, 80%);
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(45deg);

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
