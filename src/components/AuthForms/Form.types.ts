import React, { Dispatch, SetStateAction } from 'react';
import { Status } from 'redux/reducers/reducers.types';
import { SignInData, SignUpData } from 'resources/auth/auth.types';
import { InputProps } from '../Input/Input.types';

export interface SignInValues {
  email: string;
  password: string;
}

export interface SignInFormProps {
  status: Status;
  handleSubmitForm: ({
    userName,
    password,
  }: SignInData) => void;
}

export interface SignUpFormProps {
  handleSubmitForm: ({
    userName,
    password,
    firstName,
    lastName,
  }: SignUpData) => void;
}

export interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormFieldData {
  component: React.VFC<InputProps>,
  name: string
  id: string
  label: string
  type: string
  placeholder: string
  icon: string
  iconURL?: string
  isRequire: boolean,
  inputSize: 'large' | 'small'
}

export interface RestoreValues {
  email: string;
}

export interface RestoreEmail {
  setEmailForRestorePassword: Dispatch<SetStateAction<string>>;
}
