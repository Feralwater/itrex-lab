import React, { Dispatch, SetStateAction } from 'react';
import { InputProps } from '../Input/Input.types';

export interface SignInValues {
  email: string
  password: string
}

export interface SignUpValues {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface FormFieldData {
  component: React.VFC<InputProps>,
  name: string
  inputName: string
  label: string
  type: string
  placeholder: string
  icon: string
  iconURL?: string
  inputSize: 'large' | 'small'
}

export interface RestoreValues {
  email: string
}

export interface RestoreEmail {
  setRestorePassword:Dispatch<SetStateAction<string>>;
}
