import React from 'react';
import Select from 'react-select';
import { RequireSign, SelectLabel, SelectStyles } from './Select.styles';
import { searchOptionHelper } from './searchOptionHelper';

export const CustomSelect: React.VFC<any> = ({
  labelText,
  id,
  options,
  placeholder,
  onChangeHandler,
  isRequire,
  ...props
}) => (
  <SelectLabel htmlFor={id}>
    <span>
      {labelText}
      {isRequire && <RequireSign>*</RequireSign>}
    </span>
    <Select
      {...props}
      id={id}
      placeholder={placeholder}
      formatOptionLabel={searchOptionHelper}
      styles={SelectStyles}
      options={options}
      onChange={onChangeHandler}
    />
  </SelectLabel>
);
