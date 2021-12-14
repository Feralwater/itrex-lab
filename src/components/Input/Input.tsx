import React from 'react';
import { StyledInput } from './Input.styles';
import { InputProps } from './Input.types';

export const Input:React.VFC<InputProps> = ({
  label,
  id,
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
    <label htmlFor={id}>
      {label}
      <StyledInput id={id} isError={isError} icon={icon} type={chooseInputType(type)} {...restProps} />
    </label>
  );
};
