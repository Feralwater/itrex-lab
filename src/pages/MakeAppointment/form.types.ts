import { Dispatch, SetStateAction } from 'react';
import { Status } from '../../redux/reducers/reducers.types';

export interface AppointmentValues {
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
  handleSubmitForm: (formValues: AppointmentValues)=>void;
  optionsForOccupationsSelect: { label: string, value: string, }[];
  setSelectedOccupationID: Dispatch<SetStateAction<string>>;
  setSelectedDoctorID: Dispatch<SetStateAction<string>>;
  optionsForDoctorNamesSelect: { label: string, value: string, }[];
  disableDate: boolean;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  freeTime: Array<string>;
  makeAppointmentFetchStatus: Status
}
