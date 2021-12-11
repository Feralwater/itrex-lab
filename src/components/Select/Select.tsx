import React from 'react';
import Select from 'react-select';
import SelectStyles from './Select.styles';
import searchOptionHelper from './searchOptionHelper';

const CustomSelect = ({
  labelText, id, name, options, placeholder, setSelectedValue, onChangeHandler, ...props
}: any) => (
  <label htmlFor={id}>
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
  </label>
);

export default CustomSelect;
