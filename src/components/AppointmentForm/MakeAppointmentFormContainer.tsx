import React, { useEffect, useState } from 'react';
import { DoctorsBySpecializationIdResponse } from '../../resources/doctors/doctors.types';
import doctors from '../../resources/doctors/doctors.api';
import appointments from '../../resources/appointments/appointments.api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentValues } from './form.types';
import { appointment, occupations } from '../../redux/actions';
import { MakeAppointmentForm } from './MakeAppointmentForm';
import { selectOccupations } from '../../redux/reducers/occupations.reducer';

export const MakeAppointmentFormContainer:React.VFC = () => {
  const [doctorNames, setDoctorNames] = useState<Array<DoctorsBySpecializationIdResponse>>([]);
  const [selectedOccupationID, setSelectedOccupationID] = useState<string>('');
  const [selectedDoctorID, setSelectedDoctorID] = useState<string>('');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [freeTime, setFreeTime] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
  const { occupations: specializations } = useAppSelector(selectOccupations);
  useEffect(() => {
    dispatch(occupations.pending());
  }, []);
  const optionsForOccupationsSelect = specializations.map((specialization) => ({
    label: specialization.occupationName,
    value: specialization.occupationID,
  }));
  const optionsForDoctorNamesSelect = doctorNames.map((doctorName: DoctorsBySpecializationIdResponse) => ({
    label: [doctorName.first_name, doctorName.last_name].join(' '),
    value: doctorName.id,
  }));

  const getDoctors = async () => {
    if (selectedOccupationID) {
      const { data } = await doctors.fetchDoctorsBySpecializationId(selectedOccupationID);
      setDoctorNames(data);
    } else {
      setDoctorNames([]);
    }
  };
  const fetchFreeTime = async () => {
    if (selectedOccupationID) {
      const { data } = await appointments.fetchFreeTime(selectedDate, selectedDoctorID);
      setFreeTime(data);
    } else {
      setFreeTime([]);
    }
  };

  useEffect(() => {
    getDoctors();
  }, [selectedOccupationID]);
  useEffect(() => {
    setDisableDate(!selectedDoctorID);
  }, [selectedDoctorID]);
  useEffect(() => {
    fetchFreeTime();
  }, [selectedDate, selectedDoctorID]);

  const handleSubmitForm = (formValues: appointmentValues) => {
    const {
      time: date, reason, note, doctorName: { value: doctorID },
    } = formValues;
    dispatch(appointment.pending({
      date, reason, note, doctorID,
    }));
  };
  return (
    <MakeAppointmentForm
      handleSubmitForm={handleSubmitForm}
      optionsForOccupationsSelect={optionsForOccupationsSelect}
      setSelectedOccupationID={setSelectedOccupationID}
      setSelectedDoctorID={setSelectedDoctorID}
      optionsForDoctorNamesSelect={optionsForDoctorNamesSelect}
      disableDate={disableDate}
      setSelectedDate={setSelectedDate}
      freeTime={freeTime}
    />
  );
};
