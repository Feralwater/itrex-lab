import React from 'react';
import { useField } from 'formik';
import { Options, SelectProps } from './Select.types';
import { CustomSelect } from './Select';

export const SelectForAppointmentFormContainer: React.VFC<SelectProps> = ({
  setSelectedValue,
  ...props
}) => {
  const [, , { setValue }] = useField(props.field);

  const onChangeHandler = (value: Options) => {
    setValue(value);
    if (setSelectedValue) {
      setSelectedValue(value.value);
    }
  };

  return (<CustomSelect onChangeHandler={onChangeHandler} isRequire {...props} />);
};
