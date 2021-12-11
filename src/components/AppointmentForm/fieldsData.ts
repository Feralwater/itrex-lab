import Input from '../Input/Input';
import { FormFieldData } from '../AuthForms/Form.types';

const makeAppointmentsFieldsData: Array<FormFieldData> = [
  {
    component: Input,
    name: 'reason',
    inputName: 'reason',
    label: 'Reason for the visit',
    type: 'text',
    placeholder: 'Leave a reason for the visit',
    icon: 'default',
    inputSize: 'large',
  },
  {
    component: Input,
    name: 'note',
    inputName: 'note',
    label: 'Note',
    type: 'text',
    placeholder: 'Leave a note if needed',
    icon: 'default',
    inputSize: 'large',
  },
];
export default makeAppointmentsFieldsData;
