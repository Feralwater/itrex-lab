import { FormFieldData } from '../../components/AuthForms/Form.types';
import { InputFormContainer } from '../../components';

export const EditProfileInitial = {
  firstName: '',
  lastName: '',
  avatar: '',
};
export const changePasswordInitial = {
  oldPassword: '',
  newPassword: '',
};

export const changePasswordFieldsData:Array<FormFieldData> = [
  {
    component: InputFormContainer,
    name: 'oldPassword',
    id: 'oldPassword',
    label: 'Old Password',
    type: 'password',
    placeholder: 'Enter your old password',
    icon: 'left',
    iconURL: '/svg/email.svg',
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
    name: 'newPassword',
    id: 'newPassword',
    label: 'New Password',
    placeholder: 'Enter your new password',
    type: 'password',
    icon: 'left',
    iconURL: '/svg/lock.svg',
    inputSize: 'large',
  },
];
