import React from 'react';
import { StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

export const Input:React.VFC<InputProps> = ({
  id,
  type,
  icon,
  isError,
  ...restProps

}) => {
  function chooseInputType(inputType:string) {
    if (inputType === 'password') {
      return restProps.isSecurePassword ? 'text' : 'password';
    }
    return inputType;
  }
  return (<StyledInput id={id} isError={isError} icon={icon} type={chooseInputType(type)} {...restProps} />);
};
