/* eslint-disable no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';
import { InputProps } from '../Input/Input.types';
import { Status } from '../../redux/reducers/reducers.types';
import { SignInData } from '../../resources/auth/auth.types';

export interface SignInValues {
  email: string
  password: string
}
export interface SignInFormProps {
  status: Status
  handleSubmitForm: ({
    userName,
    password,
  }: SignInData) => void
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
  id: string
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
