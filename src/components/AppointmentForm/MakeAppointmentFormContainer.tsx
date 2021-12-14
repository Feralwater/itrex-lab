import React, { useEffect, useState } from 'react';
import appointments from '../../resources/appointments/appointments.api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { appointmentValues } from './form.types';
import { appointment, doctorsByID, occupations } from '../../redux/actions';
import { MakeAppointmentForm } from './MakeAppointmentForm';
import { selectOccupations } from '../../redux/reducers/occupations.reducer';
import { selectDoctorsByID } from '../../redux/reducers/doctorsByID.reducer';

export const MakeAppointmentFormContainer:React.VFC = () => {
  const [selectedOccupationID, setSelectedOccupationID] = useState<string>('');
  const [selectedDoctorID, setSelectedDoctorID] = useState<string>('');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [freeTime, setFreeTime] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
  const { occupations: specializations } = useAppSelector(selectOccupations);
  const { doctors: doctorNames } = useAppSelector(selectDoctorsByID);
  useEffect(() => {
    dispatch(occupations.pending());
  }, [dispatch]);
  useEffect(() => {
    if (selectedOccupationID) {
      dispatch(doctorsByID.pending(selectedOccupationID));
    }
  }, [dispatch, selectedOccupationID]);
  const optionsForOccupationsSelect = specializations.map((specialization) => ({
    label: specialization.occupationName,
    value: specialization.occupationID,
  }));
  const optionsForDoctorNamesSelect = doctorNames.map((doctorName) => ({
    label: [doctorName.firstName, doctorName.lastName].join(' '),
    value: doctorName.doctorID,
  }));

  const fetchFreeTime = async () => {
    if (selectedOccupationID) {
      const { data } = await appointments.fetchFreeTime(selectedDate, selectedDoctorID);
      setFreeTime(data);
    } else {
      setFreeTime([]);
    }
  };

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
