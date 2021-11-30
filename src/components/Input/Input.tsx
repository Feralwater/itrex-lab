import React, { useState } from 'react';
import {
  InputContainer, InputErrorMessage, InputPasswordIcon, StyledInput,
} from './Input.styles';
import { TextInput } from './Input.types';

const Input:React.VFC<TextInput> = ({
  label, inputName, type, icon, iconURL, isError, errorText, ...restProps
}) => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);
  function chooseInputType(inputType:string) {
    if (inputType === 'password') {
      return isSecurePassword ? 'text' : 'password';
    }
    return inputType;
  }
  return (
    <InputContainer icon={icon} iconURL={iconURL}>
      <label htmlFor={inputName}>
        {label}
        <StyledInput isError={isError} icon={icon} name={inputName} type={chooseInputType(type)} {...restProps} />
      </label>
      {type === 'password' && (
        <InputPasswordIcon
          isVisible={isSecurePassword}
          onClick={() => setIsSecurePassword((prev) => !prev)}
        />
      )}
      {isError && <InputErrorMessage>{errorText}</InputErrorMessage>}
    </InputContainer>
  );
};
export default Input;
