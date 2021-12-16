import React from 'react';
import Select from 'react-select';
import { SelectLabel, SelectStyles } from './Select.styles';
import { searchOptionHelper } from './searchOptionHelper';

export const CustomSelect: React.VFC<any> = ({
  labelText,
  id,
  options,
  placeholder,
  onChangeHandler,
  ...props
}) => (
  <SelectLabel htmlFor={id}>
    {labelText}
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
