import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppointmentValues } from './form.types';
import {
  appointment, doctorsByID, freeDoctorTime, occupations,
} from '../../redux/actions';
import { MakeAppointmentForm } from './MakeAppointmentForm';
import {
  selectOccupations, selectDoctorsByID, selectFreeDoctorTime, selectAppointment,
} from '../../redux/reducers';

export const MakeAppointmentFormContainer:React.VFC = () => {
  const [selectedOccupationID, setSelectedOccupationID] = useState<string>('');
  const [selectedDoctorID, setSelectedDoctorID] = useState<string>('');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const dispatch = useAppDispatch();
  const { occupations: specializations } = useAppSelector(selectOccupations);
  const { doctors: doctorNames } = useAppSelector(selectDoctorsByID);
  const { freeTime } = useAppSelector(selectFreeDoctorTime);
  const { responseStatus: makeAppointmentFetchStatus } = useAppSelector(selectAppointment);
  useEffect(() => {
    dispatch(occupations.pending());
  }, [dispatch]);
  useEffect(() => {
    if (selectedOccupationID) {
      dispatch(doctorsByID.pending(selectedOccupationID));
    }
  }, [dispatch, selectedOccupationID]);
  useEffect(() => {
    setDisableDate(!selectedDoctorID);
  }, [selectedDoctorID]);
  useEffect(() => {
    if (selectedDate) {
      dispatch(freeDoctorTime.pending({
        date: selectedDate,
        doctorID: selectedDoctorID,
      }));
    }
  }, [selectedDate, selectedDoctorID]);
  const optionsForOccupationsSelect = specializations.map((specialization) => ({
    label: specialization.occupationName,
    value: specialization.occupationID,
  }));
  const optionsForDoctorNamesSelect = doctorNames.map((doctorName) => ({
    label: [doctorName.firstName, doctorName.lastName].join(' '),
    value: doctorName.doctorID,
  }));
  const handleSubmitForm = (formValues: AppointmentValues) => {
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
      makeAppointmentFetchStatus={makeAppointmentFetchStatus}
    />
  );
};
