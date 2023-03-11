import styled from 'styled-components';

interface WrapperTypes {
  isModal: boolean,
};

export const Wrapper = styled.div<WrapperTypes>`
  position: absolute;
  justify-content: center;
  align-items: center;

  ${props => props.isModal && `
    z-index: 1000;
    top: -10px;
    right: -10px;
  `}
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: hsl(100, 100%, 100%);
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
