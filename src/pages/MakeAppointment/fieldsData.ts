import { FormFieldData } from '../../components/AuthForms/Form.types';
import { InputFormContainer } from '../../components/Input';

const makeAppointmentsFieldsData: Array<FormFieldData> = [
  {
    component: InputFormContainer,
    name: 'reason',
    id: 'reason',
    label: 'Reason for the visit',
    type: 'text',
    placeholder: 'Leave a reason for the visit',
    icon: 'default',
    isRequire: true,
    inputSize: 'large',
  },
  {
    component: InputFormContainer,
    name: 'note',
    id: 'note',
    label: 'Note',
    type: 'text',
    placeholder: 'Leave a note if needed',
    icon: 'default',
    isRequire: false,
    inputSize: 'large',
  },
];
export default makeAppointmentsFieldsData;
