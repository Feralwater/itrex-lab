import { useField } from 'formik';
import React from 'react';
import StyledInput from './Input.styles';

const InputText = ({ label, ...props }:any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor="input">
        {label}
        <StyledInput type="text" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
};
export default InputText;
