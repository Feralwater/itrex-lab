import { Dispatch, SetStateAction } from 'react';
import { FieldProps } from 'formik';

export interface Options {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  labelText: string;
  id: string;
  name: string;
  options: Options[];
  placeholder?: string;
  setSelectedValue?: Dispatch<SetStateAction<string>>;
}

export type SelectProps = CustomSelectProps & FieldProps;

export interface LabelType {
  label: string;
}

export interface InputValueType {
  inputValue: string;
}
