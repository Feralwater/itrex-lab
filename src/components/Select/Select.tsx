import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import SelectStyles from './Select.styles';
import { Options } from './Select.types';
import searchOptionHelper from './searchOptionHelper';

const CustomSelect = ({
  labelText, id, name, options, placeholder, setSelectedValue, ...props
}: any) => {
  const [, , { setValue }] = useField(props.field);

  const onChangeHandler = (value:Options) => {
    setValue(value);
    if (setSelectedValue) {
      setSelectedValue(value.value);
    }
  };

  return (
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
};

export default CustomSelect;
