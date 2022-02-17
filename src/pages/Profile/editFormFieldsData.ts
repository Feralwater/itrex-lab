import { FormFieldData } from 'components/AuthForms/Form.types';
import { InputFormContainer } from 'components/Input';

export const signUpFieldsData:Array<FormFieldData> = [
  {
    component: InputFormContainer,
    name: 'firstName',
    id: 'firstName',
    label: 'First Name',
    placeholder: 'First Name',
    type: 'text',
    icon: 'default',
    isRequire: false,
    inputSize: 'small',
  },
  {
    component: InputFormContainer,
    name: 'lastName',
    id: 'lastName',
    label: 'Last Name',
    placeholder: 'Last Name',
    type: 'text',
    icon: 'default',
    isRequire: false,
    inputSize: 'small',
  },
];
