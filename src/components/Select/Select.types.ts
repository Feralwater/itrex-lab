/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from 'react';
import { FieldProps, FormikHandlers } from 'formik';

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

export type SelectProps = CustomSelectProps & FieldProps

export interface LabelType {
  label: string;
}

export interface InputValueType {
  inputValue: string;
}
