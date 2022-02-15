import React, { useState } from 'react';
import {
  InputContainer, InputErrorMessage, InputPasswordIconNotVisible, InputPasswordIconVisible, Label,
} from './Input.styles';
import { InputProps } from './Input.types';
import { Input } from './Input';
import { RequireSign } from '../Select/Select.styles';

export const InputFormContainer:React.VFC<InputProps> = ({
  type,
  icon,
  iconURL,
  isError,
  errorText,
  isRequire,
  id,
  label,
  ...props
}) => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(false);

  const onEyeIconClickHandler = () => setIsSecurePassword((prevState) => !prevState);

  return (
    <>
      <Label htmlFor={id}>
        <span>
          {label}
          {isRequire && <RequireSign>*</RequireSign>}
        </span>
      </Label>
      <InputContainer icon={icon} iconURL={iconURL}>
        <Input type={type} icon={icon} label={label} id={id} isRequire={isRequire} isSecurePassword={isSecurePassword} {...props} />
        {type === 'password' && (
        <>
          <InputPasswordIconNotVisible
            isVisible={isSecurePassword}
            onClick={onEyeIconClickHandler}
          />
          <InputPasswordIconVisible
            isVisible={isSecurePassword}
            onClick={onEyeIconClickHandler}
          />
        </>
        )}
        {isError && <InputErrorMessage>{errorText}</InputErrorMessage>}
      </InputContainer>
    </>
  );
};
