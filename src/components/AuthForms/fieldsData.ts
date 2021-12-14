import { FormFieldData } from './Form.types';
import { InputFormContainer } from '../Input';

export const signInFieldsData:Array<FormFieldData> = [
  {
    component: InputFormContainer,
    name: 'email',
    id: 'email',
    label: '',
    type: 'email',
    placeholder: 'Email',
    icon: 'left',
    iconURL: '/svg/email.svg',
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
    name: 'password',
    id: 'password',
    label: '',
    placeholder: 'Password',
    type: 'password',
    icon: 'left',
    iconURL: '/svg/lock.svg',
    inputSize: 'large',
  },
];

export const signUpFieldsData:Array<FormFieldData> = [
  {
    component: InputFormContainer,
    name: 'firstName',
    id: 'firstName',
    label: '',
    placeholder: 'First Name',
    type: 'text',
    icon: 'left',
    iconURL: '/svg/user.svg',
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
    name: 'lastName',
    id: 'lastName',
    label: '',
    placeholder: 'Last Name',
    type: 'text',
    icon: 'left',
    iconURL: '/svg/user.svg',
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
    name: 'email',
    id: 'email',
    label: '',
    placeholder: 'Email',
    type: 'email',
    icon: 'left',
    iconURL: '/svg/email.svg',
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
    name: 'password',
    id: 'password',
    label: '',
    placeholder: 'Password',
    type: 'password',
    icon: 'left',
    iconURL: '/svg/lock.svg',
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
    name: 'confirmPassword',
    id: 'confirmPassword',
    label: '',
    placeholder: 'Confirm password',
    type: 'password',
    icon: 'left',
    iconURL: '/svg/check-mark.svg',
    inputSize: 'large',
  },
];

export const restoreFieldsData:Array<FormFieldData> = [
  {
    component: InputFormContainer,
    name: 'email',
    id: 'email',
    label: '',
    type: 'email',
    placeholder: 'Email',
    icon: 'left',
    iconURL: '/svg/email.svg',
    inputSize: 'large',
  },
];
