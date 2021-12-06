import Input from '../../../components/Input/Input';
import { FormFieldData } from './Form.types';

export const signInFieldsData:Array<FormFieldData> = [
  {
    component: Input,
    name: 'email',
    inputName: 'email',
    label: '',
    type: 'email',
    placeholder: 'Email',
    icon: 'left',
    iconURL: 'svgImages/email.svg',
  },
  {
    component: Input,
    name: 'password',
    inputName: 'password',
    label: '',
    placeholder: 'Password',
    type: 'password',
    icon: 'left',
    iconURL: 'svgImages/lock.svg',
  },
];

export const signUpFieldsData:Array<FormFieldData> = [
  {
    component: Input,
    name: 'firstName',
    inputName: 'firstName',
    label: '',
    placeholder: 'First Name',
    type: 'text',
    icon: 'left',
    iconURL: 'svgImages/user.svg',
  },
  {
    component: Input,
    name: 'lastName',
    inputName: 'lastName',
    label: '',
    placeholder: 'Last Name',
    type: 'text',
    icon: 'left',
    iconURL: 'svgImages/user.svg',
  },
  {
    component: Input,
    name: 'email',
    inputName: 'email',
    label: '',
    placeholder: 'Email',
    type: 'email',
    icon: 'left',
    iconURL: 'svgImages/email.svg',
  },
  {
    component: Input,
    name: 'password',
    inputName: 'password',
    label: '',
    placeholder: 'Password',
    type: 'password',
    icon: 'left',
    iconURL: 'svgImages/lock.svg',
  },
  {
    component: Input,
    name: 'confirmPassword',
    inputName: 'confirmPassword',
    label: '',
    placeholder: 'Confirm password',
    type: 'password',
    icon: 'left',
    iconURL: 'svgImages/check-mark.svg',
  },
];

export const restoreFieldsData:Array<FormFieldData> = [
  {
    component: Input,
    name: 'email',
    inputName: 'email',
    label: '',
    type: 'email',
    placeholder: 'Email',
    icon: 'left',
    iconURL: 'svgImages/email.svg',
  },
];
