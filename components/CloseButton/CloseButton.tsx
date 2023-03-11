import React from 'react';
import { Wrapper, Circle, Line } from './styledComponents';

interface CloseButton {
  isModal: boolean,
}

const CloseButton = (props: CloseButton) => {
  return (
    <Wrapper isModal={props.isModal}>
      <Circle>
        <Line />
        <Line />
      </Circle>
    </Wrapper>
  );
};

export default CloseButton;
