import React from 'react';
import Select from 'react-select';
import { RequireSign, SelectLabel } from 'components/Select/SelectForAppointmentForm.styles';
import { searchOptionHelper } from './searchOptionHelper';

export const CustomSelect: React.VFC<any> = ({
  labelText,
  id,
  options,
  placeholder,
  onChangeHandler,
  isRequire,
  styles,
  labelPosition,
  ...props
}) => (
  <SelectLabel htmlFor={id} labelPosition={labelPosition}>
    <span>
      {labelText}
      {isRequire && <RequireSign>*</RequireSign>}
    </span>
    <Select
      {...props}
      id={id}
      placeholder={placeholder}
      formatOptionLabel={searchOptionHelper}
      styles={styles}
      options={options}
      onChange={onChangeHandler}
    />
  </SelectLabel>
);
