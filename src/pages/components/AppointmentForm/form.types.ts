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

export interface MakeAnAppointmentFormProps {
  // eslint-disable-next-line no-unused-vars
  handleSubmitForm: (formValues: appointmentValues) => void;
  optionsForOccupationsSelect: { label: string, value: string, }[];
  // eslint-disable-next-line no-unused-vars
  setSelectedOccupationID: (selectedOccupationID: string) => void;
  // eslint-disable-next-line no-unused-vars
  setSelectedDoctorID: (selectedDoctorID: string) => void;
  optionsForDoctorNamesSelect: { label: string, value: string, }[];
  disableDate: boolean;
  // eslint-disable-next-line no-unused-vars
  setSelectedDate: (selectedDate: string) => void;
  freeTime: Array<string>;
}
