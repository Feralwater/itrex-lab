import React from 'react';
import { Input } from './Input';
import { SearchContainer } from './Input.styles';
import { InputProps } from './Input.types';

export const InputSearchContainer: React.VFC<InputProps> = ({
  type,
  icon,
  iconURL,
  ...props
}) => (
  <SearchContainer iconURL={iconURL} icon={icon}>
    <Input type={type} icon={icon} {...props} />
  </SearchContainer>
);
