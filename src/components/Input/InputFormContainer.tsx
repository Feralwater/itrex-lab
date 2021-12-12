import React, { useState } from 'react';
import {
  InputContainer, InputErrorMessage, InputPasswordIcon,
} from './Input.styles';
import { InputProps } from './Input.types';
import { Input } from './Input';

export const InputFormContainer:React.VFC<InputProps> = ({
  type,
  icon,
  iconURL,
  isError,
  errorText,
  ...props
}) => {
  const [isSecurePassword, setIsSecurePassword] = useState<boolean>(true);

  const onEyeIconClickHandler = () => setIsSecurePassword((prevState) => !prevState);

  return (
    <InputContainer icon={icon} iconURL={iconURL}>
      <Input type={type} icon={icon} {...props} />
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
