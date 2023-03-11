import React from 'react';
import { Wrapper, Arrow, Line } from './styledComponents';

interface CloseButton {}

const CloseButton = (props: CloseButton) => {
  return (
    <Wrapper>
      <Arrow>
        <Line />
        <Line />
      </Arrow>
    </Wrapper>
  );
};

export default CloseButton;
