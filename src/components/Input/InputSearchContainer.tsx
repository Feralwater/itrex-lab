import React, { ChangeEvent } from 'react';
import { Input } from './Input';
import { SearchContainer } from './Input.styles';
import { InputProps } from './Input.types';

export const InputSearchContainer: React.VFC<InputProps> = ({
  type,
  icon,
  iconURL,
  setSearchTerm,
  setPageNumber,
  ...props
}) => {
  const changeSearchValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (setSearchTerm && setPageNumber) {
      setSearchTerm(event.currentTarget.value);
      setPageNumber(1);
    }
  };

  return (
    <SearchContainer iconURL={iconURL} icon={icon}>
      <Input type={type} icon={icon} onChange={changeSearchValueHandler} {...props} />
    </SearchContainer>
  );
};
