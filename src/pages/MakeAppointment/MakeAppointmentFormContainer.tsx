import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  selectOccupations,
  selectDoctorsByID,
  selectFreeDoctorTime,
  selectMakeAppointment,
  makeAppointmentSlice,
  getDoctorsByIDSlice, freeDoctorTimeSlice, occupationsSlice,
} from 'redux/reducers';
import { AppointmentValues } from './form.types';
import { MakeAppointmentForm } from './MakeAppointmentForm';

export const MakeAppointmentFormContainer:React.VFC = () => {
  const [selectedOccupationID, setSelectedOccupationID] = useState<string>('');
  const [selectedDoctorID, setSelectedDoctorID] = useState<string>('');
  const [disableDate, setDisableDate] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const dispatch = useAppDispatch();
  const { occupations: specializations } = useAppSelector(selectOccupations);
  const { doctors: doctorNames } = useAppSelector(selectDoctorsByID);
  const { freeTime } = useAppSelector(selectFreeDoctorTime);
  const { responseStatus: makeAppointmentFetchStatus } = useAppSelector(selectMakeAppointment);
  useEffect(() => {
    dispatch(occupationsSlice.actions.pending());
  }, [dispatch]);
  useEffect(() => {
    if (selectedOccupationID) {
      dispatch(getDoctorsByIDSlice.actions.pending(selectedOccupationID));
    }
  }, [dispatch, selectedOccupationID]);
  useEffect(() => {
    setDisableDate(!selectedDoctorID);
  }, [selectedDoctorID]);
  useEffect(() => {
    if (selectedDate) {
      dispatch(freeDoctorTimeSlice.actions.pending({
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
  const handleSubmitForm = useCallback((formValues: AppointmentValues) => {
    const {
      time: date, reason, note, doctorName: { value: doctorID },
    } = formValues;
    dispatch(makeAppointmentSlice.actions.pending({
      date, reason, note, doctorID,
    }));
  }, [dispatch]);
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
