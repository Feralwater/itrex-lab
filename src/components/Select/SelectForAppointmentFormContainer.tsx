import React from 'react';
import { useField } from 'formik';
import { CustomSelectPropsType, Options } from './Select.types';
import CustomSelect from './Select';

const SelectForAppointmentFormContainer: React.VFC<CustomSelectPropsType> = ({
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

  return (<CustomSelect onChangeHandler={onChangeHandler} {...props} />);
};

export default SelectForAppointmentFormContainer;
