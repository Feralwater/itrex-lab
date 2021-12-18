import { appointmentValues } from './form.types';

export const initialValuesForAppointmentForm: appointmentValues = {
  occupation: {
    label: '',
    value: '',
  },
  doctorName: {
    label: '',
    value: '',
  },
  reason: '',
  note: '',
  date: '',
  time: '',
};
