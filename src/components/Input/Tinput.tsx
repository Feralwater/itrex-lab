import React from 'react';
import { TextInput } from './Input.types';

const InputText:React.VFC<TextInput> = ({ label, ...props }) => (
  <label htmlFor="input">
    {label}
    <input {...props} />
  </label>
);
export default InputText;
