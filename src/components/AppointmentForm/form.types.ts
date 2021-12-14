import { Dispatch, SetStateAction } from 'react';

export interface appointmentValues {
  occupation: {
    label: string,
    value: string,
  },
  doctorName: {
    label: string,
    value: string,
  },
  reason: string,
  note: string,
  date: string,
  time: string,
}

export interface MakeAppointmentFormProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmitForm: (formValues: appointmentValues)=>void;
  optionsForOccupationsSelect: { label: string, value: string, }[];
  setSelectedOccupationID: Dispatch<SetStateAction<string>>;
  setSelectedDoctorID: Dispatch<SetStateAction<string>>;
  optionsForDoctorNamesSelect: { label: string, value: string, }[];
  disableDate: boolean;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  freeTime: Array<string>;
}
