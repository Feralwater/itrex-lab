import React from 'react';
import { StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

export const Input:React.VFC<InputProps> = ({
  label,
  inputName,
  type,
  icon,
  iconURL,
  isError,
  errorText,
  ...restProps
}) => {
  function chooseInputType(inputType:string) {
    if (inputType === 'password') {
      return restProps.isSecurePassword ? 'text' : 'password';
    }
    return inputType;
  }
  return (
    <label htmlFor={inputName}>
      {label}
      <StyledInput isError={isError} icon={icon} name={inputName} type={chooseInputType(type)} {...restProps} />
    </label>
  );
};
