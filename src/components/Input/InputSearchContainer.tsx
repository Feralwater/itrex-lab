import React from 'react';
import Input from './Input';
import { SearchContainer } from './Input.styles';
import { InputProps } from './Input.types';

const InputSearchContainer: React.VFC<InputProps> = ({
  type,
  icon,
  iconURL,
  ...props
}) => (
  <SearchContainer iconURL={iconURL} {...props}>
    <Input type={type} icon={icon} {...props} />
  </SearchContainer>
);

export default InputSearchContainer;
