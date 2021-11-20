import { useField } from 'formik';
import React from 'react';
import StyledInput from './Input.styles';
import { InputTextPropsType } from './Input.types';

const InputText:React.VFC<InputTextPropsType> = ({ label, ...props }) => {
  const [field] = useField(props.field);
  return (
    <label htmlFor="input">
      {label}
      <StyledInput type="text" {...field} {...props} />
    </label>
  );
};
export default InputText;
