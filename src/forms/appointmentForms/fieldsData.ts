import Input from '../../components/Input/Input';
import { FormFieldData } from '../authForms/form.types';

const makeAppointmentsFieldsData:Array<FormFieldData> = [
  {
    component: Input,
    name: 'reason',
    inputName: 'reason',
    label: 'Reason for the visit',
    type: 'text',
    placeholder: 'Leave a reason for the visit',
    icon: 'default',
  },
  {
    component: Input,
    name: 'note',
    inputName: 'note',
    label: 'Note',
    type: 'text',
    placeholder: 'Leave a note if needed',
    icon: 'default',
  },
];
export default makeAppointmentsFieldsData;
