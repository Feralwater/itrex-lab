import React from 'react';
import { Label, StyledInput } from './Input.styles';
import { InputProps } from './Input.types';
import { RequireSign } from '../Select/Select.styles';

export const Input:React.VFC<InputProps> = ({
  label,
  id,
  type,
  icon,
  iconURL,
  isError,
  errorText,
  isRequire,
  ...restProps
}) => {
  function chooseInputType(inputType:string) {
    if (inputType === 'password') {
      return restProps.isSecurePassword ? 'text' : 'password';
    }
    return inputType;
  }
  return (
    <Label htmlFor={id}>
      <span>
        {label}
        <RequireSign isRequire={isRequire}>
          *
        </RequireSign>
      </span>
      <StyledInput id={id} isError={isError} icon={icon} type={chooseInputType(type)} {...restProps} />
    </Label>
  );
};
