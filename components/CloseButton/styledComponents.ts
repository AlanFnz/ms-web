import styled from 'styled-components';

interface WrapperTypes {
  isModal: boolean,
};

export const Wrapper = styled.div<WrapperTypes>`
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${props => props.isModal && `
    z-index: 1000;
    top: -20px;
    right: -20px;
  `}
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-style: solid;
  border-width: 2px;
  border-color: #000;
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
  background: #000;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(45deg);

  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
