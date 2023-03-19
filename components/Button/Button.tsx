import React from 'react';
import { ButtonContainer } from './styledComponents';

const Button = (props: any) => {
  return <ButtonContainer><p>{props.text}</p></ButtonContainer>;
};

export default Button;
