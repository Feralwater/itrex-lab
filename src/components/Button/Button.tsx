import React from 'react';
import StyledButton from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props} />
);

export default Button;
