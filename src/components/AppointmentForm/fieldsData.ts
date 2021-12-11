import { FormFieldData } from '../AuthForms/Form.types';
import InputFormContainer from '../Input/InputFormContainer';

const makeAppointmentsFieldsData: Array<FormFieldData> = [
  {
    component: InputFormContainer,
    name: 'reason',
    inputName: 'reason',
    label: 'Reason for the visit',
    type: 'text',
    placeholder: 'Leave a reason for the visit',
    icon: 'default',
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
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
