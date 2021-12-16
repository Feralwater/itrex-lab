import { FormFieldData } from '../../components/AuthForms/Form.types';
import { Input } from '../../components';

export const signUpFieldsData:Array<FormFieldData> = [
  {
    component: Input,
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
    component: Input,
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
