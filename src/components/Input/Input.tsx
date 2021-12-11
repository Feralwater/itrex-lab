import React, { useState } from 'react';
import {
  InputContainer, InputErrorMessage, InputPasswordIcon, StyledInput,
} from './Input.styles';
import { InputProps } from './Input.types';

const Input:React.VFC<InputProps> = ({
  label,
  inputName,
  type,
  icon,
  iconURL,
  isError,
  errorText,
  ...restProps
}) => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);
  function chooseInputType(inputType:string) {
    if (inputType === 'password') {
      return isSecurePassword ? 'text' : 'password';
    }
    return inputType;
  }

  const onEyeIconClickHandler = () => setIsSecurePassword((prevState) => !prevState);

  return (
    <InputContainer icon={icon} iconURL={iconURL}>
      <label htmlFor={inputName}>
        {label}
        <StyledInput isError={isError} icon={icon} name={inputName} type={chooseInputType(type)} {...restProps} />
      </label>
      {type === 'password' && (
        <InputPasswordIcon
          isVisible={isSecurePassword}
          onClick={onEyeIconClickHandler}
        />
      )}
      {isError && <InputErrorMessage>{errorText}</InputErrorMessage>}
    </InputContainer>
  );
};
export default Input;
