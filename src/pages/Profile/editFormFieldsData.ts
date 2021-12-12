import { FormFieldData } from '../../components/AuthForms/Form.types';
import { Input } from '../../components/Input/Input';

export const signUpFieldsData:Array<FormFieldData> = [
  {
    component: Input,
    name: 'firstName',
    inputName: 'firstName',
    label: 'First Name',
    placeholder: 'First Name',
    type: 'text',
    icon: 'default',
    inputSize: 'small',
  },
  {
    component: Input,
    name: 'lastName',
    inputName: 'lastName',
    label: 'Last Name',
    placeholder: 'Last Name',
    type: 'text',
    icon: 'default',
    inputSize: 'small',
  },
];
